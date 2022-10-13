import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Search = ({}) => {
const [type, settype] = useState();

  return(
                    <div>
                      <TextField
                      style={{flex:1}}
                      className="Search"
                      variant='filled'
                      label="Search"
                      // onChange={(e)=>setSearchText(e.target.value)}
                      />
                   </div>
    );
}

export default Search;
