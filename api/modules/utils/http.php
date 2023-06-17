<?php
class Http {
    public int $status_code;
    public mixed $response;
    public bool $success;
    public array $params;
    public ?array $body;
    public ?ErrorResponse $error;

    public function __construct() {
        $this->success = true;
        $this->status_code = 200;
        $this->response = [];
        $this->params = [];
        $this->body = [];
    }

    public function created(mixed $response): Http {
        $this->status_code = 201;
        $this->response = $response;
        return $this;
    }

    public function notFound(?string $title, ?string $message): Http {
        $this->success = false;
        $this->status_code = 404;
        $this->error = new ErrorResponse($title, $message);
        return $this;
    }

    public function badRequest(?string $title, ?string $message): Http {
        $this->success = false;
        $this->status_code = 400;
        $this->error = new ErrorResponse($title, $message);
        return $this;
    }

    public function methodNotAllowed(): Http {
        $this->success = false;
        $this->status_code = 405;
        $this->error = new ErrorResponse("Método não permitido");
        return $this;
    }

}