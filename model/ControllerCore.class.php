<?
include_once _PROJECT_PATH_.'/model/db.class.singleton.php';
class ControllerCore{

    private function addWhereStatement($array){
        $conditions=count($array);
        $query='';
        $limit='';
        if ($conditions>=1){
            $query = " WHERE ";
        }
        foreach ($array as $row => $value){
            if ($row=='limit'){
                $limit = $this->addLimitStatement($value);
            } else {
                $query .= $row." LIKE '".str_replace('!','%',$value)."'";
                // $mbd->prepare();
                $conditions--;
                if ($conditions>0){
                    $query .= ' AND ';
                }
            }
        }
        if ($query == " WHERE "){
            return $limit;
        }
        return $query.$limit;
    }
    
    private function addLimitStatement($limit){
        $query='';
        $values=explode(',',$limit);
        $query .= ' LIMIT '.$values[0];
        if (array_key_exists(1,$values)){
            $query .= ', '.$values[1];
        }
        return $query;
    }

    protected function runQuery($query){
        $con = DB::getInstance();
        $res = $con->ejecutar($query);
        return $res;
    }

    protected function buildGETQuery($data){
        // get parameters in ajax
        $query = 'SELECT * FROM '.$this->tableName;
        if ($data!="" && is_array($data)){
            $query .= $this->addWhereStatement($data);
        }
        return $query;
    }
    protected function buildPOSTQuery($data){
        // Object: {column_name: "value"} 
        if ($data!="" && is_object($data)){
            $query = 'INSERT INTO '.$this->tableName;
            $rows = ' (';
            $values = ' VALUES (';
            $endData=end($data);
            $endKey = key($data);
            unset($data->$endKey);
            foreach ($data as $row => $value){
                $rows .= $row.', ';
                $values .= '"'.$value.'", ';
            }
            $values .= '"'.$endData.'")';
            $rows .= $endKey.')';
            $query .= $rows.$values;
        }
        return $query;
    }
    protected function buildPUTQuery($data){
        // Object: {column_name: "value"} 
        $count = 0;
        if ($data!="" && is_array($data)){
            $query = 'UPDATE '.$this->tableName.' SET ';
            foreach ($data[1] as $row => $value){
                $count++;
                $query .= $row."='".$value."'";
                if (count($data[1]) == $count) $query .= ' ';
                else $query .= ', ';
            }
            $query .= $this->addWhereStatement($data[0]);
        }
        return $query;
    }
    protected function buildDELETEQuery($data){
        $query = 'DELETE FROM '.$this->tableName;
        $query .= $this->addWhereStatement($data);
        return $query;
    }
}