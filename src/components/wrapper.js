import React, {Component} from 'react';
import Header from './header';
import className from 'classnames';

export default class Wrapper extends Component {
	render() {
		const loadingClass = className({loader: true, 'active': this.props.isLoading});
		return (
			<div className="wrapper bg-main">
				<div className={loadingClass}></div>
				<Header/>
				<div className="content uk-padding uk-padding-remove-horizontal">
					<div className="uk-container uk-container-large">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}
