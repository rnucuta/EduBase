var first = true;
function setup(){
  if(first == true){
    window.open("first.html");
    first = false;
    return true;
  }
  else{
    window.open("feed.html");
    return False;
  }
}
var think = [];
var stringy;
function display(event){
  think.push(event.target.value);
  console.log(think);
  stringy = JSON.stringify(think);
  localStorage.setItem('addition', stringy);
}

var disarray = localStorage.getItem('addition');
disarray = JSON.parse(disarray);
function displayer(){
  Document.open(disarray[0]);
}

var language;
var country;
var teachstu;
function handleLanguage(event){
  language = event.target.value;
  if(language=="fr"){
    window.open("firstfp.html");
  }
  else if(language=="sp"){
    window.open("firstsp.html");
  }
  else{
    window.open("first.html");
  }
  console.log(language);
}

function whocountry(event){
  country = event.target.value;
  console.log(counrty);
}
function who(event){
  teachstu = event.target.value;
  console.log(teachstu);
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

}


function droptop() {
    document.getElementById("myDropdown").classList.toggle("show");
}


function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
