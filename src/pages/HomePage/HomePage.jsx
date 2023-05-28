/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import PopularMenu from '../../components/PopularMenu/PopularMenu';
import CallUs from '../../components/CallUs/CallUs';


const HomePage = () => {
    return (
        <div >
            <Banner />
            <Category />
            <PopularMenu />
            <CallUs />

        </div>
    );
};

export default HomePage;