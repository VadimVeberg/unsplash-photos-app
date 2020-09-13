import React, {Component} from 'react';

import './app-content.scss';
import {Row, Col} from 'reactstrap';

class AppContent extends Component {
    constructor(props) {
        super();
        this.splitDataToColumns(props);
    }

    splitDataToColumns(props) {        
        const {sources} = props.feedData;
        this.leftColSources = sources.filter((item, i) => i % 2 === 0);
        this.rightColSources =  sources.filter((item, i) => i % 2 === 1);
    }

    render () {
        return (
            <div className="content-field">
                <div className="content">
                    <Row noGutters={true}>
                        <Col xl="6" lg="6" md="6" sm="6" xs="6">
                            {console.log(this.props)}
                            {/* {this.leftColSources.map(source => {
                            return <PhotoCard source={source.src} key={source.id}/>;
                            })} */}
                        </Col>
                        <Col xl="6" lg="6" md="6" sm="6" xs="6">
                            {/* {this.rightColSources.map(source => {
                            return <PhotoCard source={source.src} key={source.id}/>;
                            })} */}
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
};

export default AppContent;