import smtplib
from email.message import EmailMessage
import os

def send_email(sender_email, sender_password, receiver_email, subject, body):
    msg = EmailMessage()
    msg.set_content(body)
    msg['Subject'] = subject
    msg['From'] = sender_email
    msg['To'] = receiver_email

    try:
        # Connect to Gmail's SMTP server on port 465 (SSL validation)
        print("Connecting to Gmail SMTP server...")
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        
        print("Logging in...")
        server.login(sender_email, sender_password)
        
        print("Sending email...")
        server.send_message(msg)
        
        server.quit()
        print("Success! Email sent successfully.")
    except smtplib.SMTPAuthenticationError:
        print("Error: Authentication failed. Please check your email and App Password.")
    except Exception as e:
        print(f"Error sending email: {e}")

if __name__ == "__main__":
    # IMPORTANT: Do not hardcode your actual password here if you are committing to GitHub!
    # It is recommended to use environment variables for sensitive information.
    # However, for testing locally, you can temporarily replace these with your actual info.
    
    SENDER = os.environ.get("GMAIL_ADDRESS", "your_email@gmail.com")
    PASSWORD = os.environ.get("GMAIL_PASSWORD", "your_16_char_app_password")
    RECEIVER = "receiver_email@example.com"
    
    # Optional: remove the 'if' block below if you directly replace the variables above
    if SENDER == "your_email@gmail.com":
        print("Please update the SENDER, PASSWORD, and RECEIVER variables before running!")
        exit(1)
    
    send_email(
        sender_email=SENDER,
        sender_password=PASSWORD,
        receiver_email=RECEIVER,
        subject="Test Email from Antigravity",
        body="Hello!\n\nThis is an automated email sent from a Python script. If you are reading this, your credentials work perfectly!\n\nCheers."
    )
