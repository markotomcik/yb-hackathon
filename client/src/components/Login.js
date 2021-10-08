import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

const handleSubmit = (e) => {
}

export const Login = (props) => {
  return (
    <div>
      <form method="post" action="/register">
        <input type="text" name="username" />
        <input type="text" name="password" />
        <Link to="/Login">
          <button Link type="submit" onClick={(event) => props.setUser(event)}>Submit!</button>
        </Link>
        {props.user}
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(actions.setUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
