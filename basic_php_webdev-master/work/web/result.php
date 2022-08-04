<?php

  require('../app/functions.php'); 
   /*読み込みに失敗したときに止めてほしいからrequire */
  
  $colors = filter_input(INPUT_GET, 'colors', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY);
  $colors = empty($colors) ? 'None Selected' :implode(',',$colors);

  include('../app/_parts/_header.php');
?>

<p><?= nl2br(h($colors)); ?></p>
<p><a href="index.php">Go back</a></p>

<?php

  include('../app/_parts/_footer.php');