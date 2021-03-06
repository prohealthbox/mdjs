import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import TextField from '../common/TextField.jsx';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './login.css';

const textFieldLoginStyles = {
  color: '#CCC'
};

const textFieldInputStyle = {
  color: '#F5F5F5'
};

const LoginForm = ({ hidden, errors, onChange, login }) => {

  const formDisplay = hidden ?
    { display: 'none' }
    : { display: 'initial' };

  const errorTextDisplay = errors ?
    { display: 'initial' }
    : { display: 'none' };

  return (
    <form style={formDisplay} className="m-t">
      <div className={styles['login-container']}>
        <div className={styles['login-field-container']}>
          <div style={errorTextDisplay} className={styles['error-text']}>Invalid username or password</div>
          <TextField
            floatingLabelText="Username"
            inputStyle={textFieldInputStyle}
            name="email"
            type="text"
            fullWidth
            floatingLabelStyle={textFieldLoginStyles}
            onChange={onChange} />
          <TextField
            floatingLabelText="Password"
            inputStyle={textFieldInputStyle}
            name="password"
            type="password"
            fullWidth
            floatingLabelStyle={textFieldLoginStyles}
            onChange={onChange} />
        </div>
        <RaisedButton
          type="submit"
          label="Log In"
          fullWidth
          primary
          onClick={login}
          onSubmit={login} />
        <a href="#"><small>Forgot password?</small></a>
      </div>
      <p className="text-muted text-center"><small>Don't have an account?</small></p>
      <a className="btn btn-sm btn-white btn-block" href="#">Create an account</a>
    </form>
  );
};

LoginForm.propTypes = {
  hidden: PropTypes.bool.isRequired,
  errors: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

export default CSSModules(LoginForm, styles);
