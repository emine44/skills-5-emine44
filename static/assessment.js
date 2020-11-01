'use strict';

//
// PROMPT 1
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out".
//
// If a user clicks on the button again, its text should switch from "Log Out"
// to "Log In".

const button = document.getElementById("login-button");
const val =document.getElementById("login-button").innerHTML;

function myFunction(evt){ 
  
    button.innerHTML='Log Out';
    button.addEventListener( 'click',() => {
            button.innerHTML='Log In';
            button.onclick=myFunction;
        }
      );
}

button.addEventListener('click',myFunction);







//
// PROMPT 2
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

// REPLACE THIS WITH YOUR CODE


const button2 = document.getElementById("sub");

button2.addEventListener("click",()=>{
    const val2 = document.getElementById("alert-text").value;
    console.log(val2)
    alert(val2);

});



//
// PROMPT 3
//
// This is a pretty silly feature -- when a user double-clicks on the
// button (the one that says "Double-click to add item"), a new list
// item should appear.
//
// In other words, whenever a user double-clicks on the button, just
// add another <li>Item</li>. So, a user has double-clicked on the
// button once, the list should look like this:
//
//   <ul id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ul>

const addList =document.getElementById("list-adder");
const all = document.getElementById("list");
addList.addEventListener("dblclick",()=>{
    const item= document.createElement("li");
    item.appendChild(document.createTextNode("This was added after double-clicking"));
    all.appendChild(item);

 });


//
// PROMPT 4
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

const redBtn=document.getElementById("red-changer");
const blueBtn=document.getElementById("blue-change");


redBtn.addEventListener('click',()=>{
    document.getElementById("color-change").style.color='red';
});

blueBtn.addEventListener('click',()=>{
    document.getElementById("color-change").style.color='blue';
});

//
// PROMPT 5
//
// Display names of 20 berries from Pokemon (a video game franchise). To
// do this, you'll make a GET request to the Pokemon RESTful API to
// retrieve data on Pokemon berries, parse the results, then add
// the names of berries to the paragraph. The paragraph should look
// something like:
//
//   <p id="berries">
//     cheri, chesto, pecha, rawst, aspear, leppa, oran, persim,
//     lum, sitrus, figy, wiki, mago, aguav, iapapa, razz, bluk,
//     nanab, wepear, pinap
//   </p>
//
// The Pokemon RESTful API supplies data about various items, creatures,
// and other components of Pokemon video games. It's meant to be used as an
// educational resource to help developers practice working with REST APIs.
// You don't need to sign up for a developer key to use it and it's
// completely free!
//
// We recommend that you visit their website at https://pokeapi.co/ and
// check out the example on the homepage. This will give you an idea of
// how the API works, but you'll likely need more detailed information.
// For that, head over to their API documentation at https://pokeapi.co/docs/v2.
//
// The sections that will help you out the most for this prompt are:
// "Resources Lists/Pagination" (the first section you land on when you go
// to their API docs) and "Berries" (this is the section about berries).

// REPLACE THIS WITH YOUR CODE


    const endpoint : 'https://pokeapi.co/api/v2/berry';
    
  $.get(endpoint, (response)=>{
        $("#berries").text(response);
       
  });
   


