import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Field, Form } from 'formik';
import yup from 'yup';
import classnames from 'classnames';

const LoginForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  isValid
}) => (
  <div className="middle-box text-center loginscreen animated fadeInDown">
    <div>
      <div>
        <h1 className="logo-name">F</h1>
      </div>
      <h3>Welcome to Flynk</h3>
      <p>
        Perfectly designed and precisely prepared admin theme with over 50 pages
        with extra new web app views.
      </p>
      <p>Login in. To see it in action.</p>
      <Form className="m-t" role="form">
        <div
          className={classnames('form-group', {
            'has-error': errors.username
          })}
        >
          <Field
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
          />
          {touched.username &&
            errors.username && (
              <span className="help-block">{errors.username}</span>
            )}
        </div>
        <div
          className={classnames('form-group', {
            'has-error': errors.password
          })}
        />
        <Field
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
        />
        {touched.password &&
          errors.password && (
            <span className="help-block">{errors.password}</span>
          )}

        <div className="form-group">
          <button
            className="btn btn-primary btn-lg"
            disabled={isSubmitting || isValid}
          >
            Login
          </button>
        </div>
        <a href="#">
          <small>Forgot password?</small>
        </a>
        <p className="text-muted text-center">
          <small>Do not have an account?</small>
        </p>
        <div className="btn btn-sm btn-white btn-block">
          <Link to="/signup">Create an account</Link>
        </div>
      </Form>
      <p className="m-t">
        <small>Inspinia we app framework base on Bootstrap 3 © 2014</small>
      </p>
    </div>
  </div>
);

const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
});

export default withFormik({
  mapPropsToValues: props => ({ username: '', password: '' }),
  validationSchema: loginSchema,
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {}
})(LoginForm);
