$(document).ready(function() {
  $("#page-creator").find("input").change(function(){
    // Get information
    if ($('#form-project-color').val() !== '') {
      let color = $('#form-project-color').val();
    } else {
      let color = "#666";
    }
    if ($('#form-project-accent-color').val() !== '') {
      let accentColor = $('#form-project-accent-color').val();
    } else {
      let color = "#555";
    }
    // Use information to update our preview panel
    $('.page-hero').css('background-color', color);
    $('.page-accent').css('color', accentColor);
  }); 
});
