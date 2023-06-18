<?php
class ProjetoModel {
    public int $ID;
    public int $IDEMPRESA;
    public string $NOME;
    public string $DESCRICAO;

    static function obterProjetosEmpresa(int $idempresa): array{
        global $connection;
        $sql = "SELECT * FROM PROJETO WHERE IDEMPRESA = :IDEMPRESA ORDER BY ID DESC";
        $query = $connection->prepare($sql);
        $query->bindParam(":IDEMPRESA", $idempresa);
        $query->execute();
        return $query->fetchAll(PDO::FETCH_CLASS, 'ProjetoModel');
    }

    static function obterProjetoID(int $idProjeto): ?ProjetoModel {
        global $connection;
        $sql = "SELECT * FROM PROJETO WHERE ID = :ID";
        $query = $connection->prepare($sql);
        $query->bindParam(":ID", $idProjeto);
        $query->execute();
        return $query->fetchObject(PDO::FETCH_CLASS, 'ProjetoModel');
    }

    static function apagarProjeto(int $idprojeto): Http {
        global $connection;
        $http = new Http();
        try {
            $sql = "DELETE FROM PROJETO WHERE ID = :ID";
            $query = $connection->prepare($sql);
            $query->bindParam(":ID", $idprojeto);
            $query->execute();
            return $http->ok(new Response("Projeto apagado com sucesso"));
        } catch (PDOException $e) {
            return new Http(500, "Erro ao apagar projeto", $e->getMessage());
        }
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
            return new Http(500, new ErrorResponse("Erro ao criar projeto", $e->getMessage()));
        }
    }
}