import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

class ProgressComponent extends React.Component {
	render() {
		return (
			<div className="progress--section">
				<img src={this.props.icon} alt={this.props.iconName} />
				<div className="progress--bars__container">
					<div className="progress--subtitle__container">
						<p className="progress--subtitle__apptitudes">
							{this.props.aptidude}
						</p>
						<p className="progress--subtitle__level">Level 1</p>
					</div>

					<ProgressBar
						className="progress--bar"
						variant="success"
						now={this.props.functionProgress}
					/>
				</div>
			</div>
		);
	}
}

export default ProgressComponent;
