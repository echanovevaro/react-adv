import { Formik, Form } from 'formik';

import * as Yup from 'yup';
import {
	MyCheckbox,
	MySelect,
	MyTextInput,
} from '../components';
import '../styles/styles.css';

export const FormikAbstractation = () => {
	return (
		<div>
			<h1>Formik Abstractation</h1>
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
						<MyTextInput
							label='First Name'
							name='firstName'
							placeholder='Álvaro'
						/>
						{/*  
						<label htmlFor='firstName'>First Name</label>
						<Field name='firstName' type='text' />
						<ErrorMessage name='firstName' component='span' /> 
						*/}
						<MyTextInput
							label='Last Name'
							name='lastName'
							placeholder='Riaño'
						/>
						<MyTextInput
							label='Email'
							name='email'
							type='email'
							placeholder='email@example.com'
						/>

						<MySelect label='Job Type' name='jobType'>
							<option value=''>Pick Something</option>
							<option value='designer'>Designer</option>
							<option value='developer'>Developer</option>
							<option value='other'>Other</option>
						</MySelect>

						<MyCheckbox
							label='Terms & Description'
							name='terms'
						/>

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
