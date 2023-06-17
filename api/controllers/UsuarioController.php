<?php
require "./services/UsuarioService.php";

class UsuarioController {
    static function login($http): Http {
        $params = [];
        parse_str(parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY), $params);
        $usuario = $params['nome'] ?? null;
        $senha = $params['senha'] ?? null;
        if ($usuario && $senha) {
            return UsuarioService::login($usuario, $senha);
        }
        $msg = "É necessário informar";
        if (!$usuario) $msg .= " o nome de usuário";
        if (!$senha && !$usuario) $msg .= " e";
        if (!$senha) $msg .= " a senha";
        return $http->badRequest("Informações insuficientes", $msg);
    }

    static function cadastro($http) {
        if ($_SERVER['REQUEST_METHOD'] != 'POST') $http->methodNotAllowed();
        else {
            $http = UsuarioService::register($http);
        }
        return $http;
    }
}