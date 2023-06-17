<?php
class Http {
    public int $status_code;
    public mixed $response;
    public bool $success;

    public function __construct() {
        $this->success = true;
        $this->status_code = 200;
        $this->response = [];
    }

}