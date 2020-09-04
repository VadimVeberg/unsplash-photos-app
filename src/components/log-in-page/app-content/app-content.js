import React, {Component} from 'react';

import './app-content.scss';


class AppContent extends Component {
    componentDidMount() {
        this.props.handleLogin();
    }

    render () {
        return (
            <div className="content-field">
                <div className="content">
                    Welcome!
                    {console.log(this.props)}
                    {/* <button
                    onClick={this.props.handleLogin}
                    >Войти</button> */}
                </div>
            </div>
        )
    }
};

export default AppContent;