import emailjs from '@emailjs/browser';

export const sendEmail = async ({ username, email, message }) => {
  //for test  env.
  const serviceID = 'service_1atpgmd';
  const templateI1D = 'template_wrfzxx6';
  const userID = 'lnCHV3fV8UOq4AorD';


  const templateParams = {
    username,
    email,
    message,
  };

  try {
    const response = await emailjs.send('service_1atpgmd', 'template_ya1w8ih', {
      to_name: "Ahmed Gawish",
      from_name: email,
      from_email: email,
      message: message
    }, "lnCHV3fV8UOq4AorD");
    return { success: true };
  } catch (error) {
    console.error('FAILED...', error);
    return { success: false, error };
  }
};
