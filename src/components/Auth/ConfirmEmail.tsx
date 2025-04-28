import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const ConfirmEmail: React.FC = () => {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const location = useLocation();

  useEffect(() => {
    // Get the token from the URL
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    
    if (token) {
      // Call the API to verify the email
      axios
        .post('/api/confirm-email', { token })
        .then((response) => {
          // Handle success
          setIsVerified(true);
        })
        .catch((error) => {
          // Handle error
          setErrorMessage('Error confirming email. Please try again later.');
          setIsVerified(false);
        });
    } else {
      setErrorMessage('No token found in the URL.');
    }
  }, [location]);

  const handleRedirect = () => {
    // Redirect the user to login page or home page after email confirmation
    navigate('/login'); // Use navigate instead of history.push
  };

  return (
    <div className="confirmation-container">
      {isVerified === null ? (
        <p>Verifying your email...</p>
      ) : isVerified ? (
        <div>
          <h2>Email successfully confirmed!</h2>
          <button onClick={handleRedirect}>Go to Login</button>
        </div>
      ) : (
        <div>
          <h2>Email confirmation failed</h2>
          <p>{errorMessage}</p>
          <button onClick={handleRedirect}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default ConfirmEmail;
