//####################################################
//################ COLOR PICKER######################
//####################################################
//https://codepen.io/rakujira/pen/WZOeNq
// Create a new color picker instance
// https://iro.js.org/guide.html#getting-started

var Leaf_HSL = 0;
var leaf_RGB = 0;
var colorPicker = new iro.ColorPicker(".colorPicker", {
    // color picker options
    // Option guide: https://iro.js.org/guide.html#color-picker-options
    width: 280,
    color: "rgb(196, 164, 22)",
    borderWidth: 1,
    borderColor: "#fff",
  });
  
  var values = document.getElementById("values");
  var hexInput = document.getElementById("hexInput");
  //var hsl = document.getElementById("hsl");
  // https://iro.js.org/guide.html#color-picker-events
  colorPicker.on(["color:init", "color:change"], function(color){
    // Show the current color in different formats
    // Using the selected color: https://iro.js.org/guide.html#selected-color-api
    values.innerHTML = [
      "hex: " + color.hexString,
      "rgb: " + color.rgbString,
      "hsl: " + color.hslString,
    ].join("<br>");
    
    // hexInput.value = color.hexString;
    Leaf_HSL= color.hsl;
    leaf_RGB = color.rgb;
    document.getElementById("Refresh").click();
    
  });
  
  // hexInput.addEventListener('change', function() {
  //   colorPicker.color.hexString = this.value;
  // });