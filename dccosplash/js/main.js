(function ($) {
  $(document).ready(function(){

    if (Modernizr.svg) {
      $(".cloud-lg").attr("src", "/dccosplash/images/cloud-lg.png");
      $(".cloud-sm").attr("src", "/dccosplash/images/cloud-sm.png");
      $(".mountain").attr("src", "/dccosplash/images/mountain.png");
    }

  }); // END document.ready


})(jQuery); //$