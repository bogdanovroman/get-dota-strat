import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header';
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
                    {hero.localized_name}
                </div>
            )
        })

        return (
            <div class="content bg-main" is uk-height-viewport>
                <div className={loadingClass}></div>
                <Header/>
                <div is class="uk-padding-large uk-padding-remove-horizontal" id="bottom">
                    <div className="uk-container uk-container-large">
                        {heroTemplate}
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
