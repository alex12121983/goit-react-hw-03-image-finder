import { Component } from 'react'
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { 
    Header, 
    SearchForm, 
    SearchFormButton, 
    SearchFormButtonLabel, 
    SearchFormInput 
} from './Searchbar.styled';

class Searchbar extends Component {
    state = {
        value: '',
    }
    handleChange = ({ target: { value } }) => {
        this.setState({ value })
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        if (this.state.value.trim() === '') {
            return Notiflix.Notify.warning(
              'Please enter key words for search.',
            );
          }
        this.props.handleSearch(this.state.value)
        this.setState({ value: '' });
    }
    render(){
        return (
            <>
                <Header>
                    <SearchForm onSubmit={this.handleSubmit}>
                        <SearchFormButton type="submit">
                            <SearchFormButtonLabel>
                                Search
                            </SearchFormButtonLabel>
                        </SearchFormButton>
                        <SearchFormInput
                            className="input"
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            onChange={this.handleChange}
                            value={this.state.value}
                        />
                    </SearchForm>
                </Header>
            </>
        )
    }
}

export default Searchbar

Searchbar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };