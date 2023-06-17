<?php
require './modules/index.php';
$app = new App();
$app->addMiddleware(new RoutesMiddleware());

$app->start();

