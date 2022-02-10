import { useFormik } from 'formik';

import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {
	const { handleSubmit, errors, touched, getFieldProps } =
		useFormik({
			initialValues: {
				firstName: 'Alvaro',
				lastName: 'Riaño',
				email: 'alvaro@gmail.com',
			},
			onSubmit: (values) => {
				console.log(values);
			},
			validationSchema: Yup.object({
				firstName: Yup.string()
					.required('Required')
					.min(2, 'Must be at least 2 characters')
					.max(10, 'Must be 10 characters or less'),
				lastName: Yup.string()
					.required('Required')
					.min(2, 'Must be at least 2 characters')
					.max(10, 'Must be 10 characters or less'),
				email: Yup.string()
					.required('Required')
					.email('Invalid email address'),
			}),
		});

	return (
		<div>
			<h1>Formik Yup</h1>
			<form onSubmit={handleSubmit} noValidate>
				<label htmlFor='firstName'>First Name</label>
				<input type='text' {...getFieldProps('firstName')} />

				{touched.firstName && errors.firstName && (
					<span>{errors.firstName}</span>
				)}

				<label htmlFor='lastName'>Last Name</label>
				<input type='text' {...getFieldProps('lastName')} />

				{touched.lastName && errors.lastName && (
					<span>{errors.lastName}</span>
				)}

				<label htmlFor='email'>Email Address</label>
				<input type='email' {...getFieldProps('email')} />

				{touched.email && errors.email && (
					<span>{errors.email}</span>
				)}

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
