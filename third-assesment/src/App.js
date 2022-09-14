import React from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import './App.css';

function App() {
  const [value, setValue ] = React.useState(0)
  const handleTab = (e, val) =>{
    console.warn(val)
    setValue(val)
  }

  const OrderSuccessfull = () =>{
    alert('order successfully placed..!!');
  }
  return (
    <div className="App">
      {/* <h1>Details About Product</h1> */}
      {/* <AppBar position= "static" > */}
        <Tabs value={value} onChange={handleTab}>
        <Tab label="Shipping Address" />
        <Tab label="Payment Method" />
        <Tab label="Order" />
        </Tabs>
      {/* </AppBar> */}
      <TabPanel value={value} index={0}>
        <h2>Shipping Address</h2>
        <hr />
        <form>
          <div>
            <label>Name</label>
            <input type='name'
            name='name'
            placeholder='Name'/>
          </div>
          <div>
            <label for='phone'>Phone</label>
            <input type='number'
            id='phone-number'
            name='idNumber'
            placeholder='Number'
            />
          </div>
          <div>
            <label>Pincode</label>
            <input type='number'
            name='pincode'
            placeholder='Pincode'/>
          </div>
          <div>
            <label>Area</label>
            <input type='area'
            name='name'
            placeholder='Area'/>
          </div>
          <div>
            <label>Street</label>
            <input type='street'
            name='name'
            placeholder='Street'/>
          </div>
         <button className='btn' onClick={() =>setValue(value + 1)}>Save & Continue</button>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p>Payment Details</p>
         <hr />
        <form>
          <div>
            <input type='name'
            name='name'
            placeholder="Card Holder's Name"/>
          </div>
          <div>
            <input type='number'
            name='number'
            placeholder='card number'/>
          </div>
          <div>
            <input type='number'
            name='number'
            placeholder='Expiry date'/>
          </div>
          <div>
            <input type='number'
            name='number'
            placeholder='CVV'/>
          </div>
          <button className='btn' onClick={() =>setValue(value + 1)}>Continue</button>
        </form>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p>Order Details</p>
         <hr />
        <form>
          <div>
            <label>Product</label>
            <br />
            <label>Name:</label>
            <br />
            <label>Price: </label>
          </div> 
          <button className='btn' onClick={OrderSuccessfull}>Order</button>
          <p>Deliver within 7 Days..!</p>
          </form>
      </TabPanel>
    </div>
  );
}
function TabPanel( props )
{
const {children, value, index} = props
  return(
  <div>
   {
    value === index && (
      <h1>{children}</h1>
    )
   }
  </div>
  )
}
export default App;
