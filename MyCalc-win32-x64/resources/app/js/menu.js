
// input取得
var menu1 = document.querySelector('#menu1');
var menu2 = document.querySelector('#menu2');
var page1 = document.querySelector('#page1');
var page2 = document.querySelector('#page2');

document.querySelector('#menu1').addEventListener('click', function() {

  menu1.className = "current";
  page1.className = "";
  menu2.className = "";
  page2.className = "disappear";
});

document.querySelector('#menu2').addEventListener('click', function() {

  menu2.className = "current";
  page2.className = "";
  menu1.className = "";
  page1.className = "disappear";
});

var remote = require("electron").remote;
var mainWindow = remote.getCurrentWindow();
document.getElementById("close").addEventListener("click", function(e) {
    e.preventDefault();
    mainWindow.close();
});
