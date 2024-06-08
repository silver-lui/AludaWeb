<?php
    $con = mysqli_connect("localhost", "root", "", "aludagoglichidze");

    if($con == false){
        die("Server Connection Error". mysqli_connect_error());
    }
?>