import React from "react";
import * as yup from "yup";
import content from '../static/index';
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://portfolio-website-dujules23.vercel.app/">
        Durrell Jules Apps
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const schema = yup.object().shape({
  username: yup.string().required("User Name is Required"),
  password: yup.string().required("Not a Valid Password").min(5)
});

function LoginForm (props) {

  const { register, reset, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    reset();
    console.log(data)
  }

  return(
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Typography component="h1" variant="h5">
          Practice Time!
          Get ready for a fun practice session!
          </Typography>
          <Typography component="h2" variant="h4">Sign In</Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{mt:1}}>
            {content.inputs.map((input, key) => {
              return(
              <Box key={key}>
                  <TextField
                  autoFocus
                  margin="normal"
                  required
                  fullWidth
                  label={input.name}
                  name={input.name} 
                  className="input" 
                  type={input.type}
                  {...register(`${input.name}`, {required: true})}
                  />
              <p>{errors[input.name]?.message}</p>
              </Box>
              );
            })}
            <Button 
            type="submit" 
            fullWidth variant="contained" 
            sx={{ mt: 3, mb: 2 }}
            >
            Submit
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            </Box> 
          </Box>
          <Copyright sx={{ mt: 8, mb: 4}} />
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;