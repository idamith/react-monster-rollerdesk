import './search-box.style.css'

const SearchBox = (props) => {
    const {onChangeHandler, name, placeholder} = props;

    return (
        <input 
            name={name}
            className='search-box'
            type='search'
            placeholder={`🔍 ${placeholder}`}
            onChange={onChangeHandler}
        />
    );
}

export default SearchBox;