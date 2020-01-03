import React from 'react'
import Route from './Route'
export default (Component) => (props) => <Route {...props} component={Component} />