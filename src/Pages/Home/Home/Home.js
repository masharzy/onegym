import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import ClassSchedules from '../ClassSchedules/ClassSchedules';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <ClassSchedules/>
            <Footer/>
        </div>
    );
};

export default Home;