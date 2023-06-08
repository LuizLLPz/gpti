<?php
class App {
    private array $pipeline;

    public function __construct(){
        $this->pipeline = [];
    }

    function start(){
        foreach($this->pipeline as $mid) {
            $success = $mid->start();
            if (!$success) {
                echo "Erro";
            }
        }
    }

    function addMiddleware(MiddlewareBase $middleware): void {
        $this->pipeline[] = $middleware;
    }
}