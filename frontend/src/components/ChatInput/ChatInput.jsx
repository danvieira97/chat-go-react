import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  render(){
    return(
        <div className = 'ChatInput'>
           <input onKeyDown={this.props.send} placeholder="Digite uma menssagem e pressione Enter para enviar"/>
        </div>
    );
  };
};

export default ChatInput;