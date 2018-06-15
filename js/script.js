// dropdown Menu
var dropdownContent = document.querySelector(".dropdown-content");
var oFirmie = document.querySelector(".dropdown").firstElementChild;
oFirmie.addEventListener('mouseover', function () {
  dropdownContent.style.display = "block";
});

for (var i = 0; i < dropdownContent.children.length; i++) {
  dropdownContent.children[i].addEventListener('mouseover', function () {
    dropdownContent.style.display = "block";
  });
  dropdownContent.children[i].addEventListener('mouseout', function () {
    dropdownContent.style.display = "none";
  });
}

//slider
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

var lis = document.querySelectorAll('.slider li');
var counter = 0;
lis[counter].classList.add('visible');

prev.addEventListener("click",	function() {
  lis[counter].classList.remove('visible');
  counter--;
  if (counter < 0) counter = lis.length-1;
  lis[counter].classList.add('visible');
});

next.addEventListener("click",	function()	{
  lis[counter].classList.remove('visible');
  counter++;
  if (counter >= lis.length) counter = 0;
  lis[counter].classList.add('visible');
});

//zdjęcia z nazwą
var box1 = document.querySelector(".box1");

box1.addEventListener('mouseover', function () {
  var chairsName = this.querySelector(".chairsName");
  chairsName.style.display = "none";
  this.addEventListener('mouseout', function () {
    chairsName.style.display = "block";
  });
});

var box2 = document.querySelector(".box2");

box2.addEventListener('mouseover', function () {
  var chairsName = this.querySelector(".chairsName");
  chairsName.style.display = "none";
  this.addEventListener('mouseout', function () {
    chairsName.style.display = "block";
  });
});

//kalkulator
var dropDownList = document.querySelectorAll(".drop_down_list");
for (var i = 0; i < dropDownList.length; i++) {
  var listArrow = dropDownList[i].querySelector(".list_arrow");
  listArrow.addEventListener("click",	function() {
     var listPanel = this.nextElementSibling;
     listPanel.classList.toggle('visibility');
  });
}

var listElements = document.querySelectorAll('.drop_down_list li');
var sum = document.querySelector('.sum strong');
var totalColor = 0;
var totalPattern = 0;
var totalTitle = 0;

for (var i = 0; i < listElements.length; i++) {
  listElements[i].addEventListener('click', function() {
    var listLabel = this.parentElement.parentElement.querySelector(".list_label");
    listLabel.innerText = this.innerText;
    listLabel.style.color = "#777";
    this.parentElement.classList.toggle('visibility');
    var prevSibling = this.parentElement.parentElement.previousElementSibling;
    var nextSibling = this.parentElement.parentElement.nextElementSibling;
    if (prevSibling === null) {
      document.querySelector('.panel_left .title').innerText = this.innerText;
      document.querySelector('.panel_right .title').innerText = this.dataset.price;
      totalTitle = parseInt(this.dataset.price);
    }
    else if (nextSibling.className === "checkbox check-box") {
      document.querySelector('.panel_left .pattern').innerText = this.innerText;
      document.querySelector('.panel_right .pattern').innerText = this.dataset.price;
      totalPattern = parseInt(this.dataset.price);
    }
    else {
      document.querySelector('.panel_left .color').innerText = this.innerText;
      document.querySelector('.panel_right .color').innerText = this.dataset.price;
      totalColor = parseInt(this.dataset.price);
    }
    sum.innerText = totalColor + totalPattern + totalTitle;
  });
}

document.querySelector("#transport").addEventListener('change', function() {
   if (this.checked) {
      document.querySelector('.panel_left .transport').innerText = 'Transport';
      document.querySelector('.panel_right .transport').innerText = this.dataset.transportPrice;
      totalTransport = parseInt(this.dataset.transportPrice);
   }
   else {
      document.querySelector('.panel_left .transport').innerText =' ';
      document.querySelector('.panel_right .transport').innerText=' ';
      totalTransport = 0;
   }
   sum.innerText = totalColor + totalPattern + totalTitle + totalTransport;
});
