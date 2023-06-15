<?php
class UserService {
    function login() {
        $user = User::getWithName();
    }
}