<?php
class Response {
    public ?string $message;
    public mixed $data;

    public function __construct(?string $message = null, mixed $data = null) {
        $this->message = $message;
        $this->data = $data;
    }
}