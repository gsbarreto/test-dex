import React, { Component } from 'react'
import './Dashboard.css';
import Header from '../../components/Header/Header';
import Box from '../../components/Box/Box'
import UserProvider from '../../providers/UserProvider';
import ContentProvider from '../../providers/ContentProvider';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			foods: [],
			people: [],
			places: []
		};

		if (!this.currentUser()) {
			this.props.history.push('/');
		}

		this.getContent();


	}

	getContent() {
		const contentProvider = new ContentProvider();
		contentProvider.getAllFoods()
			.then(res => this.setState({ foods: res }));
		contentProvider.getAllPeople()
			.then(res => this.setState({ people: res }));
		contentProvider.getAllPlaces()
			.then(res => this.setState({ places: res }));

	}

	currentUser() {
		const userProvider = new UserProvider();
		return userProvider.currentUser();
	}

	render() {
		const { foods, people, places } = this.state;

		return (
			<div className="background">
				<Header />
				<section>
					<div className="container">
						<div className="section-header">
							<span>list of foods</span>
							<div className="gradient"></div>
							<div className="box-container">
								{
									(this.props.match.params.id === 'foods') ? (
										foods.map((food, index) => {
											return <Box name={food.name} url={food.link} key={index} />;
										})
									) : null

								}
								{
									(this.props.match.params.id === 'people') ? (
										people.map((person, index) => {
											return <Box name={person.name} url={person.link} key={index} />;
										})
									) : null

								}
								{
									(this.props.match.params.id === 'places') ? (
										places.map((place, index) => {
											return <Box name={place.name} url={place.link} key={index} />;
										})
									) : null

								}
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
