// <!-- Slick Slider JS -->
// <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

// <!-- Card Slider Config -->
// <script>
    $(document).ready(function() {

        // //-------- Filter functionality ----------

        // // Add class name of category slug to each slider item
        // $('.card-slider_item').addClass(function() {
        //     return $(this).find('.card-category_slug').text() //class of element hidden in slider collection with category slug
        // });

        // // When you click a dropdown link, filter the slider
        // $(".dropdown-link").click(function() {

        //     if ($(this).hasClass("cc-selected")) { //if the dropdown link is already selected, unselect and unfilter the slider
        //         $("#cms-slider").slick('slickUnfilter');
        //         $(this).removeClass("cc-selected");
        //     } else { //if the dropdown link isn't selected, add selected class and filter the slider
        //         $(".dropdown-link").removeClass("cc-selected");
        //         $(this).addClass("cc-selected");

        //         var filter = $(this).find('.dropdown-link_slug').text(); //class of element hidden in dropdown link with category slug
        //         var filterClass = '.' + filter; //add '.' before slug name to associate it as a class

        //         $("#cms-slider").slick('slickUnfilter'); //clear previous filter on slider
        //         $("#cms-slider").slick('slickFilter', filterClass); //filter the slider by the selected dropdown link's slug
        //     }

        // });


        //-------- Configure slider ----------

        $('#cms-slider').slick({
            arrows: false,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 8000,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });


        //--------- Set custom nav ---------

        $('#cms-slider-right').click(function() {
            $('#cms-slider').slick('slickNext');
        });
        $('#cms-slider-left').click(function() {
            $('#cms-slider').slick('slickPrev');
        });

    });

{/* </script> */}
