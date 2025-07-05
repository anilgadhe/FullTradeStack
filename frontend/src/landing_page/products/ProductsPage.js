import React from 'react'
import LeftSection from './LeftSection';
import Hero from './Hero';
import RightSection from './RightSection'
import Universe from './Universe';

function ProductPage() {
    return (
        <>
           <Hero/>
            <LeftSection ImgURL="media/images/Dashboard.png" Title="Dashboard" Try="Try Demo" Learn="Learn More" GoogleStore="media/images/googlePlayBadge.svg" playStore="media/images/appstoreBadge.svg" Description="Our ultra-fast flagship trading platform with  streaming market data, advanced charts, an elegant UI, and more. Enjoy the Dashboard experience seamlessly on your Android and iOS devices." />

            <RightSection ImgURL="media/images/console.png" Title="Console" Description="The central dashboard for your FulltradeStack account. Gain insights into your trades and investments with in-depth reports and visualisations." Learn="Learn more"/>

            <LeftSection ImgURL="media/images/varsity-products.png" Title="Varcity-mobiles" Try="Try Demo" Learn="Learn More" GoogleStore="media/images/googlePlayBadge.svg" playStore="media/images/appstoreBadge.svg" Description="Our ultra-fast flagship trading platform with  streaming market data, advanced charts, an elegant UI, and more. Enjoy the Dashboard experience seamlessly on your Android and iOS devices." />

         <RightSection ImgURL="media/images/Dashboardconnect.png" Title="Dashboard Connect Api" Description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." Learn="Dashboard Connect" />

            <LeftSection ImgURL="media/images/coin.png" Title="Coin" Try="Try Demo" Learn="Learn More" GoogleStore="media/images/googlePlayBadge.svg" playStore="media/images/appstoreBadge.svg" Description="Our ultra-fast flagship trading platform with  streaming market data, advanced charts, an elegant UI, and more. Enjoy the Dashboard experience seamlessly on your Android and iOS devices." />

            <Universe/>
        </>
    );
}

export default ProductPage;