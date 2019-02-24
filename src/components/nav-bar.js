'use strict'

import _ from 'lodash'

import React from 'react'
import Backbone from 'backbone'
import PropTypes from 'prop-types'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// Constants
import Constants from '../constants'

export default class NavBar extends React.Component {
	render () {
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#">{Constants.PROJECT_NAME}</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link onClick={() => this.togglePage(Constants.LOG_IN_PAGE)}>Log In</Nav.Link>
					<Nav.Link onClick={() => this.togglePage(Constants.SIGN_UP_PAGE)}>Sign Up</Nav.Link>
				</Nav>
			</Navbar>
		)
	}

	togglePage (page) {
		if (!_.isEqual(page, this.props.page)) {
			Backbone.history.navigate(page)
			Backbone.history.loadUrl(page)
		}
	}
}

NavBar.propTypes = {
	page: PropTypes.string
}
