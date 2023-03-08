import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
      <Grid item xs={10}>
        <TextField
          label="Search recipes"
          variant="outlined"
          value={query}
          onChange={handleChange}
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          onClick={handleSubmit}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
