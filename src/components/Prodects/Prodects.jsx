"use client";
import React, { useEffect , useState} from 'react'
import ProdectCard from "./ProdectsCard/ProdectsCard";
import prodectApis from './../../utils/prodectApis';
import Title from '../Title/Title';

function Prodects() {

    const[prodectsList , setProdectsList] = useState([]);

    useEffect(()=>{
        getLatestProdects_();
    },[])
    const getLatestProdects_ = () => {
        prodectApis.getLatestProdects().then(res => {
            console.log(res.data.data);
            setProdectsList(res.data.data);
        }).catch(err => {
            console.error("Error fetching products:", err);
        });
    };
  return (
    <div className='mt-20 mb-20 mx-auto max-w-screen-xl gap-8 px-4 sm:px-6 lg:px-8'>
      <Title title={"Our Latest Prodects"} subTitle={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique architecto iure eligendi natus sequi animi, voluptatem beatae ."} />
      <ProdectCard prodectsCard={prodectsList}/>
    </div>
  )
}

export default Prodects
