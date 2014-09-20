(function ($) {
    $(document).ready(
        function () {
            $('#contact-form').validate({
                errorElement: 'em',
                submitHandler: function(form) {
                    $(form).ajaxSubmit();
                }
            });
        }
    );
})(jQuery);
