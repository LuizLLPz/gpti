<?php
require "./services/ChecklistService.php";
class ChecklistController {
    static function getChecklistsEmpresa(Http $http): Http {
        if ($_SERVER['REQUEST_METHOD'] != 'GET') return $http->methodNotAllowed();
        $idempresa = $http->params['IDEMPRESA'];
        if (!$idempresa) return $http->badRequest("Informações insuficientes", "É necessário informar o id da empresa");
        return ChecklistService::getChecklistsEmpresa($idempresa);
    }

    static function criarChecklist(Http $http): Http {
        if ($_SERVER['REQUEST_METHOD'] != 'POST') return $http->methodNotAllowed();
        return ChecklistService::criarChecklist($http->body);
    }
}