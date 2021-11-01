import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound';
import Post from './Pages/Post';
import { useState } from 'react';

function App() {

	const  [login, setLogin] = useState(false)

	return (
		<BrowserRouter
		// forceRefresh
		// basename='react-router-tutorial' 
		// getUserConfirmation ={
		// 	(message, callback)=> {
		// 		callback(window.confirm())
		// 	}
		// }
		>
			<div className="App">
				<Header />

				<button onClick={() => setLogin(!login)}>
					{login ? 'Log out' : 'login'}
				</button>

				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/about' component={About} />
					<Route path='/profile'>
						{login ? <Profile /> : <Redirect to='/' />}
					</Route>
					<Route path='/post/:id' component={Post} />
					<Route component={NotFound} />
				</Switch>
			</div>

		</BrowserRouter>

	);
}

export default App;
