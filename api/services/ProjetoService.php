<?php
require "./models/ProjetoModel.php";
class ProjetoService {
    static function obterProjetosEmpresa(string $id): Http {
        $projetos = ProjetoModel::obterProjetosEmpresa($id);
        $http = new Http();
        if (sizeof($projetos) == 0) {
            return $http->noContent("Nenhum projeto encontrado");
        }
        return $http->ok(new Response(data: $projetos));
    }

    static function criarProjeto(mixed $body): Http {
        $http = new Http();
        $idEmpresa = $body['IDEMPRESA'] ?? null;
        $nome = $body['NOME'] ?? null;
        $descricao = $body['DESCRICAO'] ?? null;
        if (!$idEmpresa) return $http->badRequest("Informações insuficientes", "É necessário informar o id da empresa");
        if (!$nome) return $http->badRequest("Informações insuficientes", "É necessário informar o nome do projeto");
        if (!$descricao) return $http->badRequest("Informações insuficientes", "É necessário informar a descrição do projeto");
        $projeto = new ProjetoModel();
        $projeto->IDEMPRESA = $idEmpresa;
        $projeto->NOME = $nome;
        $projeto->DESCRICAO = $descricao;
        return ($projeto->criarProjeto());
    }

    static function apagarProjeto(string $id): Http {
        $http = new Http();
        $projeto = ProjetoModel::obterProjetoID($id);
        if (!$projeto) return $http->notFound("Projeto não encontrado");
        return $projeto->apagarProjeto();
    }
}