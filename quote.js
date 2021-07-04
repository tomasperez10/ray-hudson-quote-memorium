const quotesDiv = document.getElementById("quote-container")


class Quote{
    constructor(quote){
        Quote.allQuotes.push(this)
        this.description = quote.description
        this.link = quote.link
        this.id = quote.id
    }

    static allQuotes = []
    static counter = 0

    static createQuotes(quotes){
        for (let q of quotes){
            new Quote(q) 
        }
        const q = Quote.allQuotes[Quote.counter++]
        q.appendQuote()
    };

    appendQuote(){
        const div = document.createElement("div")
        const a = document.createElement('a')
        a.setAttribute('id', this.link)
        a.addEventListener("click", this.link)
        const h2 = document.createElement('h2')
        h2.innerText = this.description
        div.appendChild(a)
        div.appendChild(h2)
        quotesDiv.append(div)
    };

    static fetchQuotes(){
        username.remove()
        buttonQuote.remove()
        fetch("http://localhost:3000/quotes")
        .then(resp => resp.json())
        .then(Quote.createQuotes)
    }
}