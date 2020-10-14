$(document).ready(function() {
  $("#page-creator").find("input").change(function(){
    // Get information
    let color = "#666";
    let accentColor = "#555";
    if ($('#form-project-color').val() !== '') {
      color = $('#form-project-color').val();
    }
    if ($('#form-project-accent-color').val() !== '') {
      accentColor = $('#form-project-accent-color').val();
    }
    // Use information to update our preview panel
    $('.page-hero').css('background-color', color);
    $('.page-accent').css('color', accentColor);
  }); 
});
