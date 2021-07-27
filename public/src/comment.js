const commentsDiv = document.getElementById("quote-container")

class Comment {
    constructor(comment){
        this.description = comment.description
        // this.quote_id = comments.quote_id
        // this.user_id = comments.user_id
    }

    static createComment() {
        for (let quote of Quote.allQuotes) {
            const form = document.createElement('form')
            const label = document.createElement('label')
            const input = document.createElement('input')
            const button = document.createElement('input')
            form.action = fetch(`http://localhost:3000/comments`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        body: JSON.stringify({comment: newComment})
                    })
                    .then(resp => resp.json())
                    .then(r => {
                        new Comment(r);
                    })
                    .then(quote)
                    .catch((error) => {
                        console.log(error)
                    })

            label.innerHTML = 'Comment:'
            input.type = 'text'
            input.id = 'comment'
            input.name = 'comment'
            button.type = 'submit'
            button.value = 'Submit'

            document.quote.appendChild(form)
            form.appendChild(label)
            form.appendChild(input)
            form.appendChild(button)
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