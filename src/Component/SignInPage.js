import React from 'react';
import Page from '../Page';

class SignInPage extends React.Component {
    render() {
        const _content = [];
        _content.push (
            <div key = "test">Đăng nhập</div>
        )
        return ( 
        <div>
            {this.props.content};
            <Page content={_content}></Page>
              <form name="test" activekey="test" className="nav navbar-form navbar-right">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Account" aria-label="Account" />
                  <input type="text" className="form-control" placeholder="Password" aria-label="Password" />
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit" onClick={this.onClickHandle.bind(this)} onKeyUp={this.onKeyUpHandle.bind(this)}>
                      <i className="fa fa-signin"></i>
                    </button>
                  </div>
                </div>
              </form>
        </div>
        )
    }
}
export default SignInPage;