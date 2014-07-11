<footer class="sticky">
    <nav class="footer-nav">
        <ul>
            <li><a class="js-show-box" href="#show-info"><i class="nav-sprite sprite-info"></i></a></li>
        </ul>
    </nav>
</footer>

<div id="show-info" class="hidden-box">
    <h3>What is this?</h3>
    <p>This page tells you in real time if I'm coding, and what language I'm coding in.</p>
    <p>
        Using the <a href="http://www.codeivate.com/">Codeivate</a> API, I feed
        my programming statistics into the illustration. Hovering over the chart
        segments will show you what languages they represent. They are proportionate
        to how long I have spent on each language (relative to each other).
    </p>
    <p>The pulsing segment shows you which language I'm using, <em>right now!</em></p>
</div>

<!-- Main javascript calls -->
<script src="/js/jquery.min.js"></script> <!-- Replace with a CDN when going live -->
<!-- Useful plugins that are often used -->
<script src="/js/thirdparty.combined.min.js"></script>
<!-- Third Party -->
<script src="/js/thirdparty/jquery.drawDoughnutChart.js"></script>
<!-- Include all of your main custom functions in this file -->
<script src="/js/main.min.js"></script>