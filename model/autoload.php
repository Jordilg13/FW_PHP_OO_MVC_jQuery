<?
spl_autoload_register(null,false);
spl_autoload_extensions('.php,.inc.php,.class.php,.class.singleton.php');
spl_autoload_register('loadClasses');

function loadClasses($className){
    error_log($className);
    if (file_exists('module/'.strtolower($className).'/model/'.$className.'.class.php')) {
        include_once 'module/'.strtolower($className).'/model/'.$className.'.class.php';
    }
    if (file_exists(dirname(__FILE__).'/'.$className.'.class.php')) {
        include_once dirname(__FILE__).'/'.$className.'.class.php';
    }
}

