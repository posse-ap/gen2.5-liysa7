<?php

  require('../app/functions.php'); /*読み込みに失敗したときに止めてほしいからrequire */

  include('../app/_parts/_header.php');
?>

<form action ="result.php" method ="get">
  <select name="colors[]" multiple>
    <label><input type= "radio" name="color" value = "orange">Orange</label>
    <label><input type= "radio" name="color" value = "pink">Pink</label>
    <label><input type= "radio" name="color" value = "gold">gold</label>
  </select>
  <button>Send</button>
  <a href="reset.php">[reset]</a>
</form>

<?php

  include('../app/_parts/_footer.php');