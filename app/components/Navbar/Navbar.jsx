import React from 'react';
import {Button, Pagination, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router';
import NavLink from '../NavLink/NavLink.jsx';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

require('./Navbar.scss');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSelect(selectedKey) {
    console.log(selectedKey)
  }

  render() {
    return (
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/home'>前端开发文档</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{ pathname: "/repos/reactjs/react-router" }}>
                <NavItem eventKey={1} href="#">前端规范</NavItem>
              </LinkContainer>
              <LinkContainer to={{ pathname: "/todo" }}>
                <NavItem eventKey={2} href="#">Todo Example</NavItem>
              </LinkContainer>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={{keycode:3.1}}  onSelect={ this.handleSelect }>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <LinkContainer to={{ pathname: '/login' }}>
                <NavItem eventKey={2}>登录</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

