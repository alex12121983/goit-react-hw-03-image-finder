import { Component } from 'react'
import { BtnElement } from './Button.styled'

class Button extends Component {
render(){
	const {children, loadMore} = this.props
	return (
			<BtnElement 
				className='btn btn-outline-success' 
				onClick={loadMore}
			>
				{children}
			</BtnElement>
		)
	}
}

export default Button