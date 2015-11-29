jQuery(function($) {
  $(document).ready(function(){

    var active = '';
    function slider(div){
    	if ($(div).is(':hidden') && (active === '')){
    		$(div).slideDown(600);
    		active = div;
        $(div).slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
          lazyLoad: 'ondemand',
          autoplay: true,
          autoplaySpeed: 8000,
        });
    	}
    	else if ($(div).is(':hidden') && (div != active)){
    		$(active).hide();
    		$(div).fadeIn(600);
    		active = div;
        $(div).slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
          lazyLoad: 'ondemand',
          autoplay: true,
          autoplaySpeed: 8000,
        });
    	}
    	else {
    		$(div).slideUp(600);
    		active = '';
    	}
    }


    $("#1-picker").click(function(){
      slider("#1");
    });
    $("#2-picker").click(function(){
      slider("#2");
    });
    $("#3-picker").click(function(){
      slider("#3");
    });
    $("#4-picker").click(function(){
      slider("#4");
    });
    $("#5-picker").click(function(){
      slider("#5");
    });
    $("#6-picker").click(function(){
      slider("#6");
    });
    $("#7-picker").click(function(){
      slider("#7");
    });
    $("#8-picker").click(function(){
      slider("#8");
    });
    $("#9-picker").click(function(){
      slider("#9");
    });
    $("#10-picker").click(function(){
      slider("#10");
    });
    $("#11-picker").click(function(){
      slider("#11");
    });
    $("#12-picker").click(function(){
      slider("#12");
    });
    $("#13-picker").click(function(){
      slider("#13");
    });
    $("#14-picker").click(function(){
      slider("#14");
    });
    $("#15-picker").click(function(){
      slider("#15");
    });
    $("#16-picker").click(function(){
      slider("#16");
    });
    $("#17-picker").click(function(){
      slider("#17");
    });
    $("#18-picker").click(function(){
      slider("#18");
    });

  });
});
