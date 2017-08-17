import React, {Component} from 'react';

export default class HeroItem extends Component {
    _handleClick = () => {
        this.props.onClick(this.props.data.id);
    }

	render() {
		const hero = this.props.data,
			scrName = hero.name.replace('npc_dota_hero_', ''),
			src = 'public/i/heroes/' + scrName + '_lg.png',
			heroAttr = hero.primary_attr.toLowerCase();

		const imageStyle = {
			width: 103,
			height: 57
		}

		return (
			<div className="hero" onClick={this._handleClick}>
				<img src={src} alt="" style={imageStyle}/>
				<span className={"icon-attr " + heroAttr}></span>
			</div>
		)
	}
}
