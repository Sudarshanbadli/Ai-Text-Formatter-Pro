<?php
// send_email.php

// Set content type to JSON
header('Content-Type: application/json');

try {
    // Check if form was submitted
    if ($_SERVER["REQUEST_METHOD"] != "POST") {
        echo json_encode(["status" => "error", "message" => "Invalid request method."]);
        exit;
    }
    
    // Get form data
    $name = isset($_POST["name"]) ? trim($_POST["name"]) : "";
    $email = isset($_POST["email"]) ? trim($_POST["email"]) : "";
    $subject = isset($_POST["subject"]) ? trim($_POST["subject"]) : "";
    $message = isset($_POST["message"]) ? trim($_POST["message"]) : "";
    
    // Log received data for debugging
    error_log("Form data received: " . print_r($_POST, true));
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($subject)) {
        echo json_encode(["status" => "error", "message" => "Please fill in all required fields."]);
        exit;
    }
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Please enter a valid email address."]);
        exit;
    }
    
    // Set your email address
    $to = "brainhacker7sb@gmail.com";
    
    // Create email headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    // Create email content
    $email_subject = "Contact Form: " . $subject;
    $email_body = "
    <html>
    <head>
        <title>Contact Form Submission</title>
    </head>
    <body>
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Subject:</strong> " . htmlspecialchars($subject) . "</p>
        <p><strong>Message:</strong></p>
        <p>" . nl2br(htmlspecialchars($message)) . "</p>
    </body>
    </html>
    ";
    
    // Try to send email
    $mail_sent = mail($to, $email_subject, $email_body, $headers);
    
    if ($mail_sent) {
        echo json_encode(["status" => "success", "message" => "Thank you for your message! We will get back to you soon."]);
    } else {
        error_log("Failed to send email. Check server mail configuration.");
        echo json_encode(["status" => "error", "message" => "Failed to send email. Please try again later."]);
    }
} catch (Exception $e) {
    error_log("Exception in send_email.php: " . $e->getMessage());
    echo json_encode(["status" => "error", "message" => "An unexpected error occurred. Please try again later."]);
}
?>