// input text -----------------------

document.addEventListener("DOMContentLoaded", function() {
 
function formSubmit(event) {
  let firstName = document.getElementById("inputFirst").value;
  displayInfo(firstName)
}

function displayInfo (inputFirst) {
    document.getElementById("outputFirst").innerHTML=inputFirst;
  } 
  
  document.getElementById("inputFirst").addEventListener("input", formSubmit)
}) 

// Change Image, font, color -----------------------

function showPicture1() {
  const images = document.getElementsByTagName("img");
  Array.from(images).forEach(img=>img.style.display="none");
  const img = document.getElementById('Image1')
  img.style.display = "block";
  const text = document.getElementById('outputFirst')
  text.style.fontFamily = "great vibes";
  text.style.fontSize = "50px";
  text.style.color = "black";
  text.style.top = ("90px")
} 

function showPicture2() {
  const images = document.getElementsByTagName("img");
  Array.from(images).forEach(img=>img.style.display="none");
  const img = document.getElementById('Image2')
  img.style.display = "block";
  const text = document.getElementById('outputFirst')
  text.style.fontFamily = "arial";
  text.style.fontSize = "30px";
  text.style.color = "black";
  text.style.top = ("90px")
} 

function showPicture3() {
  const img = document.getElementById('Image3')
  img.style.display = "block";
  const text = document.getElementById('outputFirst')
  text.style.fontFamily = "Verdana";
  text.style.fontSize = "50px";
  text.style.color = "white";
  text.style.top = ("200px")
} 






// Change Text -----------------------

// function showPicture1(){
//   const text = document.getElementById('outputFirst')
//   text.style.fontFamily = "verdana";
// }

// function showPicture2(){
//   const text = document.getElementById('outputFirst')
//   text.style.fontFamily = "arial";
// }


// function changeImage(img) {
//     document.getElementById("img").src = img.src.replace("_t", "_b");
// }


// function showPicture3() {
//   // var sourceOfPicture = "http://img.tesco.com/Groceries/pi/118/5000175411118/IDShot_90x90.jpg";
//   var img = document.getElementById('Image3')
//   // img.src = sourceOfPicture.replace('90x90', '225x225');
//   img.style.display = "block";
// } 


// function fetchInfo () {
  
// }

  // document.getElementById("title").innerHTML=movies["Titanic"].title

//   document.getElementById("outputFirst").innerHTML=document.getElementbyId("inputFirst");
//   // document.getElementById("outSecond").innerHTML=json.main.temp_min;
//   // document.getElementById("outputSurname").innerHTML=json.main.temp_max;
//   // document.getElementById("outputDate").innerHTML=json.main.humidity;
//   // document.getElementById("outputLocation").innerHTML=json.clouds.all;



// function displayInfo () {
  
// }


// document.addEventListener("DOMContentLoaded", (e) => {

// document.getElementById("Natural")
//         .addEventListener("click", function() {
//   document.getElementById("Image1").hidden = true;
//   document.getElementById("Image2").hidden = false;
//   document.getElementById("Image3").hidden = true;
// }, false);



// let changeFont(element, name) {
//     element.style.fontFamily = name;
// }


// document.addEventListener('DOMContentLoaded',function() {
//     document.querySelector('select[name="ice-cream"]').onchange=changeEventHandler;
// },false);

// function changeEventHandler(event) {
//     // You can use “this” to refer to the selected element.
//     if(!event.target.value) alert('Please Select One');
//     else alert('You like ' + event.target.value + ' ice cream.'); 
// }


// document.getElementById("Natural").addEventListener("click", function (e){
//   document.getElementById("outputFirst").innerHTML=movies["inputFirst"]
//   document.getElementById("inputFirst").innerHTML[]
// }


// $('form input').keyup(function(){
// var $this = $(this);
//   $('.'+$this.attr('id')+'').html($this.val());
//   console.log("fdsfds");
// });