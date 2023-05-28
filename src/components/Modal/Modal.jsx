import { Component } from "react";
import {
    ModalOverlay,
    ModalWindow,
    ModalImg,
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
            <ModalOverlay className="overlay" onClick={this.onBackClick}>
                <ModalWindow className="modal">
                    <img src={src} alt="" />
                </ModalWindow>
            </ModalOverlay>
        )
    }
}

export default Modal