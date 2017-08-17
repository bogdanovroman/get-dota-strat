import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import HeroItem from './hero_item';
import className from 'classnames';
import _ from 'lodash';

import {getAllHeroes} from '../../api/get'

class Heroes extends Component {
    _handleHeroItemClick = (hero) => {
        console.log(hero);
    }

    componentDidMount() {
        const {getAllHeroes, heroes} = this.props;
        if (heroes.length === 0) getAllHeroes();
    }

    render() {

        const {utils, heroes} = this.props;

        const loadingClass = className({loader: true, 'active': utils.isLoading});

        const heroTemplate = _.map(heroes, (hero, index) => {
            return (
                <div key={index}>
                    <HeroItem data={hero} onClick={this._handleHeroItemClick}/>
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
    return {
        utils: state.utils,
        heroes: state.api.heroes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllHeroes: () => dispatch(getAllHeroes())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
