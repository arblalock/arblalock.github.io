$(document).ready(function() {
  $("[data-toggle=popover]").popover({html: true});
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

  $(document).on('click', '#email-copy', function(e) {
    e.preventDefault();
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
    location.href = 'mailto:' + email;
  })

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

    return "unknown";
  }

  //do mobile checks, change overlay
  if(getMobileOperatingSystem() != "unknown"){
    hideOverlays();
    $('#email-btn').hide(); 
    $('.btn-img').on('click', function() {
      $(this).find('.link-hover-cont').css('display', 'flex');
      $(this).find('img').css({'opacity': '0.2'});
    })
    $('.site-cont').on('click', function(e) {
      let container = $(".btn-img");
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        hideOverlays();
      }
    })
}

  function hideOverlays() {
    $('.link-hover-cont').css({'display': 'none', 'opacity': '1'});
    $('.btn-img img').css({'opacity': '1'});
    $('.img-wrap').css('background-color', 'black');
    overlayOpen = false;
  }

}); // end on doc ready
