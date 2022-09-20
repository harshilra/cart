import React, { useEffect } from 'react'
import propsType from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';




export default function Navbar(props) {
  useEffect(() => {
    console.log('object');
  }, [])

  function disCall() {
    console.log('hello');
    if (props.displayCart === true) {
      props.setDisplayCart(false)
    } else {
      props.setDisplayCart(true)
    }
  }
  const state = useSelector(state => state.store.data);
  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <>
      <nav className="navbar p-3 navbar-expand bg-dark">
        <div className='row w-100'>
          <div className='col-12 p-0'>
            <h1 style={{ fontSize: '35px' }} className="navbar-brand p-0 m-0 text-light text-center">RandomMart.com</h1>
          </div>
          <div className='col-12 position-absolute p-0'>
            <div className="container-fluid">
              <button className="navbar-toggler btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page" href="#">Clothes</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">Accessories</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="text-light   nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Brand
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>

                    </ul>
                  </li>
                  {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
                </ul>
                <form className="d-flex" role="search">
                  {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                  <div className='position-relative'>
                    <svg style={{ color: 'white' }} onClick={disCall} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>
                    {
                      state.length > 0 && <div style={{ top: '0', right: '-5px', width: '22px', height: '22px', display: "flex", borderRadius: "20px" }} className=' justify-content-center align-itmes-center position-absolute bg-light'>
                        {state.length}
                      </div>
                    }

                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </>

  )
}

