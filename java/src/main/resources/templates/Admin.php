<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>YOU ARE ADMIN !!!</h1>

    <script src="../../../../../php/Upload.php"></script>
    <form method="POST" enctype="multipart/form-data">
        <input type="file" name="image">
        <br/> <br/>
        <button type="submit" name="submit">submit</button>
    </form>

    <div>
        <?php
            $res = mysqli_query($con, "select * from img");
            while($row = mysqli_fetch_assoc($res)){
        ?>
        <img src="Img/<?php echo $row['file'] ?>"/>
        <?php } ?>
    </div>
</body>
</html>