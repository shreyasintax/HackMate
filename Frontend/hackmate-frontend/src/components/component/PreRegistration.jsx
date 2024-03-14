import React, { useState } from 'react';

function PreRegistration() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/hackmate/v1/user/sendOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        // Handle success
        console.log('Email submitted successfully');
      } else {
        // Handle error
        console.error(response);
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PreRegistration;
