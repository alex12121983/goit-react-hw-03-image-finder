import { Component } from "react";
import {
    ModalOverlay,
    ModalWindow,
  } from './Modal.styled';

class Modal extends  Component {
    componentDidMount(){
        window.addEventListener('keydown', this.onEscPress)
    }
    componentWillUnmount(){
        window.removeEventListener('keydown', this.onEscPress)
    }
    onEscPress = evt => {
        if( evt.code === 'Escape' ) {
            this.props.closeModal()
        }
    }
    onBackClick = evt => {
        if ( evt.currentTarget === evt.target ) {
            this.props.closeModal()
        }
    }
    render(){
        const {src} = this.props
        return (
            <ModalOverlay onClick={this.onBackClick}>
                <ModalWindow>
                    <img src={src} alt="" />
                </ModalWindow>
            </ModalOverlay>
        )
    }
}

export default Modal