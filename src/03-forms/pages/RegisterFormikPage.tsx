import * as Yup from 'yup';
import '../styles/styles.css';
import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>
			<Formik
				initialValues={{
					name: '',
					email: '',
					password1: '',
					password2: '',
				}}
				onSubmit={(values) => {
					console.log(values);
				}} //
				validationSchema={Yup.object({
					name: Yup.string()
						.required('Required')
						.min(2, 'Must be at least 2 characters')
						.max(10, 'Must be 10 characters or less'),
					email: Yup.string()
						.required('Required')
						.email('Invalid email address'),
					password1: Yup.string()
						.required('Required')
						.min(6, 'Must be at least 6 characters'),
					password2: Yup.string()
						.required('Required')

						.oneOf(
							[Yup.ref('password1')],
							'Passwords must match',
						),
				})}>
				{({ handleReset }) => (
					<Form>
						<MyTextInput
							label='Name'
							name='name'
							placeholder='Name'
						/>
						<MyTextInput
							label='email'
							name='email'
							type='email'
							placeholder='Email'
						/>
						<MyTextInput
							label='Password'
							name='password1'
							type='password'
							placeholder='*******'
						/>
						<MyTextInput
							label='Confirm Password'
							name='password2'
							type='password'
							placeholder='*******'
						/>

						<button type='submit'>Create</button>
						<button type='button' onClick={handleReset}>
							Reset Form
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
