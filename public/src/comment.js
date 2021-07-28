class Comment {
    constructor(comment){
        this.description = comment.description
        this.quote_id = comment.quote_id
        this.user_id = comment.user_id
    }

    static createComment(comment) {
        const quoteDiv = document.getElementById(comment.quote_id)
        const item = document.createElement('li')
        item.textContent = comment.description
        quoteDiv.appendChild(item)
    }





}