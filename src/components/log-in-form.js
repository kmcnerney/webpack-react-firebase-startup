'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

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
	render () {
		return (
			<Form className="container" onSubmit={() => this.onSubmit()}>
				<Row>
					<FieldGroup
						ref="email"
						id="email"
						type="email"
						placeholder="Email"
					/>
				</Row>
				<Row>
					<FieldGroup
						ref="password"
						id="password"
						type="password"
						placeholder="Password"
					/>
				</Row>
				<Row>
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
