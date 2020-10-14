$(document).ready(function() {
  $("#page-creator").find("input").change(function(){
    // Get information
    let color = $('#form-project-color');
    let accentColor = $('#form-project-accent-color');
    // Use information to update our preview panel
    $('.page-hero').css('background-color', color);
    $('.page-accent').css('color', accentColor);
  }); 
});
