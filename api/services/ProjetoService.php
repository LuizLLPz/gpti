<?php
require "./models/ProjetoModel.php";
class ProjetoService {
    static function obterProjetosEmpresa(string $id): Http {
        $projetos = ProjetoModel::obterProjetosEmpresa($id);
        $http = new Http();
        if (sizeof($projetos) == 0) {
            return $http->noContent("Nenhum projeto encontrado");
        }
        return $http->ok($projetos);
    }
}