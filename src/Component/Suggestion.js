import React from 'react';
import {Thumbnail, Button} from 'react-bootstrap';

class Suggestion extends React.Component {
    render() {
        return (
            <div className = "suggestion - item">
            <Thumbnail src="/thumbnaildiv.png" alt="242x200">
            <h3>{this.props.data.suggestions_name}</h3>
            <p>{this.props.data.suggestions_descript}</p>
            <p>
                <Button bsStyle="primary">Button</Button>
                &nbsp;
                <Button bsStyle="default">Button</Button>
            </p>
                </Thumbnail></div>
        );
    }
}


export default Suggestion;