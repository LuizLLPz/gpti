<?php
class RoutesMiddleware extends MiddlewareBase
{
    function start(): bool {
        return $this->fetchRoute();
    }

    function fetchRoute():bool {
        $url =  $_SERVER['REQUEST_URI'];
        return true;
    }

}