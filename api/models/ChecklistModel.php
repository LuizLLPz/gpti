<?php
class ChecklistModel {
    public int $id;
    public int $idProjeto;
    public string $nome;
    public string $descricao;

    function salvar(): Http {
        global $connection;
        try {
            $sql = "INSERT INTO checklist (IDPROJETO, NOME, DESCRICAO) VALUES (:IDPROJETO, :NOME, :DESCRICAO)";
            $query = $connection->prepare($sql);
            $query->bindParam(':IDPROJETO', $this->idProjeto);
            $query->bindParam(':NOME', $this->nome);
            $query->bindParam(':DESCRICAO', $this->descricao);
            $query->execute();
            $this->id = $connection->lastInsertId();
            return new Http(201, new Response("Checklist criado com sucesso!", $this));
        } catch (PDOException $e){
            return new Http(500, new Response("Erro ao criar checklist", $e->getMessage()));
        }
    }
}