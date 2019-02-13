import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div class="footer-content">
			<div>
				<i class="far fa-comment" />
			</div>

			<div>
				<i class="fas fa-retweet" />
            {' '}6
			</div>

			<div>
				<i class="far fa-heart" />
           <span>{' '}4</span>
			</div>

			<div>
				<i class="far fa-envelope" />
			</div>
		</div>
	);
};

export default Footer;
