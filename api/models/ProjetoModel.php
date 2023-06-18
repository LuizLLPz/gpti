<?php
class ProjetoModel {
    public int $ID;
    public int $IDEMPRESA;
    public string $NOME;
    public string $DESCRICAO;

    static function obterProjetosEmpresa(int $idempresa): array{
        global $connection;
        $sql = "SELECT * FROM PROJETO WHERE IDEMPRESA = :IDEMPRESA";
        $query = $connection->prepare($sql);
        $query->bindParam(":IDEMPRESA", $idempresa);
        $query->execute();
        return $query->fetchAll(PDO::FETCH_CLASS, 'ProjetoModel');
    }
    function criarProjeto(): Http {
        global $connection;
        try {
            $sql = "INSERT INTO PROJETO (IDEMPRESA, NOME, DESCRICAO) VALUES (:IDEMPRESA, :NOME, :DESCRICAO)";
            $query = $connection->prepare($sql);
            $query->bindParam(":IDEMPRESA", $this->IDEMPRESA);
            $query->bindParam(":NOME", $this->NOME);
            $query->bindParam(":DESCRICAO", $this->DESCRICAO);
            $query->execute();
            $this->ID = $connection->lastInsertId();
            $http = new Http();
            return $http->created(new Response("Projeto criado com sucesso"));
        }
        catch (PDOException $e) {
            return new Http(500, "Erro ao criar projeto", $e->getMessage());
        }
    }
}