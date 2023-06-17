<?php
class App {
    private array $pipeline;

    public function __construct(){
        $this->pipeline = [];
    }

    function start(): void{
        $http = new Http();
        foreach($this->pipeline as $mid) {
            $http = $mid->start($http);
            http_response_code($http->status_code);
            if (!$http->success) {
                echo $http->status_code;
            }
        }
    }

    function addMiddleware(MiddlewareBase $middleware): void {
        $this->pipeline[] = $middleware;
    }
}