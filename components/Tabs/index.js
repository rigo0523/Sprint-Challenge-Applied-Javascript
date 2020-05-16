// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


//tabsTopics is used to store all topics
const tabTopics = document.querySelector('.topics');

function newTopics(data) {
    const newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.textContent = data;

    //append to topics class
    tabTopics.append(newTab);

    return newTab;
}

// axios call
axios
     .get("https://lambda-times-backend.herokuapp.com/topics")
     .then(response => {
         response.data.topics.forEach(data => {
             tabTopics.append(newTopics(data))
             console.log(response, 'response is working')
         })
     })
     .catch(error => {
         console.log('error here', error)
     })

