<div id="contenido">
    <form autocomplete="on" method="post" name="delete_prod" id="delete_prod" action="index.php?page=products_crud&op=delete&id=<?php echo $_GET['id']; ?>">
        <table border='0'>
            <tr>
                <td align="center"  colspan="2"><h3>Do you really want to delete all products?</h3></td>
                
            </tr>
            <tr>
                <td align="center"><button type="submit" class="Button_green"name="delete" id="delete">Aceptar</button></td>
                <td align="center"><a class="Button_red" href="index.php?page=products_crud&op=list">Cancelar</a></td>
            </tr>
        </table>
    </form>
</div>