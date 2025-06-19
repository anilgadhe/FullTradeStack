import React from 'react'
import LeftSection from './LeftSection';
import Hero from './Hero';
import RightSection from './RightSection'
import Universe from './Universe';

function ProductPage() {
    return (
        <>
           <Hero/>
            <LeftSection ImgURL="media/images/kite.png" Title="Kite" Try="Try Demo" Learn="Learn More" GoogleStore="media/images/googlePlayBadge.svg" playStore="media/images/appstoreBadge.svg" Description="Our ultra-fast flagship trading platform with  streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." />

            <RightSection ImgURL="media/images/console.png" Title="Console" Description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." Learn="Learn more"/>

            <LeftSection ImgURL="media/images/varsity-products.png" Title="Varcity-mobiles" Try="Try Demo" Learn="Learn More" GoogleStore="media/images/googlePlayBadge.svg" playStore="media/images/appstoreBadge.svg" Description="Our ultra-fast flagship trading platform with  streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." />

         <RightSection ImgURL="media/images/Kiteconnect.png" Title="Kite Connect Api" Description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." Learn="Kite Connect" />

            <LeftSection ImgURL="media/images/coin.png" Title="Coin" Try="Try Demo" Learn="Learn More" GoogleStore="media/images/googlePlayBadge.svg" playStore="media/images/appstoreBadge.svg" Description="Our ultra-fast flagship trading platform with  streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." />

            <Universe/>
        </>
    );
}

export default ProductPage;