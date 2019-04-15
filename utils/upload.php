<?php
function upload_files() {
    $error = "";
    $copiarFichero = false;
    $extensiones = array('jpg', 'jpeg', 'gif', 'png', 'bmp');

    if(!isset($_FILES)) {
        $error .=  'No existe $_FILES <br>';
    }
    if(!isset($_FILES['file'])) {
        $error .=  'No existe $_FILES[file] <br>';
    }

    $imagen = $_FILES['file']['tmp_name'];
    $nom_fitxer= $_FILES['file']['name'];
    $mida_fitxer=$_FILES['file']['size'];
    $tipus_fitxer=$_FILES['file']['type'];
    $error_fitxer=$_FILES['file']['error'];

    if ($error_fitxer>0) { // El error 0 quiere decir que se subió el archivo correctamente
        switch ($error_fitxer){
            case 1: $error .=  'The file size is too heavy <br>'; break;//Fitxer major que upload_max_filesize
            case 2: $error .=  'The file size is too large <br>';break;//Fitxer major que max_file_size
            case 3: $error .=  'File upload incomplete <br>';break;//Fitxer només parcialment pujat
            //case 4: $error .=  'No has pujat cap fitxer <br>';break; //assignarem a l'us default-avatar
        }
    }

    ////////////////////////////////////////////////////////////////////////////
    //if($_FILES['avatar']['error'] !== 0) { //Assignarem a l'us default-avatar
        //$error .=  'Archivo no subido correctamente <br>';
    //}

    ////////////////////////////////////////////////////////////////////////////
    if ($_FILES['file']['size'] > 55000 ){
        $error .=  "Large File Size <br>";
    }

    ////////////////////////////////////////////////////////////////////////////
    //if ($_FILES['avatar']['name'] === "") { //Assignarem a l'us default-avatar
        //$error .= "No ha seleccionado ninguna imagen. Te proporcionamos un default-avatar<br>";
    //}

    if ($_FILES['file']['name'] !== "") {
        ////////////////////////////////////////////////////////////////////////////
        @$extension = strtolower(end(explode('.', $_FILES['file']['name']))); // Obtenemos la extensión, en minúsculas para poder comparar
        if( ! in_array($extension, $extensiones)) {
            $error .=  'Sólo se permite subir archivos con estas extensiones: ' . implode(', ', $extensiones).' <br>';
        }
        ////////////////////////////////////////////////////////////////////////////
        //getimagesize falla si $_FILES['avatar']['name'] === ""
        if (!@getimagesize($_FILES['file']['tmp_name'])){
            $error .=  "Invalid Image File... <br>";
        }
        ////////////////////////////////////////////////////////////////////////////
        list($width, $height, $type, $attr) = @getimagesize($_FILES['file']['tmp_name']);
        if ($width > 150 || $height > 150){
            $error .=   "Maximum width and height exceeded. Please upload images below 150x150 px size <br>";
        }
    }
        /*
            $image_size_info    = getimagesize($imagen); //get image size
            if($image_size_info){
                $image_width        = $image_size_info[0]; //image width
                $image_height       = $image_size_info[1]; //image height
                $image_type         = $image_size_info['mime']; //image type
            }else{
                die("Make sure image file is valid!");
            }
        */

    ////////////////////////////////////////////////////////////////////////////
    $upfile = $_SERVER['DOCUMENT_ROOT'].'/web_framework_php/media/'.$_FILES['file']['name'];//Cambiado avatar por file
    if (is_uploaded_file($_FILES['file']['tmp_name'])){
        if (is_file($_FILES['file']['tmp_name'])) {
            // $idUnico = rand();
            $idUnico = $_SESSION['logged_user'];
            $nombreFichero = $idUnico."_".$_FILES['file']['name'];
            //$nombreFichero = $_FILES['file']['name'];
            $_SESSION['nombreFichero'] = $nombreFichero;
            $copiarFichero = true;
            // I use absolute route to move_uploaded_file because this happens when i run ajax
            $upfile = $_SERVER['DOCUMENT_ROOT']."/web_framework_php/media/".$nombreFichero;
        }else{
                $error .=   "Invalid File...";
        }
    }

    $i=0;
    if ($error == "") {
        if ($copiarFichero) {
            if (!move_uploaded_file($_FILES['file']['tmp_name'], $upfile)) {
                $error .= "<p>Error al subir la imagen.</p>";
                return $return=array('result'=>false,'error'=>$error,'data'=>"");
            }
            //We need edit $upfile because now i don't need absolute route.
            $upfile = '/web_framework_php/media/'.$nombreFichero;
            return $return=array('result'=>true , 'error'=>$error,'data'=>$upfile);
        }
        if($_FILES['file']['error'] !== 0) { //Assignarem a l'us default-avatar
            $upfile = '/web_framework_php/media/default-avatar.png';
            return $return=array('result'=>true,'error'=>$error,'data'=>$upfile);
        }
    }else{
        return $return=array('result'=>false,'error'=>$error,'data'=>"");
    }
}//End upload_files

function remove_files(){
  //exit;
	if(file_exists($_SERVER['DOCUMENT_ROOT'].'/web_framework_php/media/'.$_SESSION['nombreFichero'])){
		unlink($_SERVER['DOCUMENT_ROOT'].'/web_framework_php/media/'.$_SESSION['nombreFichero']);
		return true;
	}else{
		return false;
	}
}
