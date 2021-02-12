import axios from 'axios';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  let crd = document.createElement('div');
  let hline = document.createElement('div');
  let auth = document.createElement('div');
  let imc = document.createElement('div');
  let ims = document.createElement('img');
  let aname = document.createElement('span');

  crd.classList.add('card');
  hline.classList.add('headline');
  auth.classList.add('author');
  imc.classList.add('img-container');

  crd.appendChild(hline);
  crd.appendChild(auth);
  auth.appendChild(imc);
  auth.appendChild(aname);
  imc.appendChild(ims);

  hline.textContent = article.headline;
  ims.setAttribute('src', article.authorPhoto);
  aname.textContent = article.authorName;

  crd.addEventListener('click', () => {
    console.log(hline);
  });

  return crd;

}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  
  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  .then( (res) => {
    // console.log(res)
    res.data.articles.javascript.forEach(item => {
      // console.log(item)
      // console.log(Card(item))
      document.querySelector(selector).append(Card(item))
    })
    res.data.articles.bootstrap.forEach(item => {
      
      document.querySelector(selector).append(Card(item))
    })
    res.data.articles.technology.forEach(item => {
      
      document.querySelector(selector).append(Card(item))
    })
    res.data.articles.jquery.forEach(item => {
      
      document.querySelector(selector).append(Card(item))
    })
    res.data.articles.node.forEach(item => {
      
      document.querySelector(selector).append(Card(item))
    })
  })
  .catch(err => {
    console.log(err);
  })
}

export { Card, cardAppender }
