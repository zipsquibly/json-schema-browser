$(document).ready(function () {

  var anchor = window.location.hash.substring(1);
  // init hide all obj details
  $(".schema").hide();
  $(".field .props").hide();
  // activate from anchor or first
  if (anchor.length>1){
    var obj = $(".objects li a[data-name='"+anchor+"']").parent();
    var obj_name = anchor;
  }else{
    var obj = $(".objects li:first");
    var obj_name = $('a', first).attr('data-name');
  }
  obj.addClass('active');
  $(".schema[data-name='"+ obj_name +"']").show();

  //append events(hide,click) to listings
  $('.objects li a').live('click', function(){
    // deactivate all
    $('.objects li.active').toggleClass('active');
    $(".schema:visible").toggle();
    // activate
    $(this).parent().toggleClass('active');
    // hide connected schema
    $(".schema[data-name='"+ $(this).attr('data-name')+"']").toggle();
  });

  // open a field definition
  $('.field .head').live('click', function(){
    $(this).next('.props').toggle();
  });

  //focus search
  $('#filter').focus();
  // filter
  $('#filter').keyup(function(){
    var val = $(this).val();
    $(".objects li").show()
    $(".objects li a").has("[data-name^='"+ val +"']").parent().show();
    $(".objects li a").not("[data-name^='"+ val +"']").parent().hide();
  });

});