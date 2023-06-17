<?php
require "./models/UsuarioModel.php";

class UsuarioService {
    static function login(string $name): ?UsuarioModel {
        return UsuarioModel::getWithName($name);
    }

    static function register(Http $http): Http {
        $save = UsuarioModel::save($http->body);
        if ($save === true) {
            $http = new Http();
            return $http->created("Usuário criado com sucesso");
        } else {
            return $save;
        }
    }
}