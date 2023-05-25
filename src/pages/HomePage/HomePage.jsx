/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import PopularMenu from '../../components/PopularMenu/PopularMenu';


const HomePage = () => {
    return (
        <div >
            <Banner />
            <Category />
            <PopularMenu />
        </div>
    );
};

export default HomePage;