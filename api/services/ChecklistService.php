<?php
require "./models/ChecklistModel.php";
class ChecklistService {
    static function getChecklistsEmpresa(int $idEmpresa) {
        return ChecklistModel::getChecklistsEmpresa($idEmpresa);
    }

    static function criarChecklist(array $model): Http{
        $http = new Http();
        $idProjeto = $model['IDPROJETO'] ?? null;
        $idEmpresa = $model['IDEMPRESA'] ?? null;
        $nome = $model['NOME'] ?? null;
        $descricao = $model['DESCRICAO'] ?? null;
        if (!$idProjeto) return $http->badRequest("Informações insuficientes", "É necessário informar o id do projeto");
        if (!$idEmpresa) return $http->badRequest("Informações insuficientes", "É necessário informar o id da empresa");
        if (!$nome) return $http->badRequest("Informações insuficientes", "É necessário informar o nome do checklist");
        if (!$descricao) return $http->badRequest("Informações insuficientes", "É necessário informar a descrição do checklist");
        $checklist = new ChecklistModel();
        $checklist->idProjeto = $idProjeto;
        $checklist->idEmpresa = $idEmpresa;
        $checklist->nome = $nome;
        $checklist->descricao = $descricao;
        return ($checklist->salvar());
    }
}