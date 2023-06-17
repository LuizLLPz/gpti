<?php
require "./models/UsuarioModel.php";

class UsuarioService {
    static function login(string $name): ?UsuarioModel {
        return UsuarioModel::getWithName($name);
    }

    static function register(Http $http): Http {
        $model = $http->body;
        $user = new UsuarioModel($model['NOMEUSUARIO'], $model['NOME'], $model['SOBRENOME'], $model['SENHA']);
        $save = UsuarioModel::save($user);
        if ($save) {
            $http = new Http();
            return $http->created("Usuário criado com sucesso");
        } else {
            return $save;
        }
    }
}