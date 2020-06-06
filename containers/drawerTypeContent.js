import React, { Component, useState, version } from "react";
import { connect } from "react-redux";
import { Collapse, Drawer, List, Radio, Space } from 'antd';
const { Panel } = Collapse
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
class DrawerTypeContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            placement: 'left',
            typeOfPanel: ""
        }
    }

    componentDidMount() {

    }

    showDrawer = (item) => {
        this.setState({
            visible: true,
            typeOfPanel: item
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };


    callback(key) {
        console.log(key);
    }

    render() {

        const text = `A dog is a type of domesticated animal.
                        Known for its loyalty and faithfulness,
                        it can be found as a welcome guest in many households across the world.`;

        const { placement, visible } = this.state;
        return (
            <div className="baseClass">

            </div >
        )

    }
}

const mapStateToProps = state => {
    return {

    };
};


export default connect(
    mapStateToProps, {}
)(DrawerTypeContent);
