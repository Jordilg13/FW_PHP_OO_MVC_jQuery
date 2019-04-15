<div id="contenido">
    <div class="container">
    	<div class="row">
    			<h3>LISTA DE PRODUCTOS</h3>
    	</div>
    	<div class="row">
            <p><a href="index.php?page=products_crud&op=create" class="btn btn-success">Create</a>
            <!-- <button type="button" class="btn btn-success">Create</button> -->
            <a href="index.php?page=products_crud&op=deleteall" class="btn btn-danger">Delete All</a>
            <!-- <a href="index.php?page=products_crud&op=dummies" class="btn btn-info dummies_btn">Dummies</a></p> -->

    		<table id="table_crud">
            <thead>
                <tr>
                    <th width=125><b>Product</b></th>
                    <th width=125><b>Brand</b></th>
                    <th width=125><b>Price</b></th>
                    <th width=350><b>Action</b></th>
                </tr>
            </thead>
            <tbody>
                <?php
                    if ($rdo->num_rows === 0){
                        echo '<tr>';
                        echo '<td align="center"  colspan="3">THERE AREN\'T PRODUCTS</td>';
                        echo '</tr>';
                    }else{
                        foreach ($rdo as $row) {
                       		echo '<tr>';
                    	   	echo '<td width=125>'. $row['product_name'] . '</td>';
                    	   	echo '<td width=125>'. $row['brand'] . '</td>';
                    	   	echo '<td width=125>'. $row['price'] . '</td>';
                            echo '<td width=350>';
                            
                            echo '<a class="btn btn-primary prod" id='.$row['product_code'].'>Modal</a>';
                    	   	echo '&nbsp;';

                    	   	echo '<a class="btn btn-primary" href="index.php?page=products_crud&op=read&id='.$row['product_code'].'">Read</a>';
                    	   	echo '&nbsp;';
                    	   	echo '<a class="btn btn-success" href="index.php?page=products_crud&op=update&id='.$row['product_code'].'">Update</a>';
                    	   	echo '&nbsp;';
                            echo '<a class="btn btn-danger" href="index.php?page=products_crud&op=delete&id='.$row['product_code'].'">Delete</a>';
                            echo '&nbsp;';
                    	   	echo '<a class="btn btn-default btn-lg like" id="'.$row['product_code'].'">❤</a>';
                    	   	echo '</td>';
                    	   	echo '</tr>';
                        }
                    }
                ?>
                </tbody>
            </table>
    	</div>
    </div>
</div>

<!-- modal window -->
<section id="prod_modal" >
    <div id="details_prod"  >
        <div id="details">
            <div id="container">
                <div class="row">
                    <div class="col-md-2">Product code: </div>
                    <div id="p_code" class="col-md-10"></div></br>
                </div>
                <div class="row">
                    <div class="col-md-2">Product name: </div>
                    <div id="p_name" class="col-md-10"></div></br>
                </div>
                <div class="row">
                    <div class="col-md-2">Brand: </div>
                    <div id="p_brand" class="col-md-10"></div></br>
                </div>
                <div class="row">
                    <div class="col-md-2">Manufacturer email: </div>
                    <div id="p_memail" class="col-md-10"></div></br>
                </div>
                <div class="row">
                    <div class="col-md-2">Price: </div>
                    <div id="p_price" class="col-md-10"></div></br>
                </div>
                <div class="row">
                    <div class="col-md-2">State of product: </div>
                    <div id="p_state" class="col-md-10"></div></br>
                </div>
                <div class="row">
                    <div class="col-md-2">Processor type: </div>
                    <div id="p_processor" class="col-md-10"></div></br>
                </div>
                <div class="row">
                    <div class="col-md-2">Available until: </div>
                    <div id="p_availableuntil" class="col-md-10"></div></br>
                </div>
            </div>
        </div>
    </div>
</section>