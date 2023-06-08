<?php
class RoutesMiddleware extends MiddlewareBase
{
    static function start(): bool {
        fetchRoute();
        return true;
    }

    function fetchRoute() {
        echo $_SERVER['REQUEST_URI'];
    }
}