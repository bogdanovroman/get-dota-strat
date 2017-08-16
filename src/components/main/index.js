import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import className from 'classnames';

class Main extends Component {
    render() {
        const {isLoading} = this.props.utils;
        let loadingClass = className({loader: true, 'active': isLoading})
        return (
            <div class="content bg-main uk-light uk-height-1-1" is uk-height-viewport>
                <div className={loadingClass}></div>
                <Header/>
                <div is class="uk-margin-large-top uk-margin-large-bottom" id="bottom">
                    <div className="uk-container uk-container-large">

                        <div is class="uk-grid-small uk-child-width-1-4@xl uk-child-width-1-3@l uk-child-width-1-2@m" uk-grid>
                            <div>
                                <div className="uk-card uk-card-default uk-card-small uk-card-body">
                                    <h3 className="uk-card-title">Small</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-small uk-card-body">
                                    <h3 className="uk-card-title">Small</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-small uk-card-body">
                                    <h3 className="uk-card-title">Small</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-small uk-card-body">
                                    <h3 className="uk-card-title">Small</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-small uk-card-body">
                                    <h3 className="uk-card-title">Small</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

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
