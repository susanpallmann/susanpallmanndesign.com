$(document).ready(function() {
  $("#page-creator").find("input").change(function(){
    // Get information
    let color = "#666";
    let accentColor = "#555";
    if ($('#form-project-color').html() !== '') {
      color = $('#form-project-color').html();
    }
    if ($('#form-project-accent-color').html() !== '') {
      accentColor = $('#form-project-accent-color').html();
    }
    // Use information to update our preview panel
    $('.page-hero').css('background-color', color);
    $('.page-accent').css('color', accentColor);
  }); 
});
