// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card"> 
    //   <div class="headline">{Headline of article}</div>
    //   <div class="author">
        //     <div class="img-container">
        //              <img src={url of authors image} />
        //     </div>
        //     <span>By {author's name}</span>
    //   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.



function articleCards(data) {
    // will append -card > headlineArticle /////\\\\\\authorContainer > imgContainer > imglink > authorNameSpan
    const card = document.createElement('div');
    const headlineArticle = document.createElement('div');

    // author container nesting of elements
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgLink = document.createElement('img');
    const authorNamesSpan = document.createElement('span')

    // add classes 
    card.classList.add('card')
    headlineArticle.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // add text content
    headlineArticle.textContent = data.headline;
    imgLink.setAttribute('src', data.authorPhoto)
    authorNamesSpan.textContent = data.authorName;

    // append elements
    card.append(headlineArticle, author);
    author.append(imgContainer, authorNamesSpan);
    imgContainer.append(imgLink)


    return card;
    console.log('testing if card works and has all the elements inside', card)
}

const container = document.querySelector(".cards-container")



// AXIOS CALL
axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        Object.values(response.data.articles).forEach(datas => {
            datas.forEach(data => {
                container.append(articleCards(data))
            })
            
        })
        console.log(response, 'data response on foreach is working')
    })
    .catch(error => {
        console.log('error here', error)
    })