exports.contactUsOwnerEmail = (
    fullName,
    email,
    message,
) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>New Contact Us Submission</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
                border-radius: 10px;
                height: 100px;
                width: 200px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <div class="message">New Contact Us Submission</div>
            <div class="body">
                <p>Hello,</p>
                <p>You have received a new contact form submission:</p>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
                <p>Please take appropriate action and respond to the inquiry promptly.</p>
            </div>
            <div class="support">If you have any further questions or need immediate assistance, please feel free to reach
                out to the sender at <a href="mailto:${email}">${email}</a>.</div>
        </div>
    </body>
    
    </html>`
}
