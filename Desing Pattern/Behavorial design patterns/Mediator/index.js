var Member = function (name) {
    this.name = name;
    this.chatgroup = null;
}

Member.prototype.send = function(message) {
    this.chatgroup.send(this, message);
}

Member.prototype.receive = function(...args) {
    const [sender,message] = args[0];
    console.log("sender " + sender.name + " message: " + message);
}

Member.prototype.notification = function(message) {
    console.log(message);
}

class ChatGroup {
    constructor(name) {
        this.name = name;
        this.members = {} 
    }

    add = function(member) {
        this.members[member.name] = member;
        member.chatgroup = this;
        Object.keys(this.members).forEach((key) => {
            this.members[key].notification("new member " + member.name);
        })
    }

    // broadcast message to all members of the group chat
    send = function(...args) {
        const [sender] = args;
        Object.keys(this.members).forEach((key) => {
            if (key !== sender.name) {
                this.members[key].receive(args);
            }
        })
    }
}

var chatgroup = new ChatGroup("Family & Friends");
var member1 = new Member("Sandra");
var member2 = new Member("Dylan");
var member3 = new Member("Annie");

chatgroup.add(member1);
chatgroup.add(member2);
chatgroup.add(member3);

member1.send("Hey all, what are you doing today ?");