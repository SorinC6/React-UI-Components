import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardBanner';

const App = () => {
	return (
		<div className="main-container">
			<HeaderContainer />
         <CardContainer/>
		</div>
	);
};

export default App;
