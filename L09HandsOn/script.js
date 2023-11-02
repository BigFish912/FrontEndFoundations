
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let obj1 = JSON.parse(this.responseText);
      document.getElementById("name").innerHTML = obj1.name;
      document.getElementById("birthday").innerHTML = obj1.birthday;
    }
  };
  
function loadBio() {
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let obj = JSON.parse(this.responseText);
      document.getElementById("bio").innerHTML = obj.bio;
    }
  };
  request.open("GET", "einstein.json", true);
  request.send();
}

request.open("GET", "einstein.json", true);
request.send();
