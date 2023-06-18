<?php
require "./services/ChecklistService.php";
class ChecklistController {
    static function getChecklistsEmpresa(Http $http): Http {
        if ($_SERVER['REQUEST_METHOD'] != 'GET') return $http->methodNotAllowed();
        return ChecklistService::getChecklistsEmpresa($http->query);
    }

    static function criarChecklist(Http $http): Http {
        if ($_SERVER['REQUEST_METHOD'] != 'POST') return $http->methodNotAllowed();
        return ChecklistService::criarChecklist($http->body);
    }
}