import React, {Component} from 'react';

export default class Hero extends Component {
	render() {
		const hero = this.props.data,
			heroName = hero.localized_name,
			scrName = hero.name.replace('npc_dota_hero_', ''),
			src = 'http://cdn.dota2.com/apps/dota2/images/heroes/' + scrName + '_lg.png',
			heroAttr = hero.primary_attr.toLowerCase();

		const imageStyle = {
			width: 103,
			height: 57
		}
		return (
			<div className="hero">
				<img src={src} alt="" style={imageStyle}/>
				<span className={"icon-attr " + heroAttr}></span>
			</div>
		)
	}
}
