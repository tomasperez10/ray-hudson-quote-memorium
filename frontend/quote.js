const quotesDiv = document.getElementById("quote-container")
let div = document.getElementById("single-quote")


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
        if (!div){
            div = document.createElement("div")
            div.setAttribute('id', 'single-quote')
        }
        const h2 = document.createElement('h2')
        h2.innerText = this.description
        div.append(h2)
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