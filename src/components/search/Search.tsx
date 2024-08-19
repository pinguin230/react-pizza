import style from "./Search.module.scss";

import React, {useCallback, useEffect, useRef, useState} from 'react';
import debounce from "lodash/debounce";
import {useAppDispatch} from "../../hooks/redux.ts";
import {setSearchQuery} from "../../store/redusers/search/FilterSlice.ts";


const Search = ({placeholder}) => {

  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [inputValue, setInputValue] = useState('')

  const onClickClear = () => {
    dispatch(setSearchQuery(""))
    setInputValue("")
    inputRef.current.focus()
  }
  const debounceDispatch = useCallback(
      debounce((query: string) => {
        dispatch(setSearchQuery(query))
  }, 250), [])

  const handleSearchQueryChange = (e) => {
    setInputValue(e.target.value)
    debounceDispatch(e.target.value)
  }

  useEffect(() => {
    // Cleanup the debounced function on unmount
    return () => {
      debounceDispatch.cancel();
    };
  }, [debounceDispatch]);

  return (
      <div className={style.root}>
        <svg className={style.icon} height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
          <title/>
          <path
              d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z"/>
        </svg>
        <input
            ref={inputRef}
            value={inputValue}
            onChange={handleSearchQueryChange}
            className={style.input} placeholder={placeholder}
        />
        {inputValue &&
          <svg className={style.closeIcon} onClick={onClickClear} height="512px" id="Layer_1"
               version="1.1" viewBox="0 0 512 512" width="512px"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
          </svg>}
      </div>
  );
};

export default Search;