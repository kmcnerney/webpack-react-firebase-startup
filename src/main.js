'use strict'

import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers/root-reducer'

// Styles
import './sass/main.scss'

// Components
import NavBar from './components/nav-bar'
import LogInForm from './components/log-in-form'
import SignUpForm from './components/sign-up-form'
import BankAccount from './components/bank-account'

// Constants
import Constants from './constants.js'

require('file-loader!../index.html')

const store = createStore(rootReducer, {},
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

function renderContent (page, content) {
	return ReactDOM.render(
		<Provider store={store}>
			<div>
				<NavBar page={page} />
				{content}
			</div>
		</Provider>, document.getElementById('root-div')
	)
}

const Router = Backbone.Router.extend({
	routes: {
		'': Constants.LOG_IN_PAGE,
		logIn: Constants.LOG_IN_PAGE,
		signUp: Constants.SIGN_UP_PAGE,
		account: Constants.ACCOUNT_PAGE
	},

	logIn () {
		renderContent(Constants.LOG_IN_PAGE, <LogInForm />)
	},

	signUp () {
		renderContent(Constants.SIGN_UP_PAGE, <SignUpForm />)
	},

	account () {
		renderContent(Constants.ACCOUNT_PAGE, <BankAccount />)
	}
})

new Router()
Backbone.history.start()
