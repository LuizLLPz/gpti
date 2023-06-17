<?php
require "./services/UsuarioService.php";
class UsuarioController {
    static function login($http): Http {
        $params = [];
        parse_str(parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY), $params);
        if (isset($params['user'])) {
            $user = UsuarioService::login($params['user']);
            if($user != null) {
                $http->response = $user;
            } else {
                $http->status_code= 404;
                $http->success = false;
            }

        } else {
            $http->success = false;
            $http->status_code = 400;
        }
        return $http;

    }
}