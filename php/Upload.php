<?php
    include('dbconnection.php');
    if(isset($_POST['submit'])){
        $file = $_FILES['image']['name'];
        $tempname = $_Files['image']['tmp_name'];
        $folder = 'Img/'.@$file;

        $query = mysqli_query($con, "Insert into img (file) values ('$file')");

        if(move_uploaded_file($tempname, $folder))
            echo "<h2>File Uploaded Successfully</h2>";
        else echo "<h2>File Not Uploaded</h2>";
    }
?>