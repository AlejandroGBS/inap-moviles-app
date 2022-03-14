import React from "react";

class LocationList extends React.Component {
    renderLocationElement(i) {
        return <LocationElement value={i} />;
    }
    render() {
        return (
            <select name='locationSelect'>
                {this.renderLocationElement('windows')}
                {this.renderLocationElement('unix')}
                {this.renderLocationElement('bsd')}
                {this.renderLocationElement('linux')}
            </select>
        );
    }
}

class LocationElement extends React.Component {
    constructor(props){
        super(props);
        this.stat = {
            value: null,
        };
    }
    render() {
        return (
            <option value={this.props.name}>{this.props.value}</option>
        );
    }
}

export default LocationList;