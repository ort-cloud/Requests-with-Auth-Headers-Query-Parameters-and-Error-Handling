//https://api.github.com/users/username/repos

function main(){
  $(`#submit`).on("click", function(){
    event.preventDefault();
    let userQuery = $('#text-box').val();
    getUserName(userQuery);
  })
}

function getUserName(username)

$(main);