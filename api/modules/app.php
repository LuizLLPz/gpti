<?php
class App {
    private array $pipeline;

    public function __construct()
    {
        $this->pipeline = [];
    }

    function start(){
        foreach($this->pipeline as $mid) {
            $error = $mid->start();
            if ($error) {
                echo "Erro";
            }
        }
    }

    function addMiddleware(MiddlewareBase $middleware) {
        $this->pipeline->insert($middleware);
    }
}