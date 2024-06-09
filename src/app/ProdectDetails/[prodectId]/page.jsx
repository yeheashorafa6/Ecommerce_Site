"use client";
import Breadcrumb from "./../../../components/Breadcrumb/Breadcrumb";
import prodectApis from "./../../../utils/prodectApis";
import React, { useEffect, useState } from "react";
import ProdectInfo from "./_components/ProdectInfo";
import Title from "./../../../components/Title/Title";
import ProdectsCard from "./../../../components/Prodects/ProdectsCard/ProdectsCard";
import { usePathname } from "next/navigation";

function page({ params }) {

  const path = usePathname();
  // STATE

  const [singleProdectDetails, setSingleProdectDetails] = useState([]);

  const [prodectsList, setProdectsList] = useState([]);
  // == STATE ==

  useEffect(() => {
    getProdectById_();
  }, [params.prodectId]);
  const getProdectById_ = () => {
    prodectApis.getProdectById(params?.prodectId).then((res) => {
      console.log("prodect", res.data.data);
      setSingleProdectDetails(res.data.data);
      getProdectListByCategory(res.data.data);
    });
  };
  const getProdectListByCategory = (prodect) => {
    prodectApis
      .getProdectsByCategory(prodect?.attributes?.category)
      .then((res) => {
        console.log("prodect Category", res.data.data);
        setProdectsList(res.data.data);
      });
  };
  return (
    <div className="mx-10 py-8 md:px-28">
      <Breadcrumb path={path} />
      <ProdectInfo singleProdectDetails={singleProdectDetails} />
      <div>
        <Title
          title={"Similar Prodects"}
          subTitle={
            "Illo eum accusamus nulla praesentium nobis a laudantium aliquid temporibus. Consequatur, quia magni ."
          }
        />
      </div>
      <ProdectsCard prodectsCard={prodectsList}/>
    </div>
  );
}

export default page;
