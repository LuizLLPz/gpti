<?php

class ChecklistController {
    function criarChecklist(Http $http): Http {
        if ($_SERVER['REQUEST_METHOD'] != 'POST') return $http->methodNotAllowed();
        return ChecklistService::criarChecklist($http->body);
    }

}