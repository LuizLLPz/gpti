<?php
class ChecklistService {
    static function criarChecklist(array $model): Http{
        $http = new Http();
        if (!$model['IDPROJETO']) return $http->badRequest("Informações insuficientes", "É necessário informar o id do projeto");
        if (!$model['NOME']) return $http->badRequest("Informações insuficientes", "É necessário informar o nome do checklist");
        if (!$model['DESCRICAO']) return $http->badRequest("Informações insuficientes", "É necessário informar a descrição do checklist");
        $checklist = new ChecklistModel();
        $checklist->IDPROJETO = $model['IDPROJETO'];
        $checklist->NOME = $model['NOME'];
        $checklist->DESCRICAO = $model['DESCRICAO'];
        return ($checklist->salvar());
    }
}