import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filtersSlice';

import css from './SearchBox.module.css';

export default function SearchBox() {
    const dispatch = useDispatch();

    const searchValue = useSelector((state) => state.filter);

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
