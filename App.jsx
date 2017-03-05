import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'

class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Container}>
					<IndexRoute component={Home}/>
					<Route path='about' component={About}></Route>
					<Route path='contact' component={Contact}></Route>
					<Route path="*" component={NotFound}/>
				</Route>
			</Router>
		)
	}
}
const Home = () => <h1 className='center'>Home Page</h1>
const About = () => <h1 className='center'>About page</h1>
const Contact = () => <h1 className='center'>Contact Page</h1>
const NotFound = () => (<h1>404. This page is not found!</h1>)
const Nav = () => (
	<div className='header'>
		<IndexLink className='urlLinks' activeClassName='active' to='/'>Home</IndexLink>&nbsp;
		<IndexLink className='urlLinks'activeClassName='active' to='/about'>About</IndexLink>&nbsp;
		<IndexLink className='urlLinks' activeClassName='active' to='/contact'>Contact</IndexLink>
	</div>
)
const Container = (props) => <div>
<Nav/>
{props.children}
</div>

export default App;