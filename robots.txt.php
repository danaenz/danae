<?php
switch ($_SERVER['HTTP_HOST']) {
    // hide from sites that aren't whitelisted
    default:
        echo <<<EOD
User-agent: *
Disallow: /
EOD;
        break;

    // allow crawling of whitelisted sites
    case 'danae.co.nz' :
    case 'www.danae.co.nz' :
        echo <<<EOD
User-agent: *
Disallow:
EOD;
        break;
}