
import { FaMinus, FaPlus } from "react-icons/fa6";
import itemCartImg1 from '../assets/item-cart-04.jpg';
import itemCartImg2 from '../assets/item-cart-05.jpg';
import { useState } from "react";

import '../pagesStyles/Features.css'

const Features = () =>{

  const [count,setCount] = useState(1);

  const [item, itemCount] = useState(1);

    const unitPrice1 = 36;
    const unitPrice2 = 16;
  const totalPrice1 = (unitPrice1 * count).toFixed(2);

  const totalPrice2 = (unitPrice2 * item).toFixed(2);
  

  return (
    <>
   

    <form className="p-b-85">
      <div className="container">
        <div className="row">

          <div className="col-xl-7 mb-4">
            <div className="shopping-cart">
              <div className="wrap-table">
                <table className="table-shop-cart">
                  <tbody>
                    <tr className="table_head">
                      <th className="column-1">Product</th>
                      <th className="column-2"></th>
                      <th className="column-3">Price</th>
                      <th className="column-4">Quantity</th>
                      <th className="column-5">Total</th>
                    </tr>

                    <tr className="table_row">
                      <td className="column-1">
                        <div className="itemcart1">
                          <img src={itemCartImg1}  />
                        </div>
                      </td>
                      <td className="column-2">Fresh Strawberries</td>
                      <td className="column-3">$ {unitPrice1}</td>
                      <td className="column-4">
                        <div className="wrap-num-product">
                    <div className="btn-num-down" onClick={()=>setCount(count>0 ? count - 1 : 0)}><FaMinus/>     </div>
                         
                            <input className="num-product" type="number"   value={count}  readOnly/>
                        
                          <div className="btn-num-up" onClick={()=>setCount(count+1)}><FaPlus /></div>

                        </div>

                      </td>

                      <td className="column-5">$ {totalPrice1}</td>

                    </tr>

                     <tr className="table_row">

                      <td className="column-1">
                        <div className="itemcart1">
                          <img src={itemCartImg2}  />
                        </div>
                      </td>

                      <td className="column-2">Lightweight Jacket</td>

                      <td className="column-3">$ {unitPrice2}</td>

                      <td className="column-4">

                        <div className="wrap-num-product">

                          <div className="btn-num-down" onClick={()=>itemCount(item>0? item -1:0)}><FaMinus /></div>
                         
                            <input className="num-product" type="number" value={item}  readOnly/>
                        
                          <div className="btn-num-up" onClick={()=>itemCount(item+1)}><FaPlus /></div>

                        </div>

                      </td>

                      <td className="column-5">$ {totalPrice2}</td>

                    </tr>

                    

                  </tbody>

                </table>
              </div>


              <div className="coupon-cart">

                <div className="coupon">

                  <input className="CC-input" type="text" placeholder="Coupon Code" />

                  <div className="applyCoupon">Apply coupon</div>

                </div>

                <div className="applyCoupon updt-cart">
                  Update Cart
                </div>

              </div>

            </div>

          </div>

          <div className="col-xl-5 m-lr-auto">

            <div className="bor10">
              <h4 className="mtext-109">Cart Totals</h4>
              <div className="p-b-13">

                <div className="size-208">
                  <span className="sTotal">Subtotal: </span>
                </div>

                <div className="size-209">
                  <span className="sTotalprice">$79.65 </span>
                </div>

              </div>

              <div className="shipping">

                <div className="size-208">
                  <span className="hShiping">Shipping: </span>
                </div>

                <div className="shippingDetail">
                  <p className="shipPera">
                    
									There are no shipping methods available. Please double check your address, or contact us if you need any help.
								
                  </p>

                  <div className="shippingCalculate">

                    <span className="csText">Calculate Shipping</span>

                    <div className="select"> 
                      

                      <select  >
                        <option value="SaC" >Select a country</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        <option value="aus">AUS</option>
                      </select>


                    </div>

                    <div className="m-b-12">
                      <input className="p-lr-15" type="text" placeholder="State / country" />
                    </div>

                    <div className="m-b-22">
                      <input className="p-lr-15" type="text" placeholder="Postcode /Zip" />
                    </div>

                    <div className="updTotal">
                      <div className="bg8">
                        Update Totals
                      </div>
                    </div>



                  </div>

                </div>

            

              </div>

                  <div className="total">
                  <div className="totalText"> 
                    <span className="c12T">Total: </span>
                  </div>

                  <div className="totalP">
                    <span className="c12T">
                      $79.65
                    </span>
                  </div>
                </div>

                 <button className="checkoutBtn">Proceed to Checkout</button>


            </div>
            
          </div>

        </div>
      </div>
    </form>


    


    </>
  )
}

export default Features;