<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body class="main">
    <style>
        .main{
            background-color: #0080FF;
        }
        .tag{
            text-align: center;
        }
        .postArea{
            height: 400px;
            width: 800px;
            align-content: center;
        }

        .cont-wrapper{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    </style>
    <div class="cont-wrapper">
        <h1 class="tag">YOU ARE ADMIN !!!</h1>

        
        <form method="POST" enctype="multipart/form-data">
            <script src="Upload.php"></script>

            <input type="file" name="image">
            <br/> 
            <textarea name="post" class="postArea"></textarea>
            <br/>
            <br/>
            <ul>
                <li><input type="checkbox">პროფილი</li>
                <li><input type="checkbox">აქტივობები</li>
                <li><input type="checkbox">თემები</li>
                <li><input type="checkbox">ისტორიები</li>
            </ul>
            <br/>
            <br/>
            <button type="submit" name="submit">submit</button>
        </form>
    </div>
    <br/>
    <br/>
    <div class="cont-wrapper">
        <?php
            $res = mysqli_query($con, "select * from img");
            while($row = mysqli_fetch_assoc($res)){
        ?>
        <img src="Img/<?php echo $row['file'] ?>"/>
        <?php } ?>
    </div>
</body>
</html>