// Init Scrollspy
    $('body').scrollspy({ target: '#navbarSupportedContent-7' });

      
        // Animations init
        new WOW().init();



    // Smooth Scrolling
    $("#navbarSupportedContent-7 a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          window.location.hash = hash;
        });
      }
    }); 
