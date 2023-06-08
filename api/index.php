<?php
require './utils/load_modules.php';

$app = new App();

$app->addMiddleware(RoutesMiddleware::class);

$app->start();

