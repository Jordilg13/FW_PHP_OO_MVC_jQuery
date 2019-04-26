<?php
// $_POST['sessionvar'] is a string with the name of the post variable
// Example ajax data: 
// {sessionvar: "user", user: {id:"xx",name: "xxxxxxxx"}}
class SessionHandlerr{
    public static function setSession($sesionvar,$params){
        $_SESSION[$sesionvar]=$params;
    }
    public static function getSession($sesionvar){
        if (isset($_SESSION[$sesionvar])) {
            return $_SESSION[$sesionvar];
        } else {
            return "unsetted";
        }
    }
    public static function clear($sesionvar){
        unset($_SESSION[$sesionvar]);
    }
}