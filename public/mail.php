<?php


$country = $_POST['tourCountry'];
$tourdate = $_POST['tourDate'];
$name = $_POST['tourUsername'];
$phone = $_POST['tourUserphone'];
$date = date("🕒 H:m, 🗓 d.m.Y");

$to  = "info@jbworldcompany.com";
$count = file_get_contents('count.txt');
$subject = "<b>📧 ЗАЯВКА:</b> #".$count." с сайта jbworldcompany.com";

$message = " 
  <b>📧 ЗАЯВКА:</b> #$count\n
  <b>👤 Имя:</b> $name\n
  <b>📱 Номер телефона:</b> $phone\n
  <b>📌 Планируемая дата:</b> $tourdate\n
  <b>📆 Дата получения заявки:</b>\n<pre>$date</pre>
";

$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
$headers .= "From: От кого письмо <from@example.com>\r\n"; 
$headers .= "Reply-To: reply-to@example.com\r\n"; 

mail($to, $subject, $message, $headers); 




// $txt = urlencode($txt);


$count++;
file_put_contents('count.txt', $count);

echo "ok";
?>