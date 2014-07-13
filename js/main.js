(function ($) {
    $(document).ready(
        function () {

            var $char = $('#js-character');

            var url = "http://codeivate.com/users/Danae.json";
            var donut = [];
            var i = 0;
            var colours = [
                '#E08E79',
                '#F1D4AF',
                '#ECE5CE',
                '#C5E0DC',
                '#B38184',
                '#73626E',
                '#F0B49E',
                '#F7E4BE',
                '#D3E2B6'
            ];

            colours = shuffle(colours);

            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'jsonp'
            }).done(function(data) {

//                console.log(data);

                var programmingNow = data.programming_now;
                var streakingNow = data.streaking_now;
                var currentLanguage = data.current_language;

                // Set up the character sprite
                if (programmingNow) {

                    if (streakingNow) {
                        $char.addClass('sprite-character-flow');
                    } else {
                        $char.addClass('sprite-character-programming');
                    }

                    if (currentLanguage) {
                        $char.find('.char-tooltip').html('Programming now in ' + currentLanguage);
                    }
                } else {
                    $char.addClass('sprite-character-normal');
                }

                // Run through the languages and create array
                var languages = data.languages;

                $.each(languages, function(index, value) {

                    var langVal = Math.round(value.level * 100);

                    if (langVal > 40) {
                        donut.push({
                            title: index,
                            value: langVal,
                            color: colours[i],
                            active: currentLanguage == index
                        });

                        i++;
                    }
                });

                donut.sort(compare);

                // Draw the chart
                $("#doughnutChart").drawDoughnutChart(
                    donut,
                    {
                        segmentShowStroke: false,
                        segmentStrokeColor: '#F0B49E',
                        segmentStrokeWidth: 0,
                        baseColor: 'rgba(255, 255, 255, 0.8)',
                        baseOffset: 0,
                        edgeOffset: 0,
                        tipClass: 'donut-tooltip',
                        summaryClass: 'donut-summary',
                        summaryTitleClass: 'donut-summary-title',
                        summaryNumberClass: 'donut-summary-number',
                        showTipNumber: false
                    }
                );

                $char.fadeIn();
            });

            $('.js-show-box').on('click', function(e){

                var $link = $(this);

                // Get the targeted box
                var dest = $(this).attr('href');

                // hide the other boxes if any
                $('.hidden-box').not($(dest)).fadeOut(100);

                $(dest).stop(true, true).fadeToggle(200, function(){
                    // Change the icon to a cross if the dest is visible
//                    if ($(dest).is(':visible')) {
//                        $link.find('.nav-sprite').addClass('sprite-exit');
//                    } else {
//                        $link.find('.nav-sprite').removeClass('sprite-exit');
//                    }
                });


            });

            function compare(a,b) {
                if (a.value < b.value)
                    return -1;
                if (a.value > b.value)
                    return 1;
                return 0;
            }

            function shuffle(o){
                for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                return o;
            }

        }
    );
})(jQuery);

;(function ($) {
    $(document).ready(
        function () {
            $('#contact-form').validate({
                errorElement: 'em'
            });
        }
    );
})(jQuery);
