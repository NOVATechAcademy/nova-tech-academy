import React from 'react';
 // Send email via EmailJS
//  await emailjs.send(
//   'novaleadingtech', // Replace with your EmailJS Service ID
//   'template_lr0v7id', // Replace with your EmailJS Template ID
//   {
//     pdf_file: pdfBase64, // Matches the attachment placeholder
//     firstName: formData.firstName,
//     lastName: formData.lastName,
//     email: formData.email,
//   },
//   'jnkxiSDK6lXbN2X26' // Replace with your EmailJS Public Key
// );


// Contact: 
// .send(
//   'novaleadingtech', // Replace with your EmailJS service ID
//   'template_4aaj0uq', // Replace with your EmailJS template ID
//   formData,
//   'jnkxiSDK6lXbN2X26' // Replace with your EmailJS public key

const Programs: React.FC = () => {
  return (
    <div>
      <h1>Our Programs</h1>
      <p>We offer a range of programs to help you excel in your tech journey...</p>
    </div>
  );
};

export default Programs;
