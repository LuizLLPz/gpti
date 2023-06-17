<?php
require "./models/UsuarioModel.php";
class UsuarioService {
    static function login(string $name): ?UsuarioModel {
        return UsuarioModel::getWithName($name);
    }
}