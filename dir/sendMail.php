<?php

    $email = $_POST['to'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $body = $message;

    $headers = array(
      'Authorization: Bearer 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',
      'Content-Type: application/json'
    );

    $data = array(
      "personalizations" => array(
        array(
            "to" => array(
                array(
                    "email" => $email,
                    "name" => $email
                )
            ),
            "cc" => array(
                array(
                    "email" =>"yared.toro@aviatur.com"
                ),
                array(
                    "email" =>"karen.caicedo@aviatur.com"
                )
            )
        )
      ),
      "from" => array(
        "email" => "noreply@aviatur.com.co","name"=>"Yared de AVIATUR"
      ),
      "subject" => $subject,
      "content" => array(
        array(
          "type" => "text/html",
          "value" => $body
        )
      )
    );

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.sendgrid.com/v3/mail/send");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec($ch);
    curl_close($ch);
?>
