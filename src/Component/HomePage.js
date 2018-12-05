import React from 'react';
import Page from '../Page';
import { Carousel } from 'react-bootstrap';
class HomePage extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {content:[]};
    }
    buildContent() {
        let _contnent = [];

        _contnent.push(
            <Carousel>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="image/trang chu.jpg" />
                    <Carousel.Caption>
                        <h3>THANH XUÂN KHÔNG HỐI TIẾC</h3>
                        <p>Thanh xuân là những chuyến đi.Đừng bỏ rơi nó rồi lại than vãng vì không yêu nó.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="image/hinh-nen-4k-dep-nhat.jpg" />
                    <Carousel.Caption>
                        <h3>BỨC PHÁ CÙNG TRẢI NGHIỆM</h3>
                        <p>Hãy cùng người ta yêu đi khắp thế giới.Nơi ta có thể lưu giữ những hạnh phúc bên nhau.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="image/hinh-nen-macbook-4k-dep-22.jpg" />
                    <Carousel.Caption>
                        <h3>LƯU GIỮ TỪNG GÓC CỦA THẾ GIỚI</h3>
                        <p>Cùng nhau đi đến tận các ngóc ngách của thế giới. Lưu giữ từng khoảnh khắc của thế giới.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )

        return _contnent;
    }
    componentDidMount() {
        this.setState({content : this.buildContent()})
    }
    render() {

        return (
            <div>
                <Page content={this.state.content}></Page>

            </div>
        )
    }
}

export default HomePage;