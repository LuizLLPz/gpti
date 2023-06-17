<?php

class UsuarioModel {
    public ?int $ID;
    public string $NOMEUSUARIO;
    public string $NOME;
    public string $SOBRENOME;
    public string $SENHA;

    public function __construct(string $NOMEUSUARIO, string $NOME, string $SOBRENOME, string $SENHA)
    {
        $this->NOMEUSUARIO = $NOMEUSUARIO;
        $this->NOME = $NOME;
        $this->SOBRENOME = $SOBRENOME;
        $this->SENHA = $SENHA;
    }


    static function getWithName($name): ?UsuarioModel {
        global $connection;
        $sql = "SELECT * FROM USUARIO WHERE NOMEUSUARIO = :NOMEUSUARIO";
        $query = $connection->prepare($sql);
        $query->bindParam(":NOMEUSUARIO", $name);
        $query->execute();
        $users = $query->fetchAll(PDO::FETCH_CLASS, 'UsuarioModel');
        if (sizeof($users) == 0) {
            return null;
        }
        else return $users[0];
    }

    static function save(?UsuarioModel $model): bool | Http  {
        try {
            global $connection;
            $sql = "INSERT INTO USUARIO (NOMEUSUARIO, NOME, SOBRENOME, SENHA) VALUES (:NOMEUSUARIO, :NOME, :SOBRENOME, :SENHA)";
            $query = $connection->prepare($sql);
            $query->bindParam(":NOMEUSUARIO", $model->NOMEUSUARIO);
            $query->bindParam(":NOME", $model->NOME);
            $query->bindParam(":SOBRENOME", $model->SOBRENOME);
            $hash = password_hash($model->SENHA, PASSWORD_ARGON2ID);
            $query->bindParam(":SENHA", $hash);
            $query->execute();
            return true;
        } catch (Exception $e){
            $http = new Http();
            return $http->badRequest("Erro ao salvar usuário", $e->getMessage());
        }

    }
}