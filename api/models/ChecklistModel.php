<?php
class ChecklistModel {
    public int $id;
    public int $idProjeto;
    public int $idEmpresa;
    public string $nome;
    public string $descricao;

    static function getChecklistsEmpresa(int $idempresa): Http {
        global $connection;
        try {
            $sql = "SELECT * FROM CHECKLIST WHERE IDEMPRESA = :IDEMPRESA";
            $query = $connection->prepare($sql);
            $query->bindParam(':IDEMPRESA', $idempresa);
            $query->execute();
            $checklists = $query->fetchAll(PDO::FETCH_CLASS, 'ChecklistModel');
            return new Http(200, new Response(data: $checklists));
        } catch (PDOException $e){
            return new Http(500, new Response("Erro ao buscar checklists", $e->getMessage()));
        }
    }

    function salvar(): Http {
        global $connection;
        try {
            $sql = "INSERT INTO CHECKLIST (IDEMPRESA, IDPROJETO, NOME, DESCRICAO) VALUES (:IDEMPRESA, :IDPROJETO,
                                                                      :NOME, :DESCRICAO)";
            $query = $connection->prepare($sql);
            $query->bindParam(':IDEMPRESA', $this->idEmpresa);
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

class ChecklistItem {
    public int $id;
    public int $idChecklist;

}