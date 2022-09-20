import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StoreData } from './store/SingleSlice'

export default function SingleData(props) {
    const [allProducts, setAllProducts] = useState([])
    const [myData, setMyData] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setAllProducts(json))
    }, [allProducts])

    function addToCart(a) {
        dispatch(StoreData(a))

    }

    return (
        <>
            <h1 className='text-center mt-3'>Products are..</h1>
            {
                allProducts.map((a, index) => {
                    return <div key={index} className='p-4 mt-3 bg-dark text-white' style={{ borderRadius: "10px" }}>
                        <div className='row'>
                            <h3 className=' text-light p-2' style={{ borderRadius: "10px" }}>{a.title}</h3>
                        </div>
                        <div className='row'>
                            <div className='myRound bg-light col-3 mySys'>
                                <img style={{ width: '100px' }} src={a.image} alt="" />
                            </div>
                            <div className='col-9'>
                                <h5>{a.category}</h5>
                                <h6>{a.description}</h6>
                                <h5 className='text-end pt-3'>Price : {a.price}
                                    <button onClick={() => { addToCart(a) }} className='ms-3 btn btn-info'>Add to cart</button>
                                </h5>
                            </div>
                        </div>
                    </div>
                })
            }
        </>

    )
}
