import React from 'react';
import './Address.scss';

function Address() {
  return (
    <div>
      <div className="address">
        <form action="/action_page.php">
          <div className="address__form">
            <div className="address__line">
              <div className="label__input">
                <label htmlFor="addressline1">Address Line 1</label>
                <input type="text" id="addressline1" name="addressline1" />
              </div>
              <div className="label__input">
                <label htmlFor="addressline2">Address Line 2</label>
                <input type="text" id="addressline2" name="addressline2" />
              </div>
            </div>
            <div className="address__details">
              <div className="label__input">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" />
              </div>
              <div className="label__input">
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" />
              </div>
              <div className="label__input">
                <label htmlFor="pincode">Pincode</label>
                <input type="text" id="pincode" name="pincode" />
              </div>
            </div>
            <div className="checkbox">
              <input
                className="checkbox__input"
                type="checkbox"
                id="defaultAddress"
                name="defaultAddress"
              />
              <label htmlFor="defaultAddress">
                Make this my default address
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Address;
