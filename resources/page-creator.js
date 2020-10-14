$(document).ready(function() {
  $("#page-creator").find("input").change(function(){
    // Get information
    if ($('#form-project-color').html() !== '') {
      let color = $('#form-project-color').html();
    } else {
      let color = "#666";
    }
    if ($('#form-project-accent-color').html() !== '') {
      let accentColor = $('#form-project-accent-color').html();
    } else {
      let accentColor = "#555";
    }
    // Use information to update our preview panel
    $('.page-hero').css('background-color', color);
    $('.page-accent').css('color', accentColor);
  }); 
});
