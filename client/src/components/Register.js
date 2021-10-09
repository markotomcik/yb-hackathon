import React, { useRef } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import TextField from '@mui/material/TextField';
import { Button, Card, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export const Login = (props) => {
  const refs = useRef(null)

  const handleSubmit = () => {
    let email = refs.current['email'].value;
    let password = refs.current['password'].value;
    let firstname = refs.current['firstname'].value;
    let lastname = refs.current['lastname'].value;
    let register = `{"email": "${email}","password":"${password}","firstname":"${firstname}","lastname":"${lastname}"}`;
    props.registerAction(JSON.parse(register));
  }

  return (
    <>
      <Card elevation={6} sx={{
        p: 4, display: "flex", flexDirection: "column", alignContent: "center", position: "absolute", top: "50%", left: "50%", transform: "translateY(-50%) translateX(-50%)"
      }}>
        <Typography sx={{ textAlign: 'center', fontSize: '2rem' }}> BSL - Mobil</Typography>
        <form ref={refs} >
          <TextField id="email" fullWidth label="Email" variant="outlined" sx={{ my: 1 }} />
          <TextField id="password" fullWidth label="Password" variant="outlined" sx={{ my: 1 }} />
          <TextField id="firstname" fullWidth label="First name" variant="outlined" sx={{ my: 1 }} />
          <TextField id="lastname" fullWidth label="Last name" variant="outlined" sx={{ my: 1 }} />
        </form>
        <Link to="/Login">
          <Button variant="contained" type="submit" onClick={(event) => handleSubmit(event)} fullWidth>Register!</Button>
        </Link>
        <Typography sx={{ textAlign: 'center', fontSize: '2rem' }}  >{props.user.email === "" ? "logged Out" : "logged In"}</Typography>
      </Card >
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  registerAction: user => dispatch(actions.registerAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
