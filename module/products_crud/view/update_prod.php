<div id="contenido">
<p>Product info:</p>
<form name="formm" method="POST" id="formm">
  <table border="0" cellspacing="5" cellpadding="0">
  <tr>
      <td >Product Code</td>
      <td ><input name="product_code" type="text" id="product_code" class="form-control" value="<?php echo $prod['product_code'];?>" readonly></td>
      <td><span id="e_product_code" class="styerror"></span></td>
    </tr>
    <tr>
      <td >Product</td>
      <td ><input name="product" type="text" id="product" class="form-control" value="<?php echo $prod['product_name'];?>"></td>
      <!-- <td><?php echo @$error[0] ?></td> -->
      <td><span id="e_product" class="styerror"></span></td>
    </tr>
    <tr>
      <td>Brand</td>
      <td><input name="brand" type="text" id="brand" class="form-control" value="<?php echo $prod['brand'];?>"></td>
      <!-- <td><?php echo @$error[1] ?></td> -->
      <td><span id="e_brand" class="styerror"></span></td>
    </tr>
    <tr>
      <td>Manufacturer email</td>
      <td><input name="m_email" type="text" id="m_email" class="form-control" value="<?php echo $prod['m_email'];?>"></td>
      <!-- <td><?php echo @$error[2] ?></td> -->
      <td><span id="e_memail" class="styerror"></span></td>
    </tr>
    <tr>
      <td >Price</td>
      <td ><input name="product_price" type="text" id="product_price" value="<?php echo $prod['price'];?>" class="form-control"></td>
      <td><span id="product_price" class="styerror"></span></td>
    </tr>
    <tr>
      <td>State</td>
      <td><select name="state" id="state" class="form-control">
        <?php
            if ($prod['state_product'] ==="Available") {
        ?>
            <option value="Other">Other</option>
            <option value="Available" selected>Available</option>
            <option value="Unavailable">Unavailable</option>
        <?php
            }elseif ($prod['state_product'] ==="Unavailable") {    
        ?>
            <option value="Other">Other</option>
            <option value="Available" >Available</option>
            <option value="Unavailable" selected>Unavailable</option>
        <?php
            }else{    
        ?>
            <option value="Other" selected>Other</option>
            <option value="Available" >Available</option>
            <option value="Unavailable">Unavailable</option>
        <?php
            }
        ?>
      </select></td>
      <td><?php echo @$error[3] ?></td>
      <td><span id="e_state" class="styerror"></span></td>
    </tr>
    <tr>
        <td>Product type</td>
        <td>
            <?php
                if ($prod['product_type'] === "laptop") {
            ?>
                Laptop<input name="prod_type" type="radio" value="laptop" checked>
                Computer<input name="prod_type" type="radio" value="computer">
                Other<input name="prod_type" type="radio" value="other" >
            <?php
               } elseif ($prod['product_type'] === "computer") {
            ?>
                Laptop<input name="prod_type" type="radio" value="laptop" >
                Computer<input name="prod_type" type="radio" value="computer" checked>
                Other<input name="prod_type" type="radio" value="other" >
            <?php
                }else{    
            ?>
                Laptop<input name="prod_type" type="radio" value="laptop" >
                Computer<input name="prod_type" type="radio" value="computer" >
                Other<input name="prod_type" type="radio" value="other" checked>
            <?php
                }
            ?>
        </td>
        <td><?php echo @$error[4] ?></td>
    </tr>

    <tr>
      <td>Processor type</td>
        <?php
            $afi=explode(",", $prod['processor_type']);
        ?>
      <td>
        <?php
            $busca_array=in_array("i3", $afi);
            if($busca_array){
        ?>
            i3<input type="checkbox" name="type_proc[]" value="i3" checked><?php echo @$error[5] ?>
        <?php
            }else{
        ?>
            i3<input type="checkbox" name="type_proc[]" value="i3"><?php echo @$error[5] ?>
        <?php
            }
        ?>

        <?php
            $busca_array=in_array("i5", $afi);
            if($busca_array){
        ?>
            i5  <input type="checkbox" name="type_proc[]" value="i5" checked><?php echo @$error[5] ?>
        <?php
            }else{
        ?>
            i5  <input type="checkbox" name="type_proc[]" value="i5"><?php echo @$error[5] ?>
        <?php
            }
        ?>

        <?php
            $busca_array=in_array("i7", $afi);
            if($busca_array){
        ?>
            i7  <input type="checkbox" name="type_proc[]" value="i7" checked><?php echo @$error[5] ?>
        <?php
            }else{
        ?>
            i7  <input type="checkbox" name="type_proc[]" value="i7"><?php echo @$error[5] ?>
        <?php
            }
        ?>

        <?php
            $busca_array=in_array("i9", $afi);
            if($busca_array){
        ?>
             i9  <input type="checkbox" name="type_proc[]" value="i9" checked><?php echo @$error[5] ?>
        <?php
            }else{
        ?>
            i9  <input type="checkbox" name="type_proc[]" value="i9"><?php echo @$error[5] ?>
        <?php
            }
        ?>
           
      </td>
      <td><?php echo @$error[5] ?></td>
      <td><span id="e_type_proc" class="styerror"></span></td>
    </tr>
    <tr>
        <td>
            <p><label>Available until:</label></p>
        </td>
        <td>
            <p><input id="demo1" type="text" name="available_until_date" class="form-control" value="<?php echo $prod['available_until'];?>"><?php echo @$error[4] ?></p>
        </td>
        <td><?php echo @$error[6] ?></td>
        <td><span id="e_available_until" class="styerror"></span></td>
    </tr>
    
    <tr>
      <td><input name="Submit" type="button" value="Update" onclick="validate_prod('update')" /></td>
      <td>&nbsp;</td>
    </tr>
  </table>
</form>
</div>