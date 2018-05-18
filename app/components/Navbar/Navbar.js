import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.css';

import * as Icons from '../Icons.js';

const links = [
	{ route: '/wallets', text: 'Wallets', icon: Icons.WalletIcon },
	{ route: '/send', text: 'Send', icon: Icons.SendIcon },
	{ route: '/receive', text: 'Receive', icon: Icons.ReceiveIcon },
  { route: '/tokens', text: 'Tokens', icon: Icons.TokensIcon },
	{ route: '/vote', text: 'Vote', icon: Icons.VoteIcon },
  { route: '/contact', text: 'Contact', icon: Icons.ContactIcon },
	{ route: '/settings', text: 'Settings', icon: Icons.SettingsIcon },
];

export default class Navbar extends Component {

  render() {
    return (
      <nav className={styles.navbar}>
      	<div className={`${styles.logo} ${styles.top}`}>
          <Icons.TronIcon />
      	</div>

      	{
      		links.map((link, i) =>
      			<NavLink to={link.route} key={i} activeClassName={styles.active} className={styles.link}>
      			  <link.icon />
      			  <div>{link.text}</div>
      			</NavLink>
      		)
	    	}

        <div className={`${styles.link} ${styles.bottom}`}>{/*<Icons.SearchIcon />*/}</div>
      </nav>
    );
  }
}
