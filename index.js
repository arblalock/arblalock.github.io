$(document).ready(function() {
  $("[data-toggle=popover]").popover({
    html: true
  });
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'})

  $("#link-row").click(function() {
    if ($(this).hasClass('expanded')) {
      $("#up-arrow").hide();
      $("#down-arrow").show();
      $("#cont-soc-cont").slideUp(function() {
        $("#link-row").removeClass('expanded');
      });
    } else {
      $("#down-arrow").hide();
      $("#up-arrow").show();

      $("#cont-soc-cont").slideDown(function() {
        $("#link-row").addClass('expanded');
      });
    }
  });

  $(document).on('click', '#email-copy', function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val("adamrblalock@gmail.com").select();
    document.execCommand("copy");
    $temp.remove();
    $(this).attr("title", "Email Copied!")
    $(this).tooltip('show')

  })

  $(document).on('click', '#email_to_link', function() {
    var email = 'adamrblalock@gmail.com';
    window.location = 'mailto:' + email;
  })


});
;
