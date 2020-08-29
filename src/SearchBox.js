import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return(
        <div >
            <input className='pa2 ba b--green bg-lightest-blue'
            type='search'
            placeholder='search robots'
            onChange= {searchChange}
            />
           
        </div>
    );
}

export default SearchBox;