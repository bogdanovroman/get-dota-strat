import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import Hero from './hero';
import className from 'classnames';
import _ from 'lodash';

import {getAllHeroes} from '../../api/get'

class Heroes extends Component {
	componentDidMount() {
		const {getAllHeroes} = this.props;
		getAllHeroes();
	}

	render() {

		const {utils, heroes} = this.props;

		const loadingClass = className({loader: true, 'active': utils.isLoading});

		const heroTemplate = _.map(heroes, (hero, index) => {
			return (
				<div key={index}>
					<Hero data={hero}/>
				</div>
			)
		})

		return (
			<div className="wrapper bg-main">
				<div className={loadingClass}></div>
				<Header/>
				<div className="content uk-padding-large uk-padding-remove-horizontal">
					<div className="uk-container uk-container-large">
						<div is class="uk-grid-small uk-flex-center heroes-grid" uk-grid>
							{heroTemplate}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {utils: state.utils, heroes: state.api.heroes};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAllHeroes: () => dispatch(getAllHeroes())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
