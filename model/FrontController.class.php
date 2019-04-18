<?
class FrontController {
    static $_instance;

    public function FrontController(){
        $this->uri = $_SERVER['REQUEST_URI'];
        $this->run();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    private function unknownToHome($cutted){
        if (isset($cutted[2]) && $cutted[2]=='page'){
            return $cutted[3];
        } else 
            return "home";
    }

    private function getAllowedPages(){
        $allowedPages=array(
            'aboutus',
            'cart',
            'contact_us',
            'home',
            'likes',
            'shop',
            'login',
            'products_crud',
            'profile',
            'services'
        );
        return $allowedPages;
    }

    public function run(){
        include_once dirname(__FILE__).'/../paths.php';

        $allowedPages=$this->getAllowedPages();

        $this->uri=rtrim($this->uri, '/');
        $cutUrl=explode('/',$this->uri);
        $pagename=$this->unknownToHome($cutUrl);

        if (isset($cutUrl[2]) && $cutUrl[2]=='api') {    //  localhost/web../api/xxxxxx

            if (in_array($cutUrl[3],$allowedPages)){
                $getParams=array_slice($cutUrl,4);
                foreach ($getParams as $getParam){
                    $params = explode('-',$getParam);
                    $_GET[$params[0]]=$params[1];
                }
                include_once _PROJECT_PATH_.'/module/'.$cutUrl[3].'/model/'.$cutUrl[3].'.php';
            } else {
                header('HTTP/1.0 404 Not found');
            }

        } else {  //  localhost/web../page/xxxxxx

            if (file_exists(_PROJECT_PATH_.'/view/inc/top_page_'.$pagename.".php")) 
                include_once _PROJECT_PATH_.'/view/inc/top_page_'.$pagename.".php";
            else
                include_once _PROJECT_PATH_.'/view/inc/top_page_.php';

            include_once _PROJECT_PATH_.'/view/inc/menu.php';
            // $actual_page = $this->getPageFormatted();

            if (in_array($pagename,$allowedPages))
                include_once 'module/'.$pagename.'/view/'.$pagename.".html";
            else 
                include_once "view/inc/error404.php";
            
    
            include_once _PROJECT_PATH_.'/view/inc/footer.php';
            if (file_exists(_PROJECT_PATH_.'/view/inc/bottom_page_'.$pagename.'.php'))
                include_once _PROJECT_PATH_.'/view/inc/bottom_page_'.$pagename.'.php';
            else 
                include_once _PROJECT_PATH_.'/view/inc/bottom_page_.php';
            
            
        }
    }
}
?>
 <!-- $this->uri = "/web_framework_php/page/home"; -->