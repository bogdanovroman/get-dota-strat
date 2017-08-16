import React, {Component} from 'react';


export default class Editable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue,
            classNames: props.classNames,
            isEditing: false
        };
    }

    handleValueChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleValueClick = () => {
        this.setState({
            isEditing: true
        }, () => {
            this.input.focus();
            this.input.select();
        })
    }

    handleKeyPress = (event) => {
        const {onStopEditing} = this.props;
        if (event.key === 'Enter') this.setState({
            isEditing: false
        }, onStopEditing(this.input.value));
    }

    handleBlur = () => {
        const {onStopEditing} = this.props;
        this.setState({
            isEditing: false
        }, onStopEditing(this.input.value));
    }

    render() {
        let editableTemplate = this.state.isEditing ?
            <input
                type="text"
                ref={input => this.input = input}
                value={this.state.value}
                className="uk-input uk-form-blank"
                onChange={this.handleValueChange}
                onBlur={this.handleBlur}
                onKeyPress={this.handleKeyPress}
            /> :
            <h4
                className={this.state.classNames}
                onClick={this.handleValueClick}
            >{this.state.value}</h4>;
        return (
            <div className="editable">
                {editableTemplate}
            </div>
        )
    }
}

