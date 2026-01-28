<?php
if(isset($_FILES['video'])){
$target_dir = "videos/";
$target_file = $target_dir . basename($_FILES["video"]["name"]);
if(move_uploaded_file($_FILES["video"]["tmp_name"], $target_file)){
echo "Видео загружено!";
} else {
echo "Ошибка загрузки.";
}
}
?>