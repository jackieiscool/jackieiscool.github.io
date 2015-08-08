// Your Javascript will go here!
$(document).ready(function() {
  /* Add code from the next steps here */
  $("#name").click(function() {
    var name = prompt("Please enter your name");
    if(name != null) {
      $('#name').html(name);
      console.log(name);
    }
  });
});
