// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        // console.log(data.data.articles);
        // Alternate method: set up the below with an array of topics, rather than all the repeated lines

        const categories = Object.keys(data.data.articles)
        categories.forEach(cat => {
            console.log(cat, data.data.articles[cat])
            data.data.articles[cat].forEach(article => {
                cardsContainer.appendChild(createCard(article.headline, article.authorPhoto, article.authorName))})
        })
    })

    // Below is the long way:
        // grabbing the data. Each of these is an array of article objects
        // const bootstrap = data.data.articles.bootstrap;
        // const js = data.data.articles.javascript;
        // const jquery = data.data.articles.jquery;
        // const node = data.data.articles.node;
        // const technology = data.data.articles.technology;

        // for each article in each array, createCard with the article's keys for headline, photo, authorName
    //     bootstrap.forEach(article => {
    //         cardsContainer.appendChild(createCard(article.headline, article.authorPhoto, article.authorName))})
    //     js.forEach(article => {
    //         cardsContainer.appendChild(createCard(article.headline, article.authorPhoto, article.authorName))})
    //     jquery.forEach(article => {
    //         cardsContainer.appendChild(createCard(article.headline, article.authorPhoto, article.authorName))})
    //     node.forEach(article => {
    //         cardsContainer.appendChild(createCard(article.headline, article.authorPhoto, article.authorName))})
    //     technology.forEach(article => {
    //         cardsContainer.appendChild(createCard(article.headline, article.authorPhoto, article.authorName))})
    // })

// Function to create a card, given three parameters: headline, image url, author's name
function createCard(headlineString, imageUrl, authorString){
    // create
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const attrib = document.createElement('span');

    // structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(attrib);

    // classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // content
    headline.textContent = headlineString;
    img.src = `${imageUrl}`;
    attrib.textContent = `By ${authorString}`;


    // console.log(card);
    return card;
}