'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import PropTypes from 'prop-types'

// Actions
import { logIn } from '../actions/actions'

// Components
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import FieldGroup from './field-group'

// Constants
import Constants from '../constants.js'

export default class LogInForm extends React.Component {
	constructor (props) {
		super(props)

		this.onSubmit = this.onSubmit.bind(this)
	}

	render () {
		return (
			<Form horizontal="true" className={this.props.className} onSubmit={this.onSubmit}>
				<img className="center" src="data:image/png;base64,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" />
				<h1 className="text-center">
					Project
				</h1>
				<Row className="col-xs-offset-3 col-xs-6">
					<FieldGroup
						ref="email"
						id="email"
						type="email"
						placeholder="Email"
					/>
				</Row>
				<Row className="col-xs-offset-3 col-xs-6">
					<FieldGroup
						ref="password"
						id="password"
						type="password"
						placeholder="Password"
					/>
				</Row>
				<Row className="col-xs-offset-3 col-xs-6 text-center">
					<Button className="btn-primary" type="submit">
						Log In
					</Button>
				</Row>
			</Form>
		)
	}

	onSubmit () {
		const email = ReactDOM.findDOMNode(this.refs.email).firstChild.value
		const password = ReactDOM.findDOMNode(this.refs.password).firstChild.value

		logIn(email, password)

		Backbone.history.navigate(Constants.DASHBOARD_PAGE)
		Backbone.history.loadUrl(Constants.DASHBOARD_PAGE)
	}
}

LogInForm.propTypes = {
	className: PropTypes.string
}
