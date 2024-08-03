import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Footer from '../components/footer'; // Ensure correct casing
import FacebookIcon from '@mui/icons-material/Facebook';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

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
  marginBottom: '2px',
}));

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


function Signup() {
  const [form, setForm] = useState({
    email: '',
    fullName: '',
    username: '',
    password: '',
    showPassword: false,
  });

  const [errors, setErrors] = useState({
    email: '',
    fullName: '',
    username: '',
    password: '',
  });

  const handleChange = (prop) => (event) => {
    const value = event.target.value;
    setForm({ ...form, [prop]: value });

    // Validation
    switch (prop) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^\d{10}$/;
        if (!emailRegex.test(value) && !mobileRegex.test(value)) {
          setErrors({ ...errors, email: 'Invalid email or mobile number' });
        } else {
          setErrors({ ...errors, email: '' });
        }
        break;
      case 'fullName':
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(value)) {
          setErrors({ ...errors, fullName: 'Name should only contain letters and spaces' });
        } else {
          setErrors({ ...errors, fullName: '' });
        }
        break;
      case 'username':
        const usernameRegex = /^[a-zA-Z0-9_.-]+$/;
        if (!usernameRegex.test(value)) {
          setErrors({ ...errors, username: 'Username can only contain letters, numbers, underscores, and periods' });
        } else {
          setErrors({ ...errors, username: '' });
        }
        break;
      case 'password':
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(value)) {
          setErrors({ ...errors, password: 'Password must be at least 8 characters long and contain at least one letter and one number' });
        } else {
          setErrors({ ...errors, password: '' });
        }
        break;
      default:
        break;
    }
  };

  const handleClickShowPassword = () => {
    setForm({ ...form, showPassword: !form.showPassword });
  };

  const isFormValid = () => {
    return form.email && form.fullName && form.username && form.password &&
      !errors.email && !errors.fullName && !errors.username && !errors.password;
  };

  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
  }
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
        sx={{ bgcolor: 'background.paper' }}
      >
        <Box
          width={310}
          p={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{
            border: '1px solid #dbdbdb',
            bgcolor: 'white',
          }}
        >
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
            Sign up to see photos and videos <br /> from your friends.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FacebookIcon />}
            sx={{
              bgcolor: 'rgb(0, 149, 246)',
              color: 'white',
              width: '94%',
              mt: 1.3,
              mb: 0.5,
              textTransform: 'none',
              fontSize: '0.875rem',
              borderRadius: 1.5,
              boxShadow: 'none',
            }}
          >
            <Typography
              variant="body2"
              fontSize={13}
              sx={{ fontWeight: 'bold' }}
            >
              Log in with Facebook
            </Typography>
          </Button>
          <Divider sx={{ width: '100%', my: 1 }}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontSize: '0.755rem',
                textAlign: 'center',
                mb: 0.7,
                mt: 1.4,
                color: 'grey',
                fontWeight: 'bold',
              }}
            >
              OR
            </Typography>
          </Divider>
          <Stack spacing={0.6} width="100%" alignItems="center">
            <StyledTextField
              variant="outlined"
              margin="dense"
              fullWidth
              placeholder="Mobile number or email"
              value={form.email}
              onChange={handleChange('email')}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{ style: { fontSize: '0.6rem' } }}
            />
            <StyledTextField
              variant="outlined"
              margin="dense"
              fullWidth
              placeholder="Full name"
              value={form.fullName}
              onChange={handleChange('fullName')}
              error={!!errors.fullName}
              helperText={errors.fullName}
              InputProps={{ style: { fontSize: '0.6rem' } }}
            />
            <StyledTextField
              variant="outlined"
              margin="dense"
              fullWidth
              placeholder="Username"
              value={form.username}
              onChange={handleChange('username')}
              error={!!errors.username}
              helperText={errors.username}
              InputProps={{ style: { fontSize: '0.6rem' } }}
            />
            <StyledTextField
              variant="outlined"
              margin="dense"
              fullWidth
              placeholder="Password"
              type={form.showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange('password')}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                style: { fontSize: '0.6rem' },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {form.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            sx={{ mt: 2, fontSize: '0.75rem', textAlign: 'center' }}
          >
            People who use our service may have uploaded your contact information
            to Instagram. <Link href="#" sx={{ fontSize: '0.75rem' }}>Learn More</Link>
          </Typography>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            sx={{ fontSize: '0.75rem', textAlign: 'center' }}
          >
            By signing up, you agree to our <Link href="#" sx={{ fontSize: '0.75rem' }}>Terms</Link>,
            <Link href="#" sx={{ fontSize: '0.75rem' }}>Privacy Policy</Link> and
            <Link href="#" sx={{ fontSize: '0.75rem' }}>Cookies Policy</Link>.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
                bgcolor: isFormValid() ? 'rgb(0, 149, 246)' : '#75b6ff',
                color: 'white',
                width: '94%',
                mt: 1.3,
                mb: 0.5,
                textTransform: 'none',
                fontSize: '0.875rem',
                borderRadius: 1.5,
                boxShadow: 'none',
              }}
            disabled={!isFormValid()}
          >
            Sign Up
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={1}
          p={2}
          width={310}
          height={33}
          sx={{ bgcolor: 'white', border: '1px solid #dbdbdb' }}
        >
        <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
            Have an account?{' '}
            <Link href="#" onClick={handleSignInClick} sx={{ fontSize: '0.875rem' }}>
              Log in
            </Link>
          </Typography>
        </Box>
        <Box
          width={280}
          p={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={1}
          sx={{ border: 'none', bgcolor: 'white' }}
        >
          <Typography
            variant="body2"
            sx={{ fontSize: '0.8rem', color: '#262626', fontWeight: 'bold' }}
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
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Signup;
