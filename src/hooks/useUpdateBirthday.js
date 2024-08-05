import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useUpdateBirthday = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const updateBirthday = async (userId, birthday) => {
    setIsLoading(true);
    setError(null);

    try {
      // Make a PUT request to update the user's birthday
      await axios.put(`http://localhost:8080/user/${userId}/birthday`, { birthday }, {
        headers: { 'Content-Type': 'application/json' }
      });

      // If the request is successful, navigate to the home page
      navigate('/home');
    } catch (error) {
      console.error('Update birthday error:', error);

      if (error.response) {
        alert(`Error: ${error.response.data.message || 'An error occurred. Please try again.'}`);
      } else if (error.request) {
        alert('No response from the server. Please check your backend server.');
      } else {
        alert(`Error: ${error.message}`);
      }

      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { updateBirthday, error, isLoading };
};

export default useUpdateBirthday;
