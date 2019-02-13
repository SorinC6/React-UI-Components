import React from 'react';
import './Header.css';
import moment from 'moment'

const time=moment();

const HeaderTitle = () => (
	<div className="header-wrapper">
		<h1 className="header-text">
			Lambda School <span className="header-time">@LambdaSchool - {time.format('Do MMM')}</span>
		</h1>
	</div>
);

export default HeaderTitle;
