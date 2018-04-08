<?

header('Content-Type: text/html; charset=utf-8');
// ----------------------------êîíôèãóðàöèÿ-------------------------- // 
 
$adminemail="serega40-in@yandex.ru";  // e-mail àäìèíà 
 
$date=date("d.m.y"); // ÷èñëî.ìåñÿö.ãîä 
 
$time=date("H:i"); // ÷àñû:ìèíóòû:ñåêóíäû 
 
 
//---------------------------------------------------------------------- // 

// Ïðèíèìàåì äàííûå ñ ôîðìû 
$name=$_POST['name'];  
$tel=$_POST['tel'];  
$email=$_POST['email'];  
$where=$_POST['where'];



 
$msg=" 

<p>$date $time</p> 

<p>Откуда: $where</p>

<p>Имя: $name</p>
<p>Телефон: $tel</p>
<p>Email: $email</p>

<br/>
";

$zag="$date $time Берсерк. Заявка";
$msg=iconv('utf-8', 'cp1251', $msg);
$zag=iconv('utf-8', 'cp1251', $zag);

mail("rabresh@mail.ru", "$zag", "$msg", "Content-type: text/html; charset=windows-1251\r\n\r\n");
/*mail("7874463@gmail.com", "$zag", "$msg", "Content-type: text/html; charset=windows-1251\r\n\r\n");
mail("serega40-in@yandex.ru", "$zag", "$msg", "Content-type: text/html; charset=windows-1251\r\n\r\n");*/
// Âûâîäèì ñîîáùåíèå ïîëüçîâàòåëþ 

/*
$token = "497518016:AAFL4ys8yOzoqwlcUywWAhVzcLHW6Ax9IdQ";
$chat_id = "-1001218932636";

$nameFieldset = "Пользователь: ";
$idFieldset = "ID: ";
$phoneFieldset = "Телефон: ";
$themeFieldset = "Сообщение: ";

$arr = array(
  $nameFieldset => $name,
  $idFieldset => $id,
  $phoneFieldset => $tel,
  $themeFieldset => $text
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
if($sendToTelegram) {
	exit('<meta http-equiv="refresh" content="0; url=index2.php" />');
} else {
	echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
}
*/


?>
