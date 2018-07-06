<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="fonts/stylesheet.css">
    <link rel="stylesheet" href="css/bootstrap-grid.min.css">
    <title>Document</title>
</head>
<body>
    <script src="js/shortcut.js"></script>
    <script src="js/js.js"></script>
</body>
</html>

<?php 
 
$sendto   = "ultraplusex@gmail.com"; // почта, на которую будет приходить письмо
$username = $_POST['name'];   // сохраняем в переменную данные полученные из поля c именем
$usertel = $_POST['telephone']; // сохраняем в переменную данные полученные из поля c телефонным номером
$usermail = $_POST['email']; // сохраняем в переменную данные полученные из поля c адресом электронной почты
$usersize = $_POST['size']; // сохраняем в переменную данные полученные из поля c размер удочки
 
// Формирование заголовка письма
$subject  = "Заявка с сайта";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
 
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Cообщение с сайта</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
$msg .= "<p><strong>Размер:</strong> ".$usersize."</p>\r\n";
$msg .= "</body></html>";
 
// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
    echo '
    <div class="main">
        <div class="spasibo">
            <div class="row ">
                <div class="col-12">
                    <h1>Благодарим! ваша заявка уже обрабатывается!</h1>
                    <p>Мы перезвоним вам в течении 69 минут!</p>
                    <a class="home" href="index.html">на главную</a>
                </div>
            </div>
            <hr>
            <div class="row top">
                <div class="col-md-6 d-flex justify-content-center justify-content-md-end">
                    <img src="img/spin-2.png" alt="">
                </div>
                <div class="col-md-6 m-auto">
                    <h3>Вместе с этим берут</h3>
                    <div class="points">
                        <ul>
                            <li>Катушка безинерционная:</li>
                            <li>- металлическая шпуля;</li>
                            <li>- 3-6 подшипников;</li>
                            <li>- графитовая сменная шпуля;</li>
                        </ul>
                        <a class="more" href="#">перейти</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
    ';
} else {
    echo "<center>сссс</center>";
}
 
?>