import React, { Component } from 'react';
import './Login.css';

import UserProvider from '../../providers/UserProvider';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			showPassword: 'password',
			checkbox: false
		};

		this.onChange = this.onChange.bind(this);
		this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
		this.login = this.login.bind(this);

		if(this.currentUser()){
			this.props.history.push('/dashboard')
		}
	}


	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onChangeCheckbox = (e) => { this.setState({ checkbox: !this.state.checkbox }); this.changeShowPassword() };

	login(e) {
		e.preventDefault();
		const { email, password } = this.state;
		const userProvider = new UserProvider();
		userProvider.login(email, password)
			.then((e) => {
				this.props.history.push('/dashboard');
			})
			.catch((e) => {
				alert("Erro na autenticação! Login ou senha estão errados!");
			});

	}

	changeShowPassword() {
		if (this.state.showPassword === 'password') {
			this.setState({ showPassword: 'text' });
		} else {
			this.setState({ showPassword: 'password' });
		}
	}

	currentUser(){
		const userProvider = new UserProvider();
		return userProvider.currentUser();
	}

	render() {
		const { email, password, checkbox, showPassword } = this.state;

		return (
			<div className="container">
				<div className="card">
					<img src="./imgs/assets/logo.png" alt="" />
					<form className="form" onSubmit={this.login}>
						<label htmlFor="email" id="emailLabel">Email</label>
						<input type="email" name="email" id="email" placeholder="seunome@email.com" onChange={this.onChange} value={email} />
						<label htmlFor="password" id="passwordLabel">Password</label>
						<input type={showPassword} name="password" id="password" placeholder="Password" onChange={this.onChange} value={password} />
						<label className="checkbox-label">Mostrar a senha
							<input type="checkbox" defaultChecked={checkbox} onChange={this.onChangeCheckbox} />
							<span className="checkmark"></span>
						</label>
						<a href="#teste" className="problems">Problemas para acessar a conta?</a>
						<button type="submit" className="btn-acessar" >Acessar</button>
						<div className="ou-box">
							<div></div>
							<span>ou</span>
							<div></div>
						</div>
						<button type="button" className="btn-cadastrar">Cadastrar</button>
						<div className="links">
							<a href="#teste">Termos de uso</a> • <a href="#teste">Política de privacidade</a>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
