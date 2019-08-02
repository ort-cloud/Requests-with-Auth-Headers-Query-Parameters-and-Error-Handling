//https://api.github.com/users/kristopherw2/repos?type=string&sort=string&direction=string

let userQuery = $('#text-box').val();
const apiKey = "";
const searchUrl = `https://api.github.com/users/${userQuery}/repos`;

function formatQueryParams(userObject){
  const items = Object.keys(userObject).map(key => `${key}=${userObject[key]}`).join("&");
}

const queryString = formatQueryParams(userQuery);
const url = searchUrl + '?' + queryString;
console.log(url);

function main(){
  $(`fieldset`).on("click", "#submit", function(){
    event.preventDefault();
    let userQuery = $('#text-box').val();
    getUserName(userQuery, sort);
  });
}

function getUserName(username, sort="created"){
  const userObject = {
    type: "owner",
    sort,
    direction: "descending",
  };
}

fetch(url)
.then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
})
.then(responseJson => displayResults(responseJson))
.catch(err => {
  $('#js-error-message').text(`Something went wrong: ${err.message}`);
});


$(main);
