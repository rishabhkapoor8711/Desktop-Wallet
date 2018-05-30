import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './Backup.css';

import MainModal from '../../Content/DarkMainModal';

import { Button, Input, Checkbox } from 'semantic-ui-react';
import buttonStyles from '../../Button.css';

import { Form, ContactIcon, CloseIcon } from '../../Icons';

const bip39 = require('bip39');

class Backup extends Component {

  state = {
    backupPhrase: ["apple", "banana", "orange", "horse", "pig", "street", "happy", "sad", "fun", "mad", "because", "beta", "omega", "hack", "chain", "link", "verge", "tron", "golem", "test", "phrase", "girl", "boy", "goat"],
  }


  renderSpan(words, start){
      let output = [];
      for(let i = 0;i<words.length;i++){
          output.push(
              <div className={styles.word}><span>{start + i}: </span>{ words[i] }</div>
          )
      }
      return output;
  }

  renderWords(account){
      if(account.words && account.words.length === 24){
          return (
              <div className={styles.wordContainer}>
                  <div className={styles.wordColumn}>
                      {this.renderSpan(account.words.slice(0,12), 1)}
                  </div>
                  <div className={styles.wordColumn}>
                      {this.renderSpan(account.words.slice(12,24),13)}
                  </div>
              </div>
          );
      }
  }

  render() {
      let accountId = this.props.match.params.account;
      let account = this.props.wallet.persistent.accounts[accountId];

      if(!account){
          return (
              <div></div>
          )
      }

    return (
      <MainModal header="Bh all goodackup Wallet" className={styles.container}>
        <div className={styles.subHeader}>CAREFULLY WRITE DOWN THESE WORDS :</div>
        {this.renderWords(account)}

          <div className={styles.subHeader}>SEED :</div>
          <div className={styles.privatekey}>
              {account.privateKey}
          </div>
          <div className={styles.checkboxContainer}>
            <Checkbox className={styles.checkbox} />
            <span className={styles.checkboxLabel}>I have written it down</span>
        </div>
        <Button className={`${buttonStyles.button} ${buttonStyles.black}`}>Backup</Button>
      </MainModal>
    );
  }
}

export default withRouter(connect(
    state => ({ wallet: state.wallet }),
    dispatch => ({
        updateTransactions: (accountId, transactions) => {
            dispatch(updateTransactions(accountId, transactions));
        }
    })
)(Backup));
