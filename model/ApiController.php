<?
switch ($method) {
    case 'GET':
    case 'DELETE':
        $data=$_GET;
        $results = [];
        $meth = "build".$method."Query";
        $response = $object->request($data,$meth);
        // $response = $object->$method($data);
        if ($method=='DELETE'){
            if ($response){
                $results=$response;
            } else {
                header('HTTP/1.0 400 Bad Request');
                die();
            }
        } else {
            if ($response){
                foreach ($response as $row){
                    foreach ($row as &$element){
                        $element=utf8_encode($element);
                    }
                    $results[]=(object)$row;
                }
            } else {
                header('HTTP/1.0 400 Bad Request');
                die();
            }
        }
        break;
    case 'POST':
        $data=json_decode($_POST['data']);
        // $data=$_POST['data'];
        $meth = "build".$method."Query";
        $response = $object->request($data,$meth);
        if ($response){
            $results=$response;
        } else {
            header('HTTP/1.0 400 Bad Request');
            die();
        }
        break;
    case 'PUT':
        $data = [];
        array_push($data,$_GET);
        parse_str(file_get_contents("php://input"),$dataPUT);
        // $data[1] = (object) $data[1];
        array_push($data,$dataPUT['data']);
       
        $meth = "build".$method."Query";
        $response = $object->request($data,$meth);
        // $response = $object->$method($data);
        if ($response){
            $results=$response;
        } else {
            header('HTTP/1.0 400 Bad Request');
            die();
        }
        break;
    default:
        echo json_encode("default");
        break;
}