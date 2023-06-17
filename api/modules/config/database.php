<?php
try {
    if (file_exists('.env')) {
        $env = parse_ini_file('.env');
    }
    else {
        throw new Exception("Erro: "
        ."não foi encontrado o arquivo de configuração para se conectar ao banco de dados!");
    }

    $connection = new PDO(
        "mysql:host={$env['DB_HOST']};" .
        "dbname={$env['DB_NAME']};",
        $env['DB_USER'],
        $env['DB_PASSWORD'],
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,]
    );

} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
    die();
} catch (Exception $e) {
    http_response_code(500);
    echo $e->getMessage();
}
