const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  head </div>
  //head 
 
  let head = document.createElement("div");
  let hdate = document.createElement("span");
  let htitle = document.createElement("h1");
  let htemp = document.createElement("span");
  
  head.classList.add('header');
  hdate.classList.add('date');
  htemp.classList.add('temp');

  head.appendChild(hdate);
  head.appendChild(htitle);
  head.appendChild(htemp);

  hdate.textContent = date;
  htitle.textContent = title;
  htemp.textContent = temp;
  
  return head;

}

// console.log(Header('jay','August 8th', 98))

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  console.log(selector)
  console.log(document.querySelector(selector))
  document.querySelector(selector).append(Header('Jay','August 8th', 98));
  
}

export { Header, headerAppender }
