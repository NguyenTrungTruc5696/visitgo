import React from 'react';
import {Thumbnail, Button} from 'react-bootstrap';

class Suggestion extends React.Component {
    render() {
        return (
            <div>
            <div className="suggestion-item">
            <Thumbnail src={this.props.data.img} alt="242x200">
            <h3>{this.props.data.suggestions_name}</h3>
            <p>{this.props.data.suggestions_descript}</p>
            <p>
                <Button bsStyle="primary">Full Tour</Button>
                &nbsp;
                
                <Button bsStyle="default">Part Tour</Button>
            </p>
                </Thumbnail></div>
                </div>
        )
    }
}


export default Suggestion;