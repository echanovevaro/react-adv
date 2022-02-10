import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';
export const RegisterPage = () => {
	const {
		onChange,
		resetForm,
		isValidEmail,
		formData,
		name,
		email,
		password1,
		password2,
	} = useForm({
		name: '',
		email: '',
		password1: '',
		password2: '',
	});

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div>
			<h1>Register Page</h1>
			<form noValidate onSubmit={(e) => onSubmit(e)}>
				<input
					type='text'
					placeholder='Name'
					name='name'
					value={name}
					onChange={onChange}
					className={`${
						name.trim().length === 0 && 'has-error'
					}`}
				/>
				{name.trim().length === 0 && (
					<span>Name is required</span>
				)}
				<input
					type='email'
					name='email'
					placeholder='Email'
					value={email}
					onChange={onChange}
					className={`${!isValidEmail(email) && 'has-error'}`}
				/>
				{!isValidEmail(email) && (
					<span>Email no es válido</span>
				)}

				<input
					type='password'
					name='password1'
					placeholder='Password'
					value={password1}
					onChange={onChange}
				/>
				{password1 && password1.trim().length === 0 && (
					<span>password is required</span>
				)}
				{password1 &&
					password1.trim().length < 6 &&
					password1.trim().length > 0 && (
						<span>password must be at least 6 characters</span>
					)}
				<input
					type='password'
					name='password2'
					placeholder='Repeat Password'
					value={password2}
					onChange={onChange}
				/>
				{password2.trim().length <= 0 && (
					<span>this field is empty</span>
				)}
				{password2.trim().length > 0 &&
					password2 !== password1 && (
						<span>the password must be equal</span>
					)}
				<button type='submit'>Create</button>
				<button type='button' onClick={resetForm}>
					Reset
				</button>
			</form>
		</div>
	);
};
