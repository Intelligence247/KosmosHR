// Some other JS file to use the functions

import { kosmos_get, kosmos_post } from './kosmosRequest.js';

async function fetchData() {
  try {
    const data = await kosmos_get('https://example.com/api/get_data/');
    // Use the fetched data here
    console.log(data);
  } catch (error) {
    // Handle errors here
  }
}

async function postData() {
  try {
    // get all form values
    var username = document.querySelector('#username')
    var file = document.querySelector('#file')
    const formData = new FormData();
    // append all form data
    formData.append('username', username)
    // for file data
    formData.append('file', file.files[0])
    //make the request
    const response = await kosmos_post('https://example.com/api/post_data/', formData);
    // Handle the response from the POST request
    console.log(response);
  } catch (error) {
    // Handle errors here
  }
}

fetchData();
postData();

/*
in the API documentation:
- for GET request, only the url will be provided and the response data for different responses (success, error)

- for POST request, the url and the list of form data to be submitted will be provided and the response data as well
e.g
url = "https://....";
const formData = new FormData();
formData.append('title', value)
formData.append('description', title)

- kindly make sure to follow the guide the API documentation to ensure seamless API request and ask questions for any part you sont understand

- there wont be need for lengthy code as the module will be doing the repetitive requests
*/
