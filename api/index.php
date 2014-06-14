<?php

require_once 'CodeivateAPI.php';

if (!array_key_exists('HTTP_ORIGIN', $_SERVER)) {
    $_SERVER['HTTP_ORIGIN'] = $_SERVER['SERVER_NAME'];
}

$API = new CodeivateAPI($_REQUEST['request'], $_SERVER['HTTP_ORIGIN']);
echo json_decode($API->processAPI());