'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

// Actions
import { saveUser } from '../actions/actions'

// Components
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import FieldGroup from './field-group'

// Constants
import Constants from '../constants.js'

export default class SignUpForm extends React.Component {
	render () {
		return (
			<Form className="container" onSubmit={() => this.onSubmit()}>
				<h1>
					Join {Constants.PROJECT_NAME}!
				</h1>
				<Row>
					<FieldGroup
						ref="firstName"
						id="firstName"
						type="text"
						placeholder="First Name"
					/>
				</Row>
				<Row>
					<FieldGroup
						ref="lastName"
						id="lastName"
						type="text"
						placeholder="Last Name"
					/>
				</Row>
				<Row>
					<FieldGroup
						ref="organization"
						id="organization"
						type="text"
						placeholder="Organization"
					/>
				</Row>
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
						ref="comments"
						id="comments"
						as="textarea"
						placeholder="Comments"
					/>
				</Row>
				<Row>
					<Button className="btn-primary" type="submit">
						Email Us
					</Button>
				</Row>
			</Form>
		)
	}

	onSubmit () {
		const info = {
			firstName: ReactDOM.findDOMNode(this.refs.firstName).firstChild.value,
			lastName: ReactDOM.findDOMNode(this.refs.lastName).firstChild.value,
			organization: ReactDOM.findDOMNode(this.refs.organization).firstChild.value,
			email: ReactDOM.findDOMNode(this.refs.email).firstChild.value,
			comments: ReactDOM.findDOMNode(this.refs.comments).firstChild.value
		}

		saveUser(info)

		Backbone.history.navigate(Constants.LOG_IN_PAGE)
		Backbone.history.loadUrl(Constants.LOG_IN_PAGE)
	}
}
