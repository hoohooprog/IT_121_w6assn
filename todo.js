// https://developer.mozilla.org/en-US/docs/Web/API/Document
// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
// https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
// https://stackoverflow.com/questions/34973493/will-addeventlistener-always-have-ev-currenttarget-and-this-as-the-element-w





/* Create a "close" button and append it to each list item */
// get list item elements 
var myNodelist = document.getElementsByTagName("LI");
var i;
// iterate thru nodelist, which is a HTML collection that is array-like 
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  // put unicode char x (u00D7) in textnode called txt
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

/* Click on a close button to hide the current list item*/
// get the number of Lis by its "close" tag
// assign var close to array-like object that has className of close in Document object
// getElementsByClassName() returns a "live" HTMLCollection/array-like object which
// reflects changes in DOM
var close = document.getElementsByClassName("close");
var i;

// iterates thru all the elements in close list and attaches eventlistener onclick
for (i = 0; i < close.length; i++) {
  
  // when ith close element is clicked (onclick is a single object listener), raise anonymous function
  // which prevents parent element's display (SPAN that contains value n close tab) using elem.style.display
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

/* Add a "checked" symbol when clicking on a list item */
// store a reference to ul element to var called list
var list = document.querySelector('ul');
// eventlistener listens to multiple object targets
// add eventlistener such that when clicked, function accepts target e as argument
// and checks if target is a LI, if so, if doesn't contain classes called check, add checked 
// classes to element target and return True.
// false indicates listener would not be dispatched to any targets beneath the clicked target's DOM tree
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);

/* Create a new list item when clicking on the "Add" button 
  var li has 2 child nodes, 1 that contains value entered by User in textbox (myInput)
  while the other node contains the close button which is a span element with unicode 00D7*/
function newElement() {
	
  // create element of li tagname
  var li = document.createElement("li");
  // get value of element ID "myInput", which is a textbox
  var inputValue = document.getElementById("myInput").value;
  // create node of type text string with inputValue
  var t = document.createTextNode(inputValue);
  // append the text node as a child of element li
  li.appendChild(t);

  // if User did not give input, send alert, if not append list index to list.
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  // reset element myInput's value
  document.getElementById("myInput").value = "";

  // create an inline container, ie SPAN, called close
  // that contains child textnode with unicode 00D7 that is a multiple (x) sign
  // and append span to li
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

// iterate through var close that contains "live" HTMLCollection of span.close objects
// and re-implements listener to old objects while adding listeners to new ones.
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}