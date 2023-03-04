        $(document).ready(function () {
            $("#bxslider").bxSlider({
                auto: true,
                speed: 700,
                pause: 5000,
                responsive: true,
                mode: 'fade',
                mode: 'horizontal',
                controls: false,
                onSliderAfter: function () {
                    slide.stopAuto();
                    slide.startAuto();
                }

            });


            $(".bx-wrapper .bx-prev").click(function () {
                slider.goToPrevSlideSlide
                return false;

            });

            $(".bx-wrapper .bx-next").click(function () {
                slider.goToNextSlide
                return false;
            });

        });