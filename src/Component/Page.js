import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Content from '../Content';

class Page extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Content content = {this.props._content}>
                
                </Content>
                <Footer></Footer>
            </div>
        )
    }
}
export default Page;