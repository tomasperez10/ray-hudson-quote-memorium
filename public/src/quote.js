const quotesDiv = document.getElementById("quote-container")
const headDiv = document.getElementById("quote-container")

class Quote {
    // constructor(quotes){
    //     this.description = quotes.description
    //     this.link = quotes.link
    //     this.id = quotes.id
    //     Quote.allQuotes.push(this)
    // }
    // static allQuotes = []

    static allQuotes = [
        {
            id: 1, 
            description: "You can follow him on Facebook, and he'll come out on Twitter!", 
            link: "https://www.youtube.com/watch?v=oT9kPvzYPhs",
            comments: []
        },
        {
            id: 2, 
            description: "Sir Isaac Newton from up above, looks down and says, 'About that gravity thing? I was wrong, Messi was right!'", 
            link: "https://www.youtube.com/watch?v=ciQKYsXip-M",
            comments: []
        },
        {
            id: 3, 
            description: "You can drop a tarantula into his shorts and he'll still be cool!", 
            link: "https://www.youtube.com/watch?v=vNf8eGnNTDA",
            comments: []
        },
        {
            id: 4, 
            description: "He curls this divinely with more curve on it than Jessica Rabbit!", 
            link: "https://www.youtube.com/watch?v=jQGIceRIzuA",
            comments: []
        },
        {
            id: 5, 
            description: "As electrifying as a hairdryer thrown into a hot tub!", 
            link: "https://www.youtube.com/watch?v=0Pca2t3A5rk",
            comments: []
        }
    ]


    static createQuotes(){
        for (let quotes of Quote.allQuotes) {
            function appendComment() {
                const div = document.createElement('div')
                const form = document.createElement('form')
                const label = document.createElement('label')
                const input = document.createElement('input')
                const button = document.createElement('input')

                label.innerHTML = 'Comment:'
                input.type = 'text'
                input.id = 'comment'
                input.name = 'comment'
                button.type = 'submit'
                button.value = 'Submit'

                form.appendChild(label)
                form.appendChild(input)
                form.appendChild(button)

                // form.action = 
                form.onsubmit = (comment) => {
                    fetch(`http://localhost:3000/quotes/${quotes.id}/comments`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json"
                            },
                            body: JSON.stringify({
                                description: comment.description,
                                quote_id: quotes.id
                            })
                        })
                        .then(resp => resp.json())
                        .then(r => {
                            new Comment(r);
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                }
                // form.action  = `http://localhost:3000/quotes/${quotes.id}/comments`
                // form.method = 'post'

                div.appendChild(form)
                return div
            }

            function appendQuote(){
                const div = document.createElement("div")
                const a = document.createElement('a')
                const link = document.createTextNode(quotes.description)
                a.appendChild(link)
                a.title = quotes.description
                a.href = quotes.link
                document.body.appendChild(a)
                const h2 = document.createElement('h2')
                h2.innerHTML = a.title
                div.appendChild(a)

                div.appendChild(appendComment())
                quotesDiv.append(div)
                return fetch(`http://localhost:3000/quotes/${quotes.link}`,
                {
                    method: "GET"
                })
                .then(resp => resp.json)
                .then(quotes)
            }

            appendQuote()  
        }        
    };

    static fetchQuotes(){
        username.remove()
        buttonQuote.remove()
        welcome.remove()
        headDiv.append("Our 5 best Ray Hudson quotes! Click the quotes to see his quotes in action on camera!")
        fetch("http://localhost:3000/quotes",
        {
            method: "GET"
        })
        .then(resp => resp.json())
        // .then(data => console.log(data))
        .then(Quote.createQuotes)
        // .then(Comment.createComment())
    }
}