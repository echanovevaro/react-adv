import { Formik, Field, Form, ErrorMessage } from 'formik';

import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
	return (
		<div>
			<h1>Formik Components</h1>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					terms: false,
					jobType: '',
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
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
					terms: Yup.boolean().oneOf(
						[true],
						'You must accept the terms and conditions',
					),

					jobType: Yup.string()
						.notOneOf(['other'], 'Esta opción no está disponible')
						.required('Required'),
				})}>
				{(formik) => (
					<Form>
						<label htmlFor='firstName'>First Name</label>
						<Field name='firstName' type='text' />
						<ErrorMessage name='firstName' component='span' />

						<label htmlFor='lastName'>First Name</label>
						<Field name='lastName' type='text' />
						<ErrorMessage name='lastName' component='span' />

						<label htmlFor='email'>Email</label>
						<Field name='email' type='text' />
						<ErrorMessage name='email' component='span' />

						<label htmlFor='jobType'>Job type</label>
						<Field name='jobType' as='select'>
							<option value=''>Pick Something</option>
							<option value='designer'>Designer</option>
							<option value='developer'>Developer</option>
							<option value='other'>Other</option>
						</Field>
						<ErrorMessage name='jobType' component='span' />

						<label>
							<Field name='terms' type='checkbox' />
							Terms and conditions
						</label>
						<ErrorMessage name='terms' component='span' />

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
