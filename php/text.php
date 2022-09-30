<?php
// the message
$msg = "First line of text\nSecond line of text";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
  // send email
mail("someone@example.com","My subject",$msg);
    
}else{
var_dump($_GET);
}

?>