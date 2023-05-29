import { Component } from 'react'
import { getSearchImages } from '../api/getSearchImages';
import Notiflix from 'notiflix';
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './Button/Button'
import Modal from './Modal/Modal'
import Loader  from  './Loader/Loader'
import { Container } from './App.styled';


class App extends Component {
	state = { 
		searchText: '', 
		page: 1,
		images: [],
		largeImageURL: '',
		isLoading: false,
        isShowLoadMoreBtn: false, 
		isShowModal: false,  
	}

	componentDidUpdate(prevProps, prevState){
        const text = this.state.searchText.trim()
        const page = this.state.page
		if (prevState.searchText !== text || 
            prevState.page !== page) {
            this.setState({isLoading: true})
            this.fetchImages( text, page )
        }
    }

	handleSearch = (searchText) => {
		this.setState({
			searchText, 
			page: 1,
			images: [],
		})
	}

	handleLoadMoreButton = () => {
        this.setState(prevState => ({
            page: prevState.page + 1}))
    }

	openModal = (largeImageURL) => {
		this.setState({
			isShowModal: true, 
			largeImageURL,
		})
	}

	closeModal = () => {
		this.setState({
			isShowModal: false,
			largeImageURL: '',
		})
	}
	async  fetchImages (text, page) { 
		try {
			await getSearchImages(text, page).then((data) => {
				const images = data.hits
				const total = data.total
				const finalPage = Math.ceil(Number(total) / 12)
				if ( images.length === 0 ) {
					this.setState({isShowLoadMoreBtn: false})
					Notiflix.Notify.failure(
						'Sorry, there are no images matching your search query. Please try again.',
					  )
					  return
				}else{
					this.setState((prevState) => ({
						images: [...prevState.images, ...images]
					}))
				}
				if ( images.length > 0 && this.state.page === 1 ) {
					Notiflix.Notify.success(
						`Hooray! We found ${total} images.`,
					  )
				}
				finalPage > page 
				? this.setState({isShowLoadMoreBtn: true})
				: this.setState({isShowLoadMoreBtn: false})
			})
		} catch (error) {
			console.log(error)
			Notiflix.Notify.failure(
			'Sorry, something went wrong, please try again later',
		  );
		} finally {
			this.setState({isLoading: false})
		}
	} 
	render(){
		return (
			<>
				<Searchbar handleSearch={this.handleSearch} />
				{/* {this.state.error && 
					(<div className="alert alert-danger mt-3" role="alert"> {this.state.error} </div>)
				} */}
				<Container>
					<ImageGallery 
						images={this.state.images}
						openModal={this.openModal}
					/>
					{this.state.isShowLoadMoreBtn && 
						<Button 
							loadMore={this.handleLoadMoreButton}
						>
							load more
						</Button>
					}
				</Container>
				{ this.state.isLoading && (<Loader />) }
				{this.state.isShowModal && (
					<Modal
						src={this.state.largeImageURL}
						closeModal={this.closeModal}
					/>)
				}
			</>
		)
	}
}

export default App
