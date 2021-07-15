const quotesDiv = document.getElementById("quote-container")
const headDiv = document.getElementById("quote-container")

class Quote {
    constructor(quotes){
        this.description = quotes.description
        this.link = quotes.link
        this.id = quotes.id
    }

    static allQuotes = [{description: "You can follow him on Facebook, and he'll come out on Twitter!", link: "https://www.youtube.com/watch?v=oT9kPvzYPhs"},
    {description: "Sir Isaac Newton from up above, looks down and says, 'About that gravity thing? I was wrong, Messi was right!'", link: "https://www.youtube.com/watch?v=ciQKYsXip-M"},
    {description: "You can drop a tarantula into his shorts and he'll still be cool!", link: "https://www.youtube.com/watch?v=vNf8eGnNTDA"},
    {description: "He curls this divinely with more curve on it than Jessica Rabbit!", link: "https://www.youtube.com/watch?v=jQGIceRIzuA"},
    {description: "As electrifying as a hairdryer thrown into a hot tub!", link: "https://www.youtube.com/watch?v=0Pca2t3A5rk"}]

    static counter = 0

    static createQuotes(){
        for (let quotes of Quote.allQuotes) {
            function appendQuote(){
                const div = document.createElement("div")
                const a = document.createElement('a')
                const link = document.createTextNode(quotes.description)
                // a.setAttribute('href', quotes.link)
                a.appendChild(link)
                a.title = quotes.description
                a.href = quotes.link
                document.body.appendChild(a)
                const h2 = document.createElement('h2')
                h2.innerHTML = a.title
                div.appendChild(a)
                quotesDiv.append(div)
                return fetch(`http://localhost:3000/quotes/${quotes.link}`)
                .then(resp => resp.json)
                .then(quotes)
                // .then(Quote.dynamicVideo)
            }

            console.log(quotes)
            appendQuote()
            
            
        
        }
        // console.log(Quote.allQuotes)

        // console.log(q)

        
    };

    // static dynamicVideo(){
    //     let ytVideos = JSON.parse(Quote.allQuotes)

    //     for (let i in ytVideos.quotes) {
    //         let ytVideo = $("<iframe/>");
    //         ytVideo.attr({
    //           width: 560,
    //           height: 315,
    //           src: 'https://www.youtube.com/embed/' + ytVideos.quotes[i].link,
    //           frameborder: 0
    //         });
    //         $("#quote-container").append(ytVideo);
    //     }
    // }

    

    static fetchQuotes(){
        username.remove()
        buttonQuote.remove()
        welcome.remove()
        headDiv.append("Our 5 best Ray Hudson quotes! Click the quotes to see his quotes in action on camera!")
        fetch("http://localhost:3000/quotes")
        .then(resp => resp.json())
        .then(data => console.log(data))
        .then(Quote.createQuotes)
    }
}