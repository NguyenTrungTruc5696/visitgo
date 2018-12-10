import React from 'react';
import {Thumbnail, Button} from 'react-bootstrap';

class Suggestion extends React.Component {
    render() {
        return (
            <div>
            <div className = "suggestion - item">
            <Thumbnail src="image/18-buc-anh-dep-khien-ban-muon-du-lich-Thai-Lan-ngay-lap-tuc-1-4.jpg" alt="242x200">
            <h3>{this.props.data.suggestions_name}</h3>
            <p>{this.props.data.suggestions_descript}</p>
            <p>
                <Button bsStyle="primary">Full Tour</Button>
                &nbsp;
                
                <Button bsStyle="default">Part Tour</Button>
            </p>
                </Thumbnail></div>

<div className = "suggestion - item">
<Thumbnail src="image/ve-may-bay-di-han-quoc-bao-nhieu-tien-5.jpg" alt="242x200">
<h3>{this.props.data.suggestions_name}</h3>
<p>{this.props.data.suggestions_descript}</p>
<p>
    <Button bsStyle="primary">Full Tour</Button>
    &nbsp;
    
    <Button bsStyle="default">Part Tour</Button>
</p>
    </Thumbnail></div></div>
        )
    }
}


export default Suggestion;