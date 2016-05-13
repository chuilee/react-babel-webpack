import React from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col, ListGroup, ListGroupItem, Well, Clearfix, Glyphicon} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import Navbar from '../Navbar/Navbar.jsx';

require('./App.scss');

// export default () => <h1>Hello World</h1>;

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSelect(selectedKey) {
  	console.log(selectedKey)
  }

  render() {

    return (
    	<div>
			  <Navbar />
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <Clearfix>
                <ListGroup>
                  <LinkContainer to={{pathname: '/name-rule'}}>
                    <ListGroupItem>命名规则</ListGroupItem>
                  </LinkContainer>
                  <LinkContainer to={{pathname: '/html'}}>
                    <ListGroupItem>HTML</ListGroupItem>
                  </LinkContainer>
                  <LinkContainer to={{pathname: '/stylesheet'}}>
                    <ListGroupItem>CSS</ListGroupItem>
                  </LinkContainer>
                  <LinkContainer to={{pathname: '/javascript'}}>
                    <ListGroupItem>JAVASCRIPT</ListGroupItem>
                  </LinkContainer>
                </ListGroup>
              </Clearfix>
            </Col>
            <Col xs={12} md={9}>
              <Well className="tips">
                坚持制定好的代码规范。<br />无论团队人数多少，代码应该同出一门。
              </Well>
              <h2>命名规则</h2>
              <h3>项目命名</h3>
              <div className="content">全部采用小写方式， 以下划线分隔。<br/>例：my_project_name</div>
            </Col>
          </Row>
        </Grid>
			  {this.props.children}

		  </div>
    );
  }
}

