import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';

class Header extends Component {
    render() {
        const {isLogged, pic, name} = this.props.user;
        let headerRightTemplate = isLogged
            ? <div className="">
                <img className="uk-border-circle" src={pic.small} width="30" height="30"/>
            </div>
            : <Link to="/login" className="">
                <span is uk-icon="icon: user; ratio:1.2"></span>
            </Link>;
        return (
            <div is class="header uk-box-shadow-small uk-light bg-dark-transparent"
                 uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom">
                <div className="uk-container uk-container-large uk-height-1-1">
                    <div className="uk-flex uk-flex-between	uk-width-1-1 uk-height-1-1 uk-flex-middle">
                        <div>
                            <Link to="/" className="uk-button uk-button-text">Главная</Link>
                            <Link to="/new" className="uk-button uk-button-text uk-margin-left">Создать</Link>
                            <Link to="/heroes" className="uk-button uk-button-text uk-margin-left">Герои</Link>
                        </div>
                        {headerRightTemplate}
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
