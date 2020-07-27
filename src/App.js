import React, { useState } from 'react';
import { isInputValid, isArrayEmpty } from './utils';
import axios from 'axios';
import './App.css';
import { API_KEY, CUSTOM_SEARCH_ENGINE_ID } from './utils/constants';
import QueryData from './components/QueryData';

function App() {
  const [input, setInput] = useState('');
  const [queryResponse, setQueryResponse] = useState([]);

  const onInputChange = ({ target }) => {
    const { value } = target;
    if (isInputValid(value)) {
      setInput(value);
    }
  };

  const makeRequest = async () => {
    // get, post,
    try {
      // post(')
      const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CUSTOM_SEARCH_ENGINE_ID}&q=${input}`);
      if (response && response.data && !isArrayEmpty(response.data.items)) {
        setQueryResponse(response.data.items);
      }
    } catch (error) {
      console.log('Some error occured');
    }

  }
  return (
    <div className="container">
      <div className="header">
        <div className="headerText">
          Oh.Search
        </div>
        <div className="seachField">
          <input
            type='text'
            className="search"
            name="search"
            value={input}
            onChange={onInputChange}
          />
        </div>
        <div className="submit">
          <button
            type='button'
            className="submitButton"
            onClick={makeRequest}
            disabled={!isInputValid(input)}
          >
            Search
          </button>
        </div>
      </div>

      <div className="content">
        {queryResponse.map(item => (
          <QueryData item={item} key={item.link} />
        ))}
      </div>
    </div>
  );
}

export default App;
