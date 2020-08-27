<?php
    $Name = trim($_POST["Name"]);
    $Email = trim($_POST["Email"]);
    $Subject = trim($_POST["Subject"]);
    $Message = trim($_POST["Message"]);

    $recepient = "your mail";
    $WebSiteName = "Creativia";
    $pagetitle = "Заявка с сайта \"$WebSiteName\"/n";
    $message = "Name: $Name\nEmail: $Email\nSubject: $Subject\nMessage: $Message";

    $success = mail($recepient, $pagetitle, $message,"Content-type:text/plain;charset\"utf-8\"\nFrom:$recepient");
    echo $success;
?>
