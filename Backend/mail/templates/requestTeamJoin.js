const requestTemplate = (userId,teamId) => {
    return `<!DOCTYPE html>
      <html>
      
      <head>
          <meta charset="UTF-8">
          <title>Join Team Request Email</title>
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
      
              .cta {
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #FFD60A;
                  color: #000000;
                  text-decoration: none;
                  border-radius: 5px;
                  font-size: 16px;
                  font-weight: bold;
                  margin-top: 20px;
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
              <a href="http://localhost:5173/"><img class="logo" src="" alt="Your Logo"></a>
              <div class="message">Join Team Request Email</div>
              <div class="body">
                  <p>Dear Team Leader,</p>
                  <p>A user has requested to join your team on HackMate.</p>
                  <p>Please review their profile and decide whether to accept or reject their request.</p>
                  <p>Thank you!</p>
              </div>
              <div>
                  <a href="ACCEPT_LINK" class="cta">Accept</a>
                  <a href="REJECT_LINK" class="cta" style="background-color: #FF3333;">Reject</a>
              </div>
              <div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a href="mailto:info@hackmate.com">info@hackmate.com</a>. We are here to help!</div>
          </div>
      </body>
      
      </html>`;
};

module.exports = requestTemplate;
