<p>Product info:</p>
<form name="formm" method="POST" id="formm">
  <table border="0" cellspacing="5" cellpadding="0">
    <tr>
      <td >Product Code</td>
      <td ><input name="product_code" type="text" id="product_code" value="A1111" class="form-control"></td>
      <!-- <td><?php echo @$error[0] ?></td> -->
      <td><span id="e_product_code" class="styerror"></span></td>
    </tr>
    <tr>
      <td >Product</td>
      <td ><input name="product" type="text" id="product" value="autoprod" class="form-control"></td>
      <!-- <td><?php echo @$error[0] ?></td> -->
      <td><span id="e_product" class="styerror"></span></td>
    </tr>
    <tr>
      <td>Brand</td>
      <td><input name="brand" type="text" id="brand" value="autobrand" class="form-control"></td>
      <!-- <td><?php echo @$error[1] ?></td> -->
      <td><span id="e_brand" class="styerror"></span></td>
    </tr>
    <tr>
      <td>Manufacturer email</td>
      <td><input name="m_email" type="text" id="m_email" value="autoemail@auto.es" class="form-control"></td>
      <!-- <td><?php echo @$error[2] ?></td> -->
      <td><span id="e_memail" class="styerror"></span></td>
    </tr>
    <tr>
      <td >Price</td>
      <td ><input name="product_price" type="text" id="product_price" value="120" class="form-control"></td>
      <td><span id="product_price" class="styerror"></span></td>
    </tr>
    <tr>
      <td>State</td>
      <td><select name="state" id="state" class="form-control">
        <option value="Other">Other</option>
        <option value="Available">Available</option>
        <option value="Unavailable">Unavailable</option>
      </select></td>
      <td><?php echo @$error[3] ?></td>
      <td><span id="e_state" class="styerror"></span></td>
    </tr>
    <tr>
        <td>Product type</td>
        <td>
            Laptop<input name="prod_type" type="radio" value="laptop" >
            Computer<input name="prod_type" type="radio" value="computer">
            Other<input name="prod_type" type="radio" value="other" checked>
        </td>
        <td><?php echo @$error[4] ?></td>
    </tr>
    <tr>
      <td>Processor type</td>
      <td>
          i3  <input type="checkbox" name="type_proc[]" value="i3" id="type_proc[]"><?php echo @$error[5] ?>
        	i5  <input type="checkbox" name="type_proc[]" value="i5" id="type_proc[]"><?php echo @$error[5] ?>
        	i7  <input type="checkbox" name="type_proc[]" value="i7" id="type_proc[]"><?php echo @$error[5] ?>
          i9  <input type="checkbox" name="type_proc[]" value="i9" id="type_proc[]"><?php echo @$error[5] ?>
      </td>
      <td><?php echo @$error[5] ?></td>
      <td><span id="e_type_proc" class="styerror"></span></td>
    </tr>
    <tr>
        <td>
            <p><label>Available until:</label></p>
        </td>
        <td>
            <p><input id="demo1" type="text" name="available_until_date" readonly class="form-control"><?php echo @$error[4] ?></p>
        </td>
        <td><span id="e_available_until" class="styerror"></span></td>
        <td><?php echo @$error[6] ?></td>
    </tr>
    
    <tr>
    <!-- <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">Agregar</button>
            <div class="modal fade" id="myModal" role="dialog">
              <div class="modal-dialog">

                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Agregar producto a la lista</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Producto</label>
                            <select class="selectpicker form-control" id="pro_id" name="pro_id" data-width='100%'>
                                        <option value="Lentes">Lentes</option>
                                        <option value="Casco">Casco</option>
                                        <option value="Gorra">Gorra</option>
                                </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" onclick="agregarProducto()" class="btn btn-default" data-dismiss="modal">Agregar</button>
                    </div>
                </div>

            </div>
        </div> -->
      <td><input name="Submit" type="button" value="Create" onclick="validate_prod('create')" /></td>
      <td>&nbsp;</td>
      
    </tr>
  </table>
</form>