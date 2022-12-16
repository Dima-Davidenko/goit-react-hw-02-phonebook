import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

export class Filter extends Component {
  static propTypes = {
    filterContacts: PropTypes.func.isRequired,
  };
  state = {
    value: '',
  };

  handleInputChange = ({ target }) => {
    this.setState({ value: target.value });
    this.props.filterContacts(target.value.toLowerCase());
  };

  render() {
    return (
      <TextField
        id="outlined-basic"
        label="Знайти по імені"
        variant="outlined"
        size="small"
        value={this.state.value}
        onChange={this.handleInputChange}
      />
    );
  }
}

export default Filter;
