/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Rating, Autocomplete, TextField } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Switch from '@mui/material/Switch';
import cities from './cities';
import './Filter.scss';

function valuetext(value) {
  return `${value}`;
}

function Filter() {
  const [budget, setBudget] = useState([7000, 136000]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [premium, setPremium] = useState(false);
  const sortByOptions = ['Price'];

  const onStartDateChanged = (event) => {
    setStartDate(event.value);
  };

  const onEndDateChanged = (event) => {
    setEndDate(event.value);
  };

  const handleChange = (event, newValue) => {
    setBudget(newValue);
  };

  const toggle = () => {
    setPremium(!premium);
  };

  return (
    <div className="filter">
      <div className="filterCategory">
        <p>START DATE</p>
        <DatePickerComponent
          format="dd MMMM"
          id="startTime"
          data-name="startDate"
          value={startDate}
          className="e-field"
          change={onStartDateChanged}
          min={new Date()}
          cssClass="e-customStyle"
        />
      </div>
      <div className="filterCategory">
        <p>END DATE</p>
        <DatePickerComponent
          format="dd MMMM"
          id="startTime"
          data-name="endDate"
          value={endDate}
          className="e-field"
          change={onEndDateChanged}
          min={new Date()}
          cssClass="e-customStyle"
        />
      </div>
      <div className="filterCategory">
        <p>
          BUDGET: (
          {budget[0]}
          -
          {budget[1]}
          )
        </p>
        <Slider
          getAriaLabel={() => 'BUDGET'}
          value={budget}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          max={136000}
        />
      </div>
      <div className="filterCategory">
        <p>LOCATION</p>
        <Autocomplete
          disablePortal
          clearOnEscape
          id="combo-box-demo"
          options={cities}
          sx={{ width: 150 }}
          renderInput={(params) => (
            <TextField
              {...params}
            />
          )}
        />
      </div>
      <div className="filterCategory">
        <p>SORT BY</p>
        <Autocomplete
          disablePortal
          clearOnEscape
          id="combo-box-demo"
          options={sortByOptions}
          sx={{ width: 150, color: '#ffffff' }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <div className="filterCategory">
        <p>RATING</p>
        <Rating
          name="half-rating"
          value={null}
          size="large"
          precision={0.5}
          emptyIcon={
            <StarBorderIcon fontSize="inherit" sx={{ borderColor: 'white' }} />
          }
        />
      </div>
      <div className="filterCategory" style={{ alignItems: 'center' }}>
        <p>SHOW ONLY PREMIUM</p>
        <Switch onChange={toggle} />
      </div>
    </div>
  );
}

export default Filter;
