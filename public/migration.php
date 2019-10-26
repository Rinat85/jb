<?php

header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if ($_POST) {
  $name = strip_tags(trim($_POST["name"]));
  $name = str_replace(array("\r","\n"),array(" "," "),$name);
  $phone = filter_var(trim($_POST["phone"]), FILTER_SANITIZE_NUMBER_INT);
  $country = strip_tags(trim($_POST["country"]));
  $country = str_replace(array("\r","\n"),array(" "," "),$country);
  $work = strip_tags(trim($_POST["work"]));
  $work = str_replace(array("\r","\n"),array(" "," "),$work);

  $date = date("🕒 H:m, 📌 d.m.Y");
  $count = file_get_contents('migrationcount.txt');
  
  $recipient = "info@jbworldcompany.com";

  // Set the email subject.
  $subject = "📧 ЗАЯВКА: #".$count." по миграции с сайта jbworldcompany.com";

  // Build the email content.
  $email_content = "<b>Завка отправлена с раздела миграция сайта jbworldcompany.com</b><br><br>";
  $email_content .= "<b>📧 ЗАЯВКА:</b> #$count<br><br>\n";
  $email_content .= "<b>👤 Имя:</b> $name<br>\n";
  $email_content .= "<b>📱 Номер телефона:</b> $phone<br>\n";
  $email_content .= "<b>🌍 Страна:</b> $country<br>\n";
  $email_content .= "<b>🔨 Желаемая работа:</b> $work<br><br>\n";
  $email_content .= "<b>📆 Дата получения заявки:</b> $date\n";

  // Build the email headers.
  // $email_headers = "From: $name <$phone>";
  $email_headers  = "Content-type: text/html; charset=\"utf-8\" \r\n"; 
  $email_headers .= "From: сайт по туризму jbworldcompany.com <user>\r\n"; 
  $email_headers .= "Reply-To: reply-to@example.com\r\n"; 


  // Send the email.
  if (mail($recipient, $subject, $email_content, $email_headers)) {
      // Set a 200 (okay) response code.
      $count++;
      file_put_contents('migrationcount.txt', $count);
      http_response_code(200);
      echo "Thank You! Your message has been sent.";
  } else {
      // Set a 500 (internal server error) response code.
      http_response_code(500);
      echo "Oops! Something went wrong and we couldn't send your message.";
  }

} else {
  // Not a POST request, set a 403 (forbidden) response code.
  http_response_code(403);
  echo "There was a problem with your submission, please try again.";
}

exit();

?>