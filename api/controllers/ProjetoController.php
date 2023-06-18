<?php
require "./services/ProjetoService.php";
class ProjetoController {
    static function obterProjetosEmpresa(Http $http): Http {
        if ($_SERVER['REQUEST_METHOD'] != 'GET') return $http->methodNotAllowed();
        $idempresa = $http->params['IDEMPRESA'] ?? null;
        if ($idempresa) {
            return ProjetoService::obterProjetosEmpresa($idempresa);
        }
        return $http->badRequest("Informações insuficientes", "É necessário informar o id da empresa");
    }

    static function criarProjeto(Http $http): Http {
        if ($_SERVER['REQUEST_METHOD'] != 'POST') return $http->methodNotAllowed();
        return ProjetoService::criarProjeto($http->body);
    }

    static function apagarProjeto(Http $http): Http {
        if ($_SERVER['REQUEST_METHOD'] != 'DELETE') return $http->methodNotAllowed();
        $idprojeto = $http->params['IDPROJETO'] ?? null;
        if ($idprojeto) {
            return ProjetoService::apagarProjeto($idprojeto);
        }
        return $http->badRequest("Informações insuficientes", "É necessário informar o id do projeto");
    }
}