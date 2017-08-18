import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Wrapper from '../wrapper';

class Hero extends Component {
    render() {
        const {utils, id, heroes} = this.props;

        const heroData = _.find(heroes, hero => hero.id === Number(id));

        return (
            <Wrapper isLoading={utils.isLoading}>
                <div className="uk-card uk-card-body uk-card-default">
                    <p>{heroData.localized_name}</p>
                </div>

            </Wrapper>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        utils: state.utils,
        heroes: state.data.heroes,
        id: ownProps.params.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
