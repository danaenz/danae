(function ($) {
    $(document).ready(
        function () {
            $('body').flowtype({
                minFont: 10,
                maxFont: 20
            });

            var url = "api/v1/languages";

            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'json',
                success: function(response){
                    console.log($.parseJSON(response));
                    console.log(response);
                },
                fail: function(response){
                    console.log(response);
                }
            });

        }
    );
})(jQuery);