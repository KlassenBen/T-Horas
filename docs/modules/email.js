class Email {
  constructor() {
    console.log("email active");
  }

  // FIXME add link to template
  async _sendEmail(mailTo, replyTo, name, message) {
    // const serviceID = 'YOUR_SERVICE_ID';
    // const templateID = 'YOUR_TEMPLATE_ID';
    // const userID = 'YOUR_USER_ID';
    const serviceID = "service_6x8djwo";
    const templateID = "template_0os2es7";
    const userID = "OF0WkI8He575rSuOy";
    const templateParams = {
      send_to: mailTo,
      customer_name: name,
      reply_to: replyTo,
      body: message,
      from_name: "T Horas",
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceID,
            template_id: templateID,
            user_id: userID,
            template_params: templateParams,
          }),
        }
      );

      if (response.ok) {
        console.log("Email sent successfully!");
        return "success";
      } else {
        const errorData = await response.json();
        console.error("Failed to send email:", errorData);
        return "error";
      }
    } catch (error) {
      console.error("Error:", error);
      return "error";
    }
  }
}

export default new Email();
