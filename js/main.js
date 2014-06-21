(function ($) {
    $(document).ready(
        function () {
            $('body').flowtype({
                minFont: 10,
                maxFont: 20
            });

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

                var languages = data.languages;

                $.each(languages, function(index, value) {

                    var langVal = Math.round(value.level * 100);

                    if (langVal > 40) {
                        donut.push({
                            title: index,
                            value: langVal,
                            color: colours[i]
                        });

                        i++;
                    }
                });

                donut.sort(compare);

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
                        summaryNumberClass: 'donut-summary-number'
                    }
                );

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
            };
        }
    );
})(jQuery);

