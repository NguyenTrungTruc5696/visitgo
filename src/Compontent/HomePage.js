import React from 'react';
import Page from '../Page';

class HomePage extends React.Component {
    render() {
        const _content = [];
        _content.push (
            <div key = "test">Trang chủ</div>
        )
        return ( 
        <div>
            <Page content={_content}>

            </Page>
        </div>
        )
    }
}
export default HomePage;