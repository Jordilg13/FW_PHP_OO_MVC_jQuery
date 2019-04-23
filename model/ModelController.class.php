<?
include_once _PROJECT_PATH_.'/model/ControllerCore.class.php';
class ModelController extends ControllerCore{
    // static $_instance;
    
    protected function __construct(){
    }

    public function request($data, $func){
        // debug($data);
        $query=$this->$func($data);        
        return $this->runQuery($query);
    }

}