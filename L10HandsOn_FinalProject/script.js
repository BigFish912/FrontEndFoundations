$(document).ready(function () {
  $(".fa-brands").hover(
    function () {
      $(this).css("transform", "scale(1.3)");
    },
    function () {
      $(this).css("transform", "");
    }
  );
});

$(document).ready(function () {
    $(".link").hover(
      function () {
        $(this).css("transform", "scale(1.3)");
      },
      function () {
        $(this).css("transform", "");
      }
    );
  });

function loadRepo() {
    const  xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', showRepositories);
    xhttp.open("GET", "https://api.github.com/users/BigFish912/repos", true);
    xhttp.send();
  }

  function showRepositories() {
    var repos = JSON.parse(this.responseText);
    console.log(repos);
    const repoList = `<ul>${repos
      .map(r => '<li>' + r.name + '</li>')
      .join('')}</ul>`;
    document.getElementById('repo').innerHTML = repoList;
  }