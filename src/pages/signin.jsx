import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button, Divider, Link, styled } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import Footer from '../components/footer';
import Bg from '../iphone_with_profile.png';
import { useNavigate } from 'react-router-dom';
import Home from '../pages/Home'

//--------------Instagram logo styling--------------------
const InstagramLogo = styled(Box)({
  backgroundImage: 'url(/assets/images/insta.png)',
  backgroundPosition: '0px 0px',
  backgroundSize: '175px 51px',
  width: '175px',
  height: '51px',
  marginTop: '25px',
  backgroundRepeat: 'no-repeat',
  display: 'inline-block',
});

//--------------Background image styling-------------------
const BackgroundImage = styled(Box)({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
});

//---------Styled text field for consistent stylin---------------
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    height: '2.5rem',
    backgroundColor: '#fafafa',
    borderRadius: '2px',
  },
  '& .MuiInputBase-input': {
    padding: '0.5rem',
    fontSize: '0.8rem',
  },
  width: '95%',
  marginBottom: '1rem',
}));

//-----------------Styled box for form container--------------------
const FormContainer = styled(Box)({
  width: '310px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginLeft: 0
});

const PrimaryBox = styled(Box)({
    width: '310px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #dbdbdb',
    backgroundColor: 'white',
    borderRadius: '2px',
    margin: 'auto',
})

//---------Styled box for secondary section----------------
const SecondaryBox = styled(Box)({
  width: '310px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid #dbdbdb',
  backgroundColor: 'white',
  borderRadius: '2px',
  marginBottom: '16px',
  marginLeft:'34px',
  marginTop:'0.6rem'
});

function SignIn() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef(null);
  const [formHeight, setFormHeight] = useState(0);
  const navigate = useNavigate();

//----------------------CLIENT Validate form---------------------------
  useEffect(() => {
    if (emailAddress && password) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [emailAddress, password]);

  useLayoutEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.offsetHeight);
    }
  }, [formRef.current?.offsetHeight]);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/users/signin', { email: emailAddress, password });

      // Store token in local storage or handle it as needed
      localStorage.setItem('token', response.data.token);

      // Redirect to home page
      navigate(Home);
    } catch (error) {
      console.error('Sign-in error:', error);
      if (error.response) {
        if (error.response.status === 400) {
          // Invalid credentials
          setError('Incorrect email or password. Please check your credentials and try again.');
        } else if (error.response.status === 404) {
          // User does not exist
          setError('User not found. Please sign up to create an account.');
        } else {
          // General error message
          setError(error.response.data.message || 'An error occurred during sign-in.');
        }
      } else if (error.request) {
        setError('No response from the server. Please check your backend server.');
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <>
      <BackgroundImage />
      <Box
        display="flex"
        flexDirection="row"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        px={2}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          width="100%"
          maxWidth={900}
          sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        >
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              display: { xs: 'none', sm: 'flex' },
              height: `${formHeight}px`, 
              width: 'auto',
            }}
          >
            <img
              src={Bg}
              alt="iPhone"
              style={{ height: '100%', width: 'auto', objectFit: 'cover',marginRight:0 }}
            />
          </Box>
          
          {/* Form Container */}
          <FormContainer ref={formRef}>
            <PrimaryBox>
              <InstagramLogo />
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontSize: '0.94rem',
                  textAlign: 'center',
                  mb: 1,
                  mt: 2,
                  color: 'grey',
                  fontWeight: 'bold',
                }}
              >
                Sign in to see photos and videos from your friends.
              </Typography>
              <form style={{ width: '100%' }} onSubmit={handleSignIn}>
                <StyledTextField
                  variant="outlined"
                  placeholder="Phone number, username, or email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  error={!!error}
                  helperText={error && 'Please enter valid credentials'}
                />
                <StyledTextField
                  variant="outlined"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!error}
                  helperText={error && 'Please enter valid credentials'}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleSignIn}
                  sx={{
                    bgcolor: isFormValid ? 'rgb(0, 149, 246)' : '#75b6ff',
                    color: 'white',
                    width: '100%',
                    mb: 1,
                    textTransform: 'none',
                    fontSize: '0.875rem',
                    borderRadius: 1.5,
                    boxShadow: 'none',
                  }}
                  disabled={!isFormValid}
                >
                  Sign in
                </Button>
                <Divider sx={{ my: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '0.755rem',
                      textAlign: 'center',
                      color: 'grey',
                      fontWeight: 'bold',
                    }}
                  >
                    OR
                  </Typography>
                </Divider>
                {/* <Button
                  variant="contained"
                  color="primary"
                  startIcon={<FacebookIcon />}
                  sx={{
                    bgcolor: 'rgb(0, 149, 246)',
                    color: 'white',
                    width: '100%',
                    textTransform: 'none',
                    fontSize: '0.875rem',
                    borderRadius: 1.5,
                    boxShadow: 'none',
                    mb: 1,
                  }}
                >
                  Log in with Facebook
                </Button> */}
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.75rem',
                    textAlign: 'center',
                    mb: 2,
                  }}
                >
                  <Link href="#" sx={{ fontSize: '0.75rem' }}>Forgot password?</Link>
                </Typography>
              </form>
            </PrimaryBox>
            <SecondaryBox>
              <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                Don't have an account?{' '}
                <Link href="/signup" sx={{ fontSize: '0.875rem', fontWeight: 'bold' }}>
                  Sign up
                </Link>
              </Typography>
            </SecondaryBox>
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.875rem',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Get the app
            </Typography>
            <Box display="flex" justifyContent="center" mt={1}>
              <Link href="https://www.microsoft.com/store/apps" sx={{ mr: 1 }}>
                <img
                  src="/assets/images/Get_it_from_microsoft.png"
                  alt="Get it from Microsoft"
                  style={{ width: 'auto', height: 43.5 }}
                />
              </Link>
              <Link href="https://play.google.com/store/apps" sx={{ ml: 1 }}>
                <img
                  src="/assets/images/Get_it_from_google_play.png"
                  alt="Get it from Google Play"
                  style={{ width: 'auto', height: 43.5 }}
                />
              </Link>
            </Box>
          </FormContainer>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default SignIn;
