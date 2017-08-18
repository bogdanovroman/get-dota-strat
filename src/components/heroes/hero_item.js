import React, {Component} from 'react';
import {Link} from 'react-router';

export default class HeroItem extends Component {
    _handleClick = () => {
        this.props.onClick(this.props.data.id);
    }

	render() {
        console.log(process.env.NODE_ENV);
        const hero = this.props.data,
			scrName = hero.name.replace('npc_dota_hero_', ''),
			src = 'public/i/heroes/' + scrName + '_lg.png',
			heroAttr = hero.primary_attr.toLowerCase();

		return (
			<div className="hero">
                <Link to={'/heroes/' + hero.id}>
                    <img src={src} alt="" className=""/>
                    <span className={"icon-attr " + heroAttr}></span>
                </Link>
			</div>
		)
	}
}
