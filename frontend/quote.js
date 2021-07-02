class Quote{
    constructor(quote){
        Quote.allQuotes.push(this)
        this.description = quote.description
        this.id = quote.id
    }

    static all = []
    static quote1 = "You can follow him on Facebook, and he'll come out on Twitter!"
    static quote2 = "Sir Isaac Newton from up above, looks down and says, 'About that gravity thing? I was wrong, Messi was right!'"
    static quote3 = "You can drop a tarantula into his shorts and he'll still be cool!"
    static quote4 = "He curls this divinely with more curve on it than Jessica Rabbit!"
    static quote5 = "As electrifying as a hairdryer thrown into a hot tub!"
    
}