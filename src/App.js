import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound';
import Post from './Pages/Post';

function App() {
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
			</div>

			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/about' component={About} />
				<Route path='/profile' component={Profile} />
				<Route path='/post/:id' component={Post} />
				<Route component={NotFound}/>
			</Switch>

		</BrowserRouter>

	);
}

export default App;
