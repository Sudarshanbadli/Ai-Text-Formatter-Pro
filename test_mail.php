<?php
// test_mail.php

// Test if mail function is available
if (function_exists('mail')) {
    echo "Mail function is available.<br>";
    
    // Test sending a simple email
    $to = "brainhacker7sb@gmail.com";
    $subject = "Test Email from PHP";
    $message = "This is a test email to check if the mail function works.";
    $headers = "From: webmaster@" . $_SERVER['SERVER_NAME'] . "\r\n";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Test email sent successfully.";
    } else {
        echo "Failed to send test email. Check your server's mail configuration.";
    }
} else {
    echo "Mail function is not available on this server.";
}

// Show PHP info related to mail
echo "<br><br>Mail configuration:<br>";
echo "sendmail_path: " . (ini_get('sendmail_path') ?: 'Not set') . "<br>";
echo "SMTP: " . ini_get('SMTP') . "<br>";
echo "smtp_port: " . ini_get('smtp_port') . "<br>";
?>