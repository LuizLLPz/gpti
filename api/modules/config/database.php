<?php

if (file_exists('.env')) {
    $env = parse_ini_file('.env');
}
else die();

$connection = '';
try {
    $connection = new PDO(
        "mysql:host={$env['DB_HOST']};" .
        "dbname={$env['DB_NAME']};",
        $env['DB_USER'],
        $env['DB_PASSWORD'],
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,]
    );
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}

echo "ok";