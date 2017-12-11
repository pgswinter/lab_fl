import React from 'react'
import { Link } from 'react-router-dom';
import { withFormik, Field, Form } from 'formik';
import yup from 'yup';
import classnames from 'classnames';

const RegisterForm = ({
	values,
	errors,
	touched,
	handleChange,
	handleBlur,
	handleSubmit,
	isSubmitting,
	isValid
})=>{
	<div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <div>

                <h1 className="logo-name"></h1>

            </div>
            <h3>Register to Flynk</h3>
            <p>Create account to see it in action.</p>
            <form className="m-t" role="form" onSubmit={this.onSubmit}>
                <div className={classnames('form-group',{'has-error':errors.username})}>
                    <Field
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="username"
                        placeholder="Username ..."
                      />
                    {errors.username && <span className="help-block">{errors.username}</span>}
                </div>
                <div className={classnames('form-group',{'has-error':errors.email})}>
                    <Field 
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Typing your Email ..."
                        required=""/>
                    {errors.email && <span className="help-block">{errors.email}</span>}
                </div>
                <div className={classnames('form-group',{'has-error':errors.password})}>
                    <Field type="password" 
                            className="form-control"
                            placeholder="Typing your Password ..."
                            name="password"
                            required=""/>
                    {errors.password && <span className="help-block">{errors.password}</span>}
                </div>
                <div className={classnames('form-group',{'has-error':errors.passwordConfirmation})}>
                    <Field type="password" 
                            className="form-control"
                            placeholder="Re-typing your Password ..."
                            name="passwordConfirmation"
                            required=""/>
                    {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
                </div>
                <div className={classnames('form-group',{'has-error':errors.firstname})}>
                    <Field type="text" 
                            className="form-control"
                            placeholder="Typing your Firstname ..."
                            name="firstname"
                            required=""/>
                    {errors.firstname && <span className="help-block">{errors.firstname}</span>}
                </div>
                <div className={classnames('form-group',{'has-error':errors.lastname})}>
                    <Field type="text" 
                            className="form-control"
                            placeholder="Typing your Lastname ..."
                            name="lastname"
                            required=""/>
                    {errors.lastname && <span className="help-block">{errors.lastname}</span>}
                </div>
                <div className={classnames('form-group',{'has-error':errors.mobile})}>
                    <Field type="text" 
                            className="form-control"
                            placeholder="Typing your Mobile ..."
                            name="mobile"
                            required=""/>
                    {errors.mobile && <span className="help-block">{errors.mobile}</span>}
                </div>
                <div className={classnames('form-group',{'has-error':errors.role})}>
                    <select 
                        name="role"
                        className="form-control m-b">
                        <option>Select you Role ...</option>
                        <option value="Property Admin">Property Admin</option>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Partner">Partner</option>
                    </select>
                    {errors.role && <span className="help-block">{errors.role}</span>}
                </div>

                <button 
                    type="submit" 
                    className="btn btn-primary block full-width m-b" >
                Register
                </button>

                <p className="text-muted text-center"><small>Already have an account?</small></p>
                <div className="btn btn-sm btn-white btn-block">
                    <Link to="/signin">Login</Link>
                </div>
            </form>
        </div>
    </div>
}

const registerSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  mobile: yup.string().required(),
  role: yup.string().required()
});

export default withFormik({
	mapPropsToValues: props => ({
		username: '',
		email: '',
		password: '',
		firstname: '',
		lastname: '',
		mobile: '',
		role: '',
	}),
	validationSchema: registerSchema,
	handleSubmit: (values, {props, setSubmitting, setErrors}) => {}

})(RegisterForm)