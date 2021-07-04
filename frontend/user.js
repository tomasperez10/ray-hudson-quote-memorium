class User {
    constructor(user){
        this.username = user.username
        this.id = user.id
        User.currentUser = this
    }

    static currentUser = ''

    static getUsername(){
        const newUser = username.value
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({username: newUser})
        })
        .then(resp => resp.json())
        .then(r => {
            new User(r);
        })
        .catch((error) => {
            console.log(error)
        })
        Quote.fetchQuotes()
    }

    postFetch(data){
        return fetch(`http://localhost:3000/users/${this.id}/quotes`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    getCurrentUser(){
        fetch(`http://localhost:3000/users/${this.id}`)
        .then(resp => resp.json())
        .then(User.currentUser)
    }
}