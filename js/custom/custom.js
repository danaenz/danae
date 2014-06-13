(function ($) {
    $(document).ready(
        function () {
            $('body').flowtype({
                minFont: 10,
                maxFont: 20
            });

            var url = "http://codeivate.com/users/Danae.json";

            $.getJSON(url,
                function data(data) {
                    var programming_now_message;
                    console.dir(data);//check your browser console.

                    if(data.programming_now) {
                        programming_now_message = "Is programming right now in ";
                        programming_now_message += data.current_language + ".";
                        if(data.streaking_now) {
                            programming_now_message += " He is in the zone!";
                        }
                    } else {
                        programming_now_message = "Is not programming :(";
                    }
                    $('.programming').html(programming_now_message);

                });

        }
    );
})(jQuery);