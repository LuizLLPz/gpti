<?php
require "./services/UsuarioService.php";
class UsuarioController {
    static function login($http): Http {
        $params = [];
        parse_str(parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY), $params);
        if (isset($params['nome'])) {
            $user = UsuarioService::login($params['nome']);
            if($user != null) {
                $http->response = $user;
            } else {
                return $http->notFound();
            }
        }
        return $http->badRequest();

    }

    static function cadastro($http) {
        if ($_SERVER['REQUEST_METHOD'] != 'POST') $http->methodNotAllowed();
        else {
            $http = UsuarioService::register($http);
        }
        return $http;
    }
}