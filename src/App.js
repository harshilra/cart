import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import './myCss.css'

import { useDispatch, useSelector } from 'react-redux';

// import Axios from 'axios';

import SingleData from './SingleData';
import { StoreData } from './store/SingleSlice';

export default function App() {
  const [displayCart, setDisplayCart] = useState(false)

  const [cartBag, setCartBag] = useState([])
  const dispatch = useDispatch();
  const state = useSelector(state => state.store.data);
  useEffect(() => {
    setCartBag(state)
    console.log(state)
  }, [state])



  return (
    <div>

      <Navbar displayCart={displayCart} setDisplayCart={setDisplayCart}></Navbar>
      <main className='px-md-1  px-sm-1  px-lg-5 container'>
        <div className='row'>
          <div className={displayCart ? 'col-7' : 'col-12'}>
            <SingleData></SingleData>
          </div>
          <div className={displayCart ? 'col-5' : 'd-none'}>
            <div style={{ borderRadius: "10px" }} className='ms-5 bg-info'>
              <h3 className='text-center mt-3 p-3'>Cart details</h3>
              <div className='' style={{ borderRadius: "10px", height: '1px', width: '100%', backgroundColor: 'black' }}></div>
              <div className='p-2'>
                <div className='text-center p-2 m-2 text-dark' style={{ borderRadius: "10px" }}>
                  <h5> Checkout here..</h5>
                  {
                    cartBag.length > 0 && cartBag.map((b, index) => {
                      return <div style={{ border: '2px solid #0dcaf0', borderRadius: '10px' }} className='position-relative bg-light  mt-4 p-2 text-dark' key={index}>
                        <div>
                          <img style={{ width: '50px' }} src={b.image} alt="" />
                          <h6>{b.title}</h6>
                          <h6 style={{ borderRadius: "10px" }} className='py-1 bg-info text-white'>Price : {b.price}</h6>
                          <button style={{ top: "-10px", right: "-10px" }} className='position-absolute p-1 px-2  btn btn-dark'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                          </button>
                          <button style={{ top: "-10px", left: "-10px" }} className='position-absolute p-1 px-2  btn btn-dark'>
                            <svg style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class=" bi bi-dash" viewBox="0 0 16 16">
                              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    })
                  }
                </div>
              </div>

            </div>
          </div>

        </div>

      </main >

    </div >
  )
}
