<?php
class RoutesMiddleware extends MiddlewareBase
{
    function start(): bool {
        return $this->fetchRoute();
    }

    function filterControllers(string $file): bool {
        if (str_contains($file,"Controller.php")) {
            return true;
        }
        return false;
    }

    function fetchRoute(): bool {
        $path =  parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $urlSections = explode("/", $path);
        $controller = $urlSections[count($urlSections) > 1 ? count($urlSections) - 2 : 0]."Controller";
        $endpoint = $urlSections[count($urlSections)- 1];
        $controllers = array_filter(scandir("controllers"), fn($file) => $this->filterControllers($file));
        $hasController = in_array($controller.".php", $controllers);
        if (!$hasController) return false;
        require "./controllers/{$controller}.php";
        if (!method_exists($controller, $endpoint)) return false;
        $controller::$endpoint();
        return true;
    }

}