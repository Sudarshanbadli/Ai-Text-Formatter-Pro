<!DOCTYPE html>
<html>
<head>
    <title>Server Test</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .success { color: green; }
        .error { color: red; }
        .info { color: blue; }
    </style>
</head>
<body>
    <h1>Server Configuration Test</h1>
    
    <h2>PHP Information</h2>
    <?php if (function_exists('phpinfo')): ?>
        <p class="info">PHP is working correctly.</p>
    <?php else: ?>
        <p class="error">PHP is not working.</p>
    <?php endif; ?>
    
    <h2>Mail Function Test</h2>
    <?php if (function_exists('mail')): ?>
        <p class="info">Mail function is available.</p>
        
        <h3>Mail Configuration</h3>
        <ul>
            <li>sendmail_path: <?php echo ini_get('sendmail_path') ?: 'Not set'; ?></li>
            <li>SMTP: <?php echo ini_get('SMTP') ?: 'Not set'; ?></li>
            <li>smtp_port: <?php echo ini_get('smtp_port') ?: 'Not set'; ?></li>
        </ul>
        
        <h3>Send Test Email</h3>
        <?php
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $to = "brainhacker7sb@gmail.com";
            $subject = "Test Email from Server Test";
            $message = "This is a test email sent from the server test page.";
            $headers = "From: webmaster@" . $_SERVER['SERVER_NAME'] . "\r\n";
            
            if (mail($to, $subject, $message, $headers)) {
                echo "<p class='success'>Test email sent successfully!</p>";
            } else {
                echo "<p class='error'>Failed to send test email.</p>";
            }
        }
        ?>
        <form method="post">
            <button type="submit">Send Test Email to brainhacker7sb@gmail.com</button>
        </form>
    <?php else: ?>
        <p class="error">Mail function is not available.</p>
    <?php endif; ?>
    
    <h2>File Permissions</h2>
    <?php
    $currentDir = __DIR__;
    if (is_writable($currentDir)) {
        echo "<p class='success'>Directory is writable.</p>";
    } else {
        echo "<p class='error'>Directory is not writable.</p>";
    }
    ?>
</body>
</html>