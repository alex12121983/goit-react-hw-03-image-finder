import React from 'react'
import  { TailSpin }  from  'react-loader-spinner'
import { LoaderOverlay } from './Loader.styled';

const Loader = () => {
        return (
          <LoaderOverlay> 
            <TailSpin
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{position: 'absolute', top: '30%', left: '43%'}}
              wrapperClass="tail-spin-loading"
              visible={true}
            />
          </LoaderOverlay>
        ) 
}

export default Loader

// class Loader extends Component {
  //     render(){
  //         // const {children, loadMore} = this.props
  //         return 
  //             (<Audio
  //             height = "80"
  //             width = "80"
  //             radius = "9"
  //             color = 'green'
  //             ariaLabel = 'three-dots-loading'     
  //             wrapperStyle
  //             wrapperClass
  //           />)
  //         }
  // }