<?php
require "./services/UsuarioService.php";

class UsuarioController {
    static function login($http): Http {
        if ($_SERVER['REQUEST_METHOD'] != 'POST') return $http->methodNotAllowed();
        $usuario = $http->body['NOMEUSUARIO'] ?? null;
        $senha = $http->body['SENHA'] ?? null;
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
        if ($_SERVER['REQUEST_METHOD'] != 'POST') return $http->methodNotAllowed();
        return UsuarioService::cadastrar($http);
    }
}