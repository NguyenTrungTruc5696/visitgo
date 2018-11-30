import React from 'react';
import Page from './Page';
import Content from '../Content'
import Data from '../Data';
import Suggestion from './SuggestionPage';
import {Grid, Row, Col} from 'react-bootstrap';
import Nav from './Nav';

class SuggestionPage extends React.Component {
    constructor (props ){
        super (props);
        this.state = {
            content: []
        }
    }
    buildContent () {
        let _content =[];
        let data = Data.data;
        for(var i in data) {
            _content.push (
                <Col key={i} xs={6} md={4}>
                <Suggestion data={data[i]}></Suggestion>
                </Col>
            );
        }
 let _suggestionContent = [];
_suggestionContent.push(<Nav key="nav"></Nav>);
_suggestionContent.push(<Grid key="content"><Row key={i}>{_content}</Row></Grid>);
    }

    ComponentDidMount() {
        this.setState({
            content: this.buildContent()
        });
    }
    render() {
        
        return ( 
        <div className="suggestions_name">
           <Page _content = {this.state.content}></Page>
        </div>
        )
    }
}

export default SuggestionPage;