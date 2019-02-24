'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

// Actions
import { saveBankAccount } from '../actions/actions'

// Components
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import FieldGroup from './field-group'

// Constants
import Constants from '../constants.js'

export default class BankAccount extends React.Component {
	render () {
		return (
			<Form onSubmit={() => this.onSubmit()}>
				<h1>
					Account
				</h1>
				<Row className="col-xs-offset-3 col-xs-6">
					<FieldGroup
						ref="bankName"
						id="bankName"
						type="text"
						placeholder="Bank Name"
					/>
				</Row>
				<Row className="col-xs-offset-3 col-xs-6">
					<FieldGroup
						ref="accountNumber"
						id="accountNumber"
						type="text"
						placeholder="Account Number"
					/>
				</Row>
				<Row className="col-xs-offset-3 col-xs-6">
					<FieldGroup
						ref="routingNumber"
						id="routingNumber"
						type="text"
						placeholder="Routing Number"
					/>
				</Row>
				<Row className="col-xs-offset-3 col-xs-6">
					<FieldGroup
						ref="accountName"
						id="accountName"
						type="accountName"
						placeholder="Account Name"
					/>
				</Row>
				<Row className="col-xs-offset-3 col-xs-6">
					<Button className="btn-primary" type="submit">
						Save
					</Button>
					<Button className="col-xs-offset-1 btn-secondary" type="submit">
						Cancel
					</Button>
				</Row>
			</Form>
		)
	}

	onSubmit () {
		const info = {
			bankName: ReactDOM.findDOMNode(this.refs.bankName).firstChild.value,
			accountNumber: ReactDOM.findDOMNode(this.refs.accountNumber).firstChild.value,
			routingNumber: ReactDOM.findDOMNode(this.refs.routingNumber).firstChild.value,
			accountName: ReactDOM.findDOMNode(this.refs.accountName).firstChild.value
		}

		saveBankAccount(info)

		Backbone.history.loadUrl(Constants.DASHBOARD_PAGE)
	}
}
