import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './SearchBox.module.css';
import { getFilter, setFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
    const dispatch = useDispatch();

    const searchValue = useSelector(getFilter);

    const handleChange = (e) => {
        dispatch(setFilter(e.target.value));
    };

    return (
      
        <div className={css.container}>
            <label className={css.label}>Find contacts by name</label>
            <input
                className={css.input}
                type="text"
                name="filter"
                value={searchValue.filter}
                onInput={handleChange}
            />
        </div>
  );
}
