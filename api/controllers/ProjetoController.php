<?php
class ProjetoController {
    static function obterProjetosEmpresa(Http $http): Http {
        if ($_SERVER['REQUEST_METHOD'] != 'GET') return $http->methodNotAllowed();
        $idempresa = $http->body['IDEMPRESA'] ?? null;
        if ($idempresa) {
            return ProjetoService::obterProjetosEmpresa($idempresa);
        }
        return $http->badRequest("Informações insuficientes", "É necessário informar o id da empresa");
    }

    static function criarProjeto(Http $http): Http {
        if ($_SERVER['REQUEST_METHOD'] != 'POST') return $http->methodNotAllowed();
        return ProjetoService::criarProjeto($http->body);
    }
}