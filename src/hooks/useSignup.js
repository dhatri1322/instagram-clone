import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';  // Import toast from react-toastify


const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (form, setErrors) => {
    setIsLoading(true);
    setError(null);

    try {
      // Make a POST request to the backend
      await axios.post('http://localhost:8080/api/signup', form, {
        headers: { 'Content-Type': 'application/json' }
      });

      // If the request is successful, navigate to the birthday page
      toast.success('Account created successfully!');
      navigate('/bday');

    } catch (error) {
      console.error('Signup error:', error);

      // Check if error has a response from the server
      if (error.response) {
        // Handle specific status codes
        if (error.response.status === 400) {
          toast.error(error.response.data.message || 'User already exists. Please try logging in.');
        } else if (error.response.status === 500) {
          toast.error('Internal server error. Please try again later.');
        } else {
          toast.error(error.response.data.message || 'An error occurred. Please try again.');
        }
      } else if (error.request) {
        toast.error('No response from the server. Please check your backend server.');
      } else {
        toast.error(error.message);
      }

      // Set the error state for debugging
      setError(error);
      if (setErrors) {
        // Optionally pass error details to setErrors if needed for form validation
        setErrors({ message: error.response?.data.message || error.message });
      }
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  return { signup, error, isLoading };
};

export default useSignup;
