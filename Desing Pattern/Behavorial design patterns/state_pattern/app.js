const PageState = function() {
    let currentState = new homeState(this);

    this.init = function() {
        this.change(new homeState);
    }

    this.change = function(state) {
        currentState = state;
    }
}

// Home State
const homeState = function(page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Custom jumbotron</h1>
            <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
            <button class="btn btn-primary btn-lg" type="button">Example button</button>
        </div>
    </div>
    `;
};

// About State
const aboutState = function(page) {
    document.querySelector('#heading').textContent = 'About us';
    document.querySelector('#content').innerHTML = `
        <p>This is the about page</p>
    `;
}

// Contact State
const contactState = function(page) {
    document.querySelector('#heading').textContent = 'Contact us';
    document.querySelector('#content').innerHTML = `
        <form>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="">Email address</label>
                <input type="email" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `;
};

// Instantiate pageState
const page = new PageState();

// Init the thirst state
page.init();

// UI Vars
const home = document.getElementById('home'),
    about = document.getElementById('about'),
    contact = document.getElementById('contact');

// Home
home.addEventListener('click',(e) => {
    page.change(new homeState);

    e.preventDefault();
});

// About
about.addEventListener('click',(e) => {
    page.change(new aboutState);

    e.preventDefault();
});

// Contact
contact.addEventListener('click',(e) => {
    page.change(new contactState);

    e.preventDefault();
});