'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'

export default class FieldGroup extends React.Component {
	render () {
		const { id, label, help, ...restProps } = this.props
		return (
			<Form.Group controlId={id}>
				<Form.Label>{label}</Form.Label>
				<Form.Control {...restProps} />
				<Form.Text className="text-muted">{help}</Form.Text>
			</Form.Group>
		)
	}
}

FieldGroup.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	help: PropTypes.string
}
