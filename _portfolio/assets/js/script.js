$(document).ready(function(){
  var tabAnchor = $('.tabs-nav li a'),
      tabPanel = $('.tabs-panel');

  tabAnchor.click (function(e){
    e.preventDefault();

    tabAnchor.removeClass('active');
    $(this).addClass('active');

    tabPanel.hide();
    var $taget = $(this).attr('href');
    $($taget).show();
  });
});