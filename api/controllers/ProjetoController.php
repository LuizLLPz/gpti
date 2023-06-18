<?php
class ProjetoController {
    static function obterProjetosEmpresa($http): Http {
        if ($_SERVER['REQUEST_METHOD'] != 'GET') return $http->methodNotAllowed();
        $idempresa = $http->body['IDEMPRESA'] ?? null;
        if ($idempresa) {
            return ProjetoService::obterProjetosEmpresa($idempresa);
        }
        return $http->badRequest("Informações insuficientes", "É necessário informar o id da empresa");
    }
}