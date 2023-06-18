<?php
require "./models/UsuarioModel.php";

class UsuarioService {
    static function login(string $name, string $senha): Http {
        $usuario = UsuarioModel::obterPorNome($name);
        $http = new Http();
        if ($usuario != null) {
            if (password_verify($senha, $usuario->SENHA)) {
                return $http->ok($usuario);
            }
        }
        return $http->unauthorized("Usuário ou senha inválidos");
    }

    static function cadastrar(Http $http): Http {
        $save = UsuarioModel::salvar($http->body);
        if ($save === true) {
            $http = new Http();
            return $http->created("Usuário cadastrado com sucesso!");
        } else {
            return $save;
        }
    }
}