import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
  <div class="Sidebar">Sidebar</div>

  <div class="main">

    <div class="search">Search</div>

   
    <div class="boxContainer container1">
      <div class="box Jack">Congratulations Jack 🎉</div>
      <div class="box">Order</div>
      <div class="box">Sales</div>
      <div class="box">Expenses</div>
    </div>

   
    <div class="boxContainer container2">
      <div class="box awesome">Awesome</div>
      <div class="box financesummary">Finance Summary</div>
    </div>

   
    <div class="tableWrap">
      <table>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Payment</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>OnePlus</td>
          <td>Mobile</td>
          <td>$499</td>
          <td>Confirmed</td>
          <td>⋮</td>
        </tr>
        <tr>
          <td>Magic Mouse</td>
          <td>Accessory</td>
          <td>$149</td>
          <td>Completed</td>
          <td>⋮</td>
        </tr>
         <tr>
          <td>Magic Mouse</td>
          <td>Accessory</td>
          <td>$149</td>
          <td>Completed</td>
          <td>⋮</td>
        </tr>
         <tr>
          <td>Magic Mouse</td>
          <td>Accessory</td>
          <td>$149</td>
          <td>Completed</td>
          <td>⋮</td>
        </tr>
         <tr>
          <td>Magic Mouse</td>
          <td>Accessory</td>
          <td>$149</td>
          <td>Completed</td>
          <td>⋮</td>
        </tr>
         <tr>
          <td>Magic Mouse</td>
          <td>Accessory</td>
          <td>$149</td>
          <td>Completed</td>
          <td>⋮</td>
        </tr>
      </table>
    </div>

  </div>
</div>
    </>
  )
}

export default App
