const commentsDiv = document.getElementById("quote-container")

class Comment {
    constructor(comment){
        this.description = comment.description
        this.quote_id = comments.quote_id
        this.user_id = comments.user_id
    }

    static createComment() {
        for (let quote of Quote.allQuotes) {
            // const commentsDiv = document.getElementById(quote.id)
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

            document.body.appendChild(div)

            form.appendChild(label)
            form.appendChild(input)
            form.appendChild(button)

            form.action = fetch(`http://localhost:3000/quotes/comments`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                    })
                    .then(resp => resp.json())
                    .then(r => {
                        new Comment(r);
                    })
                    .catch((error) => {
                        console.log(error)
                    })

            div.appendChild(form)

            const p = document.createElement('p')
            p.innerHTML = this.description
            commentsDiv.append(div)

          

            // function appendComment(){
            //     const div = document.createElement("div")
            //     const input = document.createElement('input')
            //     const button = document.createElement('button')
            //     input.type = 'text'
            //     input.id = 'comment'
            //     input.value = 'Submit'
            //     input.className = 'ipt'
            //     button.type = 'button'
            //     button.id = 'comment'
            //     button.value = 'Submit'
            //     button.className = 'btn'
            //     document.body.appendChild(input)
            //     document.body.appendChild(button)
            //     const p = document.createElement('p')
            //     p.innerHTML = this.description
            //     div.appendChild(input)
            //     commentsDiv.append(div)

                

            //     const newComment = comment.value
            //     button.addEventListener("click", newComment)

            //     return fetch(`http://localhost:3000/comments`, {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //             "Accept": "application/json"
            //         },
            //         body: JSON.stringify({comment: newComment})
            //     })
            //     .then(resp => resp.json())
            //     .then(r => {
            //         new Comment(r);
            //     })
            //     .then(quote)
            //     .catch((error) => {
            //         console.log(error)
            //     })

            // }
            // appendComment()
        }
    }





}