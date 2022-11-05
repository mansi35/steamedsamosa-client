import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerLicense } from '@syncfusion/ej2-base';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/initStore';

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHNqVVhkW1pFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9iSH5Sd0BnX3taeXVURg==;Mgo+DSMBPh8sVXJ0S0V+XE9AcVRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xSd0ViWHpadnBRT2NZUQ==;ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0RjWH5bdHJRQmlZU0Q=;NzUyNDEzQDMyMzAyZTMzMmUzMFV0NVVNZ0VlSGxKbktqK3BNZTIzaFgzaWVLeWVrVTBjMUhLNTd4d2FOU1k9;NzUyNDE0QDMyMzAyZTMzMmUzMFV3c1VMU1ZtaXJ6N010WURlV3FPZWJWb3p4akorMGJMOEpOY2Q1Tk1KVUE9;NRAiBiAaIQQuGjN/V0Z+X09EaFtFVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdERiWX5fdXBTQmVcVUR2;NzUyNDE2QDMyMzAyZTMzMmUzME9aWXJ3NFJsOWVsdWU2b05BRmJKUjU2ZGpLVVFpZ3NZZGttQzhRbExVYzA9;NzUyNDE3QDMyMzAyZTMzMmUzMGVUUTZ5QlpPaGUwQUNNT2E3MUlBU0VWRGwrWXhJQUtBaGUxaHhSMk1yUkk9;Mgo+DSMBMAY9C3t2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0RjWH5bdHJRQ2FfWEQ=;NzUyNDE5QDMyMzAyZTMzMmUzMFRzZW1TRytmNkQ3aXFzbjBDQjZtbVdlSm5wUVI5bnFEK05lK1FFY3cxMVE9;NzUyNDIwQDMyMzAyZTMzMmUzMElUNHFQMXM1em53M1NpbXBDWXJaN0J3YWJtYVdnTzYxNlJJa051ZmFmSFE9;NzUyNDIxQDMyMzAyZTMzMmUzME9aWXJ3NFJsOWVsdWU2b05BRmJKUjU2ZGpLVVFpZ3NZZGttQzhRbExVYzA9');

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore();

root.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </Provider>,
);
