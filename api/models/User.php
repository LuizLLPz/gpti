<?php

class User {
    private int $ID;
    private string $NOMEUSUARIO;
    private string $NOME;
    private string $SOBRENOME;
    private string $SENHA;

    static function getWithName($name):?User {
        global $connection;
        $sql = "SELECT * FROM USUARIO WHERE NOMEUSUARIO = :NOMEUSUARIO";
        $query = $connection->prepare($sql);
        $query->bindParam(":NOMEUSUARIO", $name);
        $query->execute();
        $users = $query->fetchAll(PDO::FETCH_CLASS, 'User');
        if (sizeof($users) == 0) {
            return null;
        }
        else return $users[0];
    }
}