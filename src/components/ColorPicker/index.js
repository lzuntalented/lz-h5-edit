import React from 'react';
import { Tooltip } from 'antd';
import { SketchPicker } from 'react-color';

export default class ColorPciker extends React.Component {
    state = { color: '' }

    onColorChange = (color) => {
        const { hex } = color;
        this.props.onChange(hex);
    }

    renderTitle = () => {
        const { color } = this.props;
        return <SketchPicker color={color} onChangeComplete={this.onColorChange} />
    }

    render(){
        const { color } = this.props;
        const style = {
            background: color,
            width: '100%',
            height: 32,
            border: '1px solid #cacaca'
        }
        return (
            <Tooltip title={this.renderTitle} trigger="click">
                <div style={style} />
            </Tooltip>
        )
    }
}