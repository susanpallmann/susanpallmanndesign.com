$(document).ready(function() {
  $("#page-creator").find("input").change(function(){
    // Get information
    let color = "#666";
    let accentColor = "#555";
    let title = "Project Title";
    let subtitle = "Project Subtitle";
    if ($('#form-project-color').val() !== '') {
      color = $('#form-project-color').val();
    }
    if ($('#form-project-accent-color').val() !== '') {
      accentColor = $('#form-project-accent-color').val();
    }
    if ($('#form-project-name').val() !== '') {
      title = $('#form-project-name').val();
    }
    if ($('#form-project-accent-subtitle').val() !== '') {
      subtitle = $('#form-project-accent-subtitle').val();
    }
    // Use information to update our preview panel
    $('.page-hero').css('background-color', color);
    $('.page-accent').css('color', accentColor).text(title.toLowerCase());
    $('.page-subtitle-tiny').text(subtitle);
    $('.page-title-tiny').text(title);
  }); 
});
