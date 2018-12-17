import React from 'react';
import Page from '../Component/Page';

class AboutPage extends React.Component {
    render() {
        const _content = [];
        _content.push (
            <div key = "test">Giới Thiệu</div>
        )
        return ( 
        <div>
            <Page content={_content}>

            </Page>
        </div>
        )
    }
}
export default AboutPage;