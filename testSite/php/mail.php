<?php
  $to = "ft2jajsrf8o4@mail.ru"; // емайл получателя данных из формы

  $tema = "Сообщение с сайта"; // тема полученного емайла

  $message = "Имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
  $message .= "E-mail: ".$_POST['email']."<br><br>"; //полученное из формы name=email
  $message .= "Телефон:\r\n ".$_POST['phone']."<br>"; //полученное из формы name=message
  $headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента

  $success = mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменны

  echo $success;
?>
