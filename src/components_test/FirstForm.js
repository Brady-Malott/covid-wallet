import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";

export class FirstForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Grid container spacing={3} className="test">
            <Grid item xs={12} sm={6}>
              <InputLabel id="work-sector">Work Sector</InputLabel>
              <Select
                labelId="work-sector"
                id="work-select"
                fullWidth
                onChange={handleChange('workSector')}
                value={values.workSector}
              >
                <MenuItem value="1">Health care and social assistance</MenuItem>
                <MenuItem value="2">Educational services</MenuItem>
                <MenuItem value="3">Accommodation and food services</MenuItem>
                <MenuItem value="4">Finance and insurance, real estate, rental, and leasing</MenuItem>
                <MenuItem value="5">Manufacturing</MenuItem>
                <MenuItem value="6">Wholesale trade, retail trade</MenuItem>
                <MenuItem value="7">Professional, scientific, and technology services</MenuItem>
                <MenuItem value="8">Other</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="age">Age</InputLabel>
              <TextField
                required
                labelId="age"
                name="age"
                fullWidth
                type="number"
                onChange={handleChange('age')}
                defaultValue={values.age}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                labelId="gender"
                id="gender-select"
                fullWidth
                onChange={handleChange('gender')}
                value={values.gender}
              >
                <MenuItem value="1">Male</MenuItem>
                <MenuItem value="2">Female</MenuItem>
                <MenuItem value="3">Other</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="race">Race</InputLabel>
              <Select
                labelId="race"
                id="race-select"
                fullWidth
                onChange={handleChange('race')}
                value={values.race}
              >
                <MenuItem value="1">White</MenuItem>
                <MenuItem value="2">Arab</MenuItem>
                <MenuItem value="3">Filipino</MenuItem>
                <MenuItem value="4">Chinese</MenuItem>
                <MenuItem value="5">Black</MenuItem>
                <MenuItem value="6">Other</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FirstForm;