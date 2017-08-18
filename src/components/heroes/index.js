import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import data from '../../api/heroes_data.json';

import Wrapper from '../wrapper';
import HeroItem from './hero_item';

import {setHeroesData} from '../../actions/data';

class Heroes extends Component {

	componentDidMount() {
		this.props.setHeroesData(data);
	}

	render() {
		const {utils, heroes} = this.props;

		const heroTemplate = _.map(heroes, (hero, index) => {
			return (<HeroItem data={hero} key={index}/>)
		})

		return (
			<Wrapper isLoading={utils.isLoading}>
				<div className="heroes-grid">
					{heroTemplate}
				</div>
			</Wrapper>
		)
	}
}

const mapStateToProps = (state) => {
	return {utils: state.utils, heroes: state.data.heroes};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setHeroesData: (data) => dispatch(setHeroesData(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
