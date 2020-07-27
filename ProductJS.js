var path1 = "";
var path2 = "";
var path3 = "";

var tax = sessionStorage.getItem('Taxonomy');
path1 = "Textfiles/"+tax+".txt";
console.log(path1);

var size = sessionStorage.getItem('Size');
path2 = "Textfiles/"+size+".txt";
console.log(path2);

var collab = sessionStorage.getItem('Collaboration');
path3 = "Textfiles/"+collab+".txt";
console.log(path3);

fetch(path1)
  .then(response => response.text())
  .then(text => document.getElementById('sec1').innerHTML = text);

  fetch(path2)
  .then(response => response.text())
  .then(text => document.getElementById('sec2').innerHTML = text);

  fetch(path3)
  .then(response => response.text())
  .then(text => document.getElementById('sec3').innerHTML = text);