class Quote2 {
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

    static createQuotes() {
        for (let quotes of Quote2.allQuotes) {
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
    }

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
        .then(Quote2.createQuotes)
        // .then(Comment.createComment())
    }
}