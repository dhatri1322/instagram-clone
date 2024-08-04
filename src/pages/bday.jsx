import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Link, MenuItem, FormControl, Select, Stack } from '@mui/material';
import styled from '@mui/material/styles/styled';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer';

const InstagramLogo = styled(Box)({
  backgroundImage: 'url(/Assets/images/cupcake.png)',
  backgroundPosition: 'center',
  backgroundSize: '130px 84px',
  width: '144px',
  height: '96px',
  marginTop: '15px',
  backgroundRepeat: 'no-repeat',
  display: 'inline-block',
});

const FormContainer = styled(Box)({
  width: '310px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'white',
  border: '1px solid #dbdbdb',
  borderRadius: '2px',
  marginBottom: '12px',
  marginTop: 0,
  minHeight: '350px',
});

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
});

function Birthday() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(day && month && year);
  }, [day, month, year]);

  const handleNextClick = () => {
    if (isFormValid) {
      navigate('/home');
    }
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        px={2}
      >
        <FormContainer>
          <InstagramLogo />
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: '0.94rem',
              textAlign: 'center',
              mb: 1,
              mt: 1.3,
              fontWeight: 'bold',
            }}
          >
            Add Your Birthday
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.875rem',
              textAlign: 'center',
              mb: 2,
            }}
          >
            This won't be a part of your public profile.
          </Typography>
          <Stack direction="row" spacing={0.6} mb={2} width="80%">
            <FormControl sx={{ width: '111px' }}>
              <Select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                displayEmpty
                sx={{ height: '36px' }}
              >
                <MenuItem value="" disabled>
                  <Typography variant="body2" sx={{ color: grey[500], fontSize: '0.75rem' }}>
                    March
                  </Typography>
                </MenuItem>
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                  <MenuItem key={index} value={month}>
                    <Typography variant="body2" sx={{ color: grey[500], fontSize: '0.75rem' }}>
                      {month}
                    </Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: '60px' }}>
              <Select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                displayEmpty
                sx={{ height: '36px' }}
              >
                <MenuItem value="" disabled>
                  <Typography variant="body2" sx={{ color: grey[500], fontSize: '0.75rem' }}>
                    10
                  </Typography>
                </MenuItem>
                {[...Array(31).keys()].map((day) => (
                  <MenuItem key={day + 1} value={day + 1}>
                    <Typography variant="body2" sx={{ color: grey[500], fontSize: '0.75rem' }}>
                      {day + 1}
                    </Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: '80px' }}>
              <Select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                displayEmpty
                sx={{ height: '36px' }}
              >
                <MenuItem value="" disabled>
                  <Typography variant="body2" sx={{ color: grey[500], fontSize: '0.75rem' }}>
                    2022
                  </Typography>
                </MenuItem>
                {[...Array(100).keys()].reverse().map((year) => (
                  <MenuItem key={year + 1920} value={year + 1920}>
                    <Typography variant="body2" sx={{ color: grey[500], fontSize: '0.75rem' }}>
                      {year + 1920}
                    </Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.75rem',
              textAlign: 'center',
              mb: 2,
              color: grey[600],
            }}
          >
            You need to enter the date you were born.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.75rem',
              textAlign: 'center',
              mb: 2,
              color: grey[600],
            }}
          >
            Use your own birthday, even if this account is for a business, a pet, or something else.
          </Typography>
          <Button
            variant="contained"
            color="primary"
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
            onClick={handleNextClick}
          >
            Next
          </Button>
          <Link
            href="/signup"
            sx={{
              fontSize: '0.875rem',
              color: grey[600],
              textAlign: 'center',
              display: 'block',
              mt: 1,
            }}
          >
            Go back
          </Link>
        </FormContainer>
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
      </Box>
      <Footer />
    </>
  );
}

export default Birthday;
