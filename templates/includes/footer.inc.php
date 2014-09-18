<footer class="sticky">
    <nav class="footer-nav">
        <ul>
            <li>
                <a class="js-show-box" href="#show-info">
                    <i class="nav-sprite sprite-info"></i>
                </a>
            </li>

            <li class="social">
                <a class="social" href="http://danaenz.deviantart.com/" target="_blank" title="deviantART">
                    <i class="sprite-da"></i>
                </a>
            </li>

            <li class="social">
                <a href="http://www.developingdesign.co.nz/" target="_blank" title="Blog">
                    <i class="sprite-blogger"></i>
                </a>
            </li>

            <li class="social">
                <a href="http://www.pinterest.com/danaedesign/" target="_blank" title="Pinterest">
                    <i class="sprite-pinterest"></i>
                </a>
            </li>

            <li class="social">
                <a href="http://nz.linkedin.com/in/danaemillerclendon/" target="_blank" title="LinkedIn">
                    <i class="sprite-linkedin"></i>
                </a>
            </li>

            <li class="social">
                <a class="js-show-box" href="#show-form" title="Contact">
                    <i class="sprite-mail"></i>
                </a>
            </li>
        </ul>
    </nav>
</footer>

<!-- INFORMATION BOX -->
<div id="show-info" class="hidden-box">
    <h3>What is this?</h3>
    <p>This page tells you in real time if <a href="http://nz.linkedin.com/in/danaemillerclendon/" target="_blank">I'm</a> coding, and what language I'm coding in.</p>
    <p>
        Using the <a target="_blank" href="http://www.codeivate.com/">Codeivate</a> API, I feed
        my programming statistics into the illustration. Hovering over the chart
        segments will show you what programming languages they represent. They are proportionate
        to how long I have spent on each language (relative to each other).
    </p>
    <p>The pulsing segment shows you which language I'm using, <em>right now!</em></p>
</div>

<!-- FORM BOX -->
<div id="show-form" class="hidden-box">
    <h3>Contact me</h3>
    <p></p>

    <form id="contact-form" name="contact" action="form.php" method="post">
        <p>
            <label for="contact-name">Name <i>*</i></label>
            <input type="text" name="contact_name" id="contact-name" required>
        </p>

        <p>
            <label for="contact-email">Email <i>*</i></label>
            <input type="email" name="contact_email" id="contact-email" required>
        </p>

        <p>
            <label for="contact-website">Website</label>
            <input type="url" name="contact_website" id="contact-website">
        </p>

        <p>
            <label for="contact-message">Message <i>*</i></label>
            <textarea rows="7" name="contact_message" id="contact-message" required></textarea>
        </p>

        <p>
            <input type="submit" name="submit_form" value="Send">
        </p>
    </form>

</div>

<!-- Main javascript calls -->
<script src="/js/dist/jquery.min.js"></script>
<script src="/js/dist/thirdparty.combined.min.js"></script>
<script src="/js/dist/selectivizr.min.js"></script>
<script src="/js/dist/main.min.js"></script>

<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-52769320-2', 'auto');
    ga('send', 'pageview');

</script>