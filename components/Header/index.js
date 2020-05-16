// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function header() {
    // create new elements 
    const headerDiv = document.createElement('div');

    const spanDate = document.createElement('span');
    const heading = document.createElement('h1');
    const spanTemp = document.createElement('span')

    //add classes to new elements
    headerDiv.classList.add("header")
    spanDate.classList.add('date');
    spanTemp.classList.add('temp');

    //add textContent
    spanDate.textContent = "MARCH 28, 2019";
    heading.textContent = "Lambda Times";
    spanTemp.textContent = "98°"

    //Append elements to headerDiv
    headerDiv.append(spanDate, heading, spanTemp);

    return headerDiv;
  }
  
  // DIV HEADER CONTAINER TO STORE THE HEADER COMPONENT
  const headerContainer = document.querySelector(".header-container");
  headerContainer.append(header());
  
  