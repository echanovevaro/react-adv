import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css';

export const FormikBasicPage = () => {
	interface formValues {
		firstName: string;
		lastName: string;
		email: string;
	}

	const validate = ({
		firstName,
		lastName,
		email,
	}: formValues) => {
		const errors: FormikErrors<formValues> = {};
		if (!firstName) {
			errors.firstName = 'Required';
		} else if (firstName.length >= 10) {
			errors.firstName = 'Must be 10 characters or less';
		}
		if (!lastName) {
			errors.lastName = 'Required';
		} else if (lastName.length >= 15) {
			errors.lastName = 'Must be 15 characters or less';
		}
		if (!email) {
			errors.email = 'Required';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
				values.email,
			)
		) {
			errors.email = 'Invalid email address';
		}

		return errors;
	};

	const {
		handleChange,
		values,
		handleSubmit,
		errors,
		touched,
		handleBlur,
	} = useFormik({
		initialValues: {
			firstName: 'Alvaro',
			lastName: 'Riaño',
			email: 'alvaro@gmail.com',
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validate,
	});

	return (
		<div>
			<h1>Formik Basic Tutorial</h1>
			<form onSubmit={handleSubmit} noValidate>
				<label htmlFor='firstName'>First Name</label>
				<input
					type='text'
					name='firstName'
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.firstName}
				/>

				{touched.firstName && errors.firstName && (
					<span>{errors.firstName}</span>
				)}

				<label htmlFor='lastName'>Last Name</label>
				<input
					type='text'
					name='lastName'
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.lastName}
				/>

				{touched.lastName && errors.lastName && (
					<span>{errors.lastName}</span>
				)}

				<label htmlFor='email'>Email Address</label>
				<input
					type='email'
					name='email'
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.email}
				/>

				{touched.email && errors.email && (
					<span>{errors.email}</span>
				)}

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
