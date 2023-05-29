import { Component } from 'react'
import { BtnElement } from './Button.styled'
import PropTypes from 'prop-types';

class Button extends Component {
render(){
	const {children, loadMore} = this.props
	return (
			<BtnElement 
				onClick={loadMore}
			>
				{children}
			</BtnElement>
		)
	}
}

export default Button

Button.propTypes = {
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func,
  };