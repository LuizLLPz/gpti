<?php

class UsuarioModel {
    public ?int $ID;
    public string $NOMEUSUARIO;
    public string $NOME;
    public string $SOBRENOME;
    public string $SENHA;

    static function getWithName($name): ?UsuarioModel {
        global $connection;
        $sql = "SELECT * FROM USUARIO WHERE NOMEUSUARIO = :NOMEUSUARIO";
        $query = $connection->prepare($sql);
        $query->bindParam(":NOMEUSUARIO", $name);
        $query->execute();
        $user = $query->fetchObject('UsuarioModel');
        if (!$user) return null;
        return $user;
    }

    static function save(?array $model): bool | Http  {
        try {
            global $connection;
            $existe = UsuarioModel::getWithName($model['NOMEUSUARIO'] ?? '') != null;
            if ($existe) {
                $http = new Http();
                return $http->conflict("Usuário já existe");
            }
            $sql = "INSERT INTO USUARIO (NOMEUSUARIO, NOME, SOBRENOME, SENHA) VALUES (:NOMEUSUARIO, :NOME, :SOBRENOME, :SENHA)";
            $query = $connection->prepare($sql);
            $query->bindParam(":NOMEUSUARIO", $model['NOMEUSUARIO']);
            $query->bindParam(":NOME", $model['NOME']);
            $query->bindParam(":SOBRENOME", $model['SOBRENOME']);
            $hash = password_hash($model['SENHA'], PASSWORD_BCRYPT);
            $query->bindParam(":SENHA", $hash);
            $query->execute();
            return true;
        } catch (Exception $e){
            $http = new Http();
            return $http->badRequest("Erro ao salvar usuário", $e->getMessage());
        }

    }
}