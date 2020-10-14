$(document).ready(function() {
  $("#page-creator").find("input").change(function(){
    // Get information
    let color = "#666";
    let accentColor = "#555";
    let title = "Project Title";
    let subtitle = "Project Subtitle";
    let metas = {};
    metas['categories'] = [];
    if ($('#form-project-color').val() !== '') {
      color = $('#form-project-color').val();
    }
    if ($('#form-project-accent-color').val() !== '') {
      accentColor = $('#form-project-accent-color').val();
    }
    if ($('#form-project-name').val() !== '') {
      title = $('#form-project-name').val();
    }
    if ($('#form-project-subtitle').val() !== '') {
      subtitle = $('#form-project-subtitle').val();
    }
    if ($('#form-project-issuu').val() !== '') {
      metas['issuu'] = $('#form-project-issuu').val();
    }
    if ($('#form-project-url').val() !== '') {
      metas['url'] = $('#form-project-url').val();
    }
    if ($('#form-project-github').val() !== '') {
      metas['github'] = $('#form-project-github').val();
    }
    if ($('#form-category-3d:checked').val()) {
      metas['categories'].push($('#form-category-3d:checked').val());
    }
    if ($('#form-category-code:checked').val()) {
      metas['categories'].push($('#form-category-code:checked').val());
    }
    if ($('#form-category-identity:checked').val()) {
      metas['categories'].push($('#form-category-identity:checked').val());
    }
    if ($('#form-category-illustration:checked').val()) {
      metas['categories'].push($('#form-category-illustration:checked').val());
    }
    if ($('#form-category-web-design:checked').val()) {
      metas['categories'].push($('#form-category-web-design:checked').val());
    }
    if ($('#form-category-print:checked').val()) {
      metas['categories'].push($('#form-category-print:checked').val());
    }
    // Use information to update our preview panel
    $('.page-hero').css('background-color', color);
    $('.page-accent').css('color', accentColor).text(title.toLowerCase());
    $('.page-subtitle-tiny').text(subtitle);
    $('.page-title-tiny').text(title);
    $('.page-meta-tiny').empty();
    for (const [key, value] of Object.entries(metas)) {
      if (key !== 'categories') {
        $('.page-meta-tiny').append('<p class="meta-header-tiny">' + key + '</p>');
        $('.page-meta-tiny').append('<p class="meta-text-tiny">' + value + '</p>');
      } else {
        if ( metas["categories"].length > 0 ) {
          $('.page-meta-tiny').append('<p class="meta-header-tiny">Work</p>');
          for ( let i = 0; i < metas["categories"].length; i++ ) {
            $('.page-meta-tiny').append('<p class="meta-tag-tiny">' + value[i] + '</p>');
          }
        }
      }
    }
  }); 
});
