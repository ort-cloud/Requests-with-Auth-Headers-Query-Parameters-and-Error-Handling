//

const apiKey = "";
const searchUrl = "https://api.github.com/users/username/repos";

function formatQueryParams(userObject){
  const items = Object.keys(userObject).map(key => `${key}=${userObject[key]}`).join("&");
}

function main(){
  $(`#submit`).on("click", function(){
    event.preventDefault();
    let userQuery = $('#text-box').val();
    getUserName(userQuery);
  })
}

function getUserName(username, sort="created"){
  const userObject = {
    type: "owner",
    sort,
    direction: "descending",
  };
}

$(main);