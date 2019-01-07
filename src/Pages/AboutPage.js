import React from 'react';
import Page from '../Component/Page';
import { Carousel } from 'react-bootstrap';

class AboutPage extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {_content:[]};
    }
    buildContent() {
        let _contnent = [];

        _contnent.push(
            <Carousel key="about">
                <Carousel.Item>
                    <img width={2200} height={5} alt="2200x20" src="image/trang chu.jpg" />
                    <Carousel.Caption>
                        <h3>SPRING BAR HAS NO REGRETS</h3>
                        <p>Spring bars are trip.Do not abandon it and then complain again because you don't love it.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={2200} height={5} alt="2200x5" src="image/hinh-nen-4k-dep-nhat.jpg" />
                    <Carousel.Caption>
                        <h3>DISCOVER THE EXPERIENCE</h3>
                        <p>Let's go with people who love to travel around the world. Where we can keep the happiness together.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={2200} height={5} alt="2200x5" src="image/hinh-nen-macbook-4k-dep-22.jpg" />
                    <Carousel.Caption>
                        <h3>SAVE ANYWHERE IN THE WORLD</h3>
                        <p>Together go to the end of the corners of the world.Store every moment of the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )

        return _contnent;
    }
    componentDidMount() {
        this.setState({_content : this.buildContent()})
    }
    render() {
        const _content = [];
        _content.push (
            <div key = "test">Introduce</div>
        )
        return ( 
        <div>
         
            <Page content={this.state._content}>

            </Page>
        </div>
        )
    }
}
export default AboutPage;