import './style.css'

// Event Listener One: Clicking 
document.getElementById("transforming_button").addEventListener("click", function(){
  // Changing the background color of the box (Changing CSS)
  document.getElementById("colored_box").style.backgroundColor="lightgreen";

  // Change text message (Not CSS)
  document.getElementById("text").textContent = "The button was clicked!";
});

// Extra event which will change the box to its original color when clicked
document.getElementById("original_color").addEventListener("click", function(){
  // Changing the background color of the box (Changing CSS)
  document.getElementById("colored_box").style.backgroundColor="aqua";

  // Change text message (Not CSS)
  document.getElementById("text").textContent = "Here is the original box color!";
});

// Event Listener Two: Hovering over box 
document.getElementById("colored_box").addEventListener("mouseover",function(){
  // Changing the background color of the box (Changing CSS)
  document.getElementById("colored_box").style.backgroundColor="purple";

  // Change text message (Not CSS)
  document.getElementById("text").textContent = "You hovered over the box!";
});