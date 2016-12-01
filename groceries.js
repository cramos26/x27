window.onload = loadCookieList;

var myList = [];
var Listinstring = "";
var input = "";

function addItem(){
  var input = document.getElementById("newItem").value;
  document.getElementById("newItem").innerHTML = "";
  displayItem(input);
}

function displayItem (input) {
  var list = document.getElementById("listDisplay");
      if (myList.indexOf(input) < 0)
{
        myList.push(input);
        console.log(myList);

      var item = document.createElement("li");
      var itemName = document.createTextNode(input);
      var btnClose = document.createElement("button")

      btnClose.classList.add("btn");
      btnClose.classList.add("btn-danger");
      btnClose.classList.add("btn-xs");
      var iconClose = document.createElement("span");
      iconClose.classList.add("glyphicon");
      iconClose.classList.add("glyphicon-remove");
      btnClose.addEventListener("click",removeParentListItem);
      btnClose.appendChild(iconClose);

      item.appendChild(itemName);
      item.appendChild(btnClose);
      list.appendChild(item);
    }
}
  function loadCookieList () {
  var obtaincookies = getCookie("cookieforsavelist");
  var arrayCookie = obtaincookies.split(",");
  for ( i = 0; i < arrayCookie.length; i++ )
  { displayItem (arrayCookie[i]) }
  }

function removeParentListItem() {
  var mom = this.parentNode;
  var grandma = mom.parentNode;
  grandma.removeChild(mom);
  var itemRemove = mom.firstChild.textContent;
  console.log("Removing " + itemRemove);
  var itemIndex = myList.indexOf(itemRemove);
  console.log("from location " + itemIndex);
  myList.splice(itemIndex,1);
  console.log(myList);
}

function saveList(){
Listinstring = myList.toString();
setCookie("cookieforsavelist", Listinstring , -1);
}

function clearList() {
document.getElementById("listDisplay").innerHTML = "";
myList = [];
}


//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
