import React from 'react';
import {Thumbnail, Button} from 'react-bootstrap';

class Suggestion extends React.Compontent {
    render() {
        return (
            <div className = "suggestion - item">
            <Thumbnail src="/thumbnaildiv.png" alt="242x200">
            <h3>{this.props.data.suggestions-name}</h3>
            <p>{this.props.data.suggestions-descript}</p>
            <p>
                <Button bsStyle="primary">Button</Button>
                &nbsp;
                <Button bsStyle="default">Button</Button>
            </p>
                </Thumbnail></div>
        );
    }
}