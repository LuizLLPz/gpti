<?php
class ErrorResponse {
    public ?string $title;
    public ?string $message;

    public function __construct(?string $title = null, ?string $message = null) {
        $this->title = $title;
        $this->message = $message;
    }
}