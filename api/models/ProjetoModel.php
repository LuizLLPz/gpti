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
}