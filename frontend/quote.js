class Quote{
    constructor(quote){
        Quote.allQuotes.push(this)
        this.description = quote.description
        this.id = quote.id
    }

    static allQuotes = []

    
}