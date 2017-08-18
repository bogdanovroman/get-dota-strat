import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import className from 'classnames';

class Main extends Component {
    render() {
        const {isLoading} = this.props.utils;
        let loadingClass = className({loader: true, 'active': isLoading})

        return (
            <div className="wrapper bg-main">
                <div className={loadingClass}></div>
                <Header/>
                <div className="content uk-padding-large uk-padding-remove-horizontal">
                    <div className="uk-container uk-container-large">
                        Главная
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {utils: state.utils};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
