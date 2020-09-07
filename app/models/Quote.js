export default class Quote {

  constructor({body, author, hideauthor}){
    this.quotebody = body
    this.quoteauthor = author
  }


  //TODO on hover effect possible with pure styling in css
  get Template(){
    return `
    <div class="card border-0 bg-transparent">
      <div class="card-header border-0 bg-transparent">
        <h5>Quote of the Day</h5>
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p class="quotebody">${this.quotebody}</p>
          <footer class="blockquote-footer text-white hide">${this.quoteauthor}</footer>
        </blockquote>
      </div>
    </div>
    `
  }

}