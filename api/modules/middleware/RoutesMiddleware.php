<?php
class RoutesMiddleware extends MiddlewareBase
{
    function start(Http $http): Http {
        return $this->fetchRoute($http);
    }

    function filterControllers(string $file): bool {
        if (str_contains($file,"Controller.php")) {
            return true;
        }
        return false;
    }

    function fetchRoute(Http $http): Http {
        $path =  parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $urlSections = explode("/", $path);
        $controller = $urlSections[count($urlSections) > 1 ? count($urlSections) - 2 : 0]."Controller";
        $endpoint = $urlSections[count($urlSections)- 1];
        $controllers = array_filter(scandir("controllers"), fn($file) => $this->filterControllers($file));
        $hasController = in_array($controller.".php", $controllers);
        if (!$hasController) {
            $http->notFound("Não encontrado", 'A url fornecida não foi encontrada nos nossos servidores!');
            return $http;
        }
        require "./controllers/{$controller}.php";
        if (!method_exists($controller, $endpoint)) {
            $http->notFound("Não encontrado", 'A url fornecida não foi encontrada nos nossos servidores!');
            return $http;
        }
        $params = [];
        parse_str(parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY), $params);
        $http->params = $params;
        $http->body = json_decode(file_get_contents('php://input'), true);
        return $controller::$endpoint($http);
    }

}