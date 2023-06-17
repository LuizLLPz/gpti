<?php
abstract class MiddlewareBase {
    abstract function start(Http $http): Http;
}