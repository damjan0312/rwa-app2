import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { newAnimalRequest } from '../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// react-bootstrap
import { Row, Col} from 'react-bootstrap';

//css
import '../style/home.css';

class AnimalForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			species: '',
			scientificName: '',
			illnes: '',
			doctorID: 1,
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const newAnimal = {
			animalName: this.state.name,
			animalSpecies: this.state.species,
			animalScientificName: this.state.scientificName,
			animalStateDescription: this.state.illnes,
			animalPicture: 'http://izuum.com/noimage.jpg',
			doctorID: this.state.doctorID,
		};

		this.props.newAnimalRequest(newAnimal);
	}

	render() {
		return (
			<Row id="add-section">
				<Col xs={6}>
					<p className="h5 pt-5">
					</p>
				</Col>
				<Col xs={6}>
					<div className="d-flex justify-content-center pt-3 pr-5">
						<form onSubmit={this.onSubmit}>
							<h1> Add Animal to Our Community </h1>
							<div>
								<br />
								<input
									className="form-control"
									type="text"
									name="name"
									onChange={this.onChange}
									value={this.state.name}
									placeholder="Name"
								/>
							</div>
							<br />
							<div>
								<br />
								<input
									className="form-control"
									type="text"
									name="species"
									onChange={this.onChange}
									value={this.state.species}
									placeholder="Species"
								/>
							</div>
							<br />
							<div>
								<br />
								<input
									className="form-control"
									type="text"
									name="scientificName"
									onChange={this.onChange}
									value={this.state.scientificName}
									placeholder="Scientific Name"
								/>
							</div>
							<br />
							<div>
								<br />
								<textarea
									className="form-control"
									type="text"
									name="illnes"
									onChange={this.onChange}
									value={this.state.illnes}
									placeholder="Illnes"
								/>
							</div>
							<br />
							<div>
								<label>Doctor:</label>
								<select 
								name="doctorID" 
								class="form-control"
								onChange={this.onChange}
								>
									<option value={1}>Thomas Sargint</option>
									<option value={2}>Angelique Fost</option>
									<option value={3}>Casar Stivens</option>
									<option value={4}>Mack Bernhardt</option>
								</select>
							</div>

							{/*    <input type="submit" className="btn btn-outline-primary" value="check"/> */}
							<div className="d-flex justify-content-center m-3">
								<button
									style={{ width: '20rem' }}
									className="btn btn-lg btn-success"
									onClick={() => this.onSubmit}
								>
									Add Animal To Our System
								</button>
							</div>
						</form>
					</div>
				</Col>
			</Row>
		);
	}
}

AnimalForm.propTypes = {
	newAnimalRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ newAnimalRequest }, dispatch);

export default connect(
	null,
	mapDispatchToProps
)(AnimalForm);
