import React from 'react';
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../app/common/form/TextInput';
import { connect } from 'react-redux';
import { registerUser, socialLogin } from './authActions';
import { combineValidators, isRequired } from "revalidate";
import SocialLogin from './SocialLogin';


const validate = combineValidators({
  displayName: isRequired('displayName'),
  email: isRequired('email'),
  password: isRequired('password')
});

const RegisterForm = ({ registerUser, handleSubmit, error, invalid, submitting, socialLogin }) => {
  return (
    <div>
      <Form size="large" onSubmit={handleSubmit(registerUser)}>
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
          />
          {error && <Label basic color="red" style={{ marginBottom: 10 }}>{error}</Label>}
          <Button disabled={invalid || submitting} fluid size="large" color="teal">
            Register
          </Button>
          <Divider horizontal>
              Or
          </Divider>
          <SocialLogin socialLogin={socialLogin} />
        </Segment>
      </Form>
    </div>
  );
};

export default connect(null, {
  registerUser,
  socialLogin
})(reduxForm({ form: 'registerForm', validate })(RegisterForm));