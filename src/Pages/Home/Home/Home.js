import React from 'react';
import Banner from '../Banner/Banner';
import ClassSchedules from '../ClassSchedules/ClassSchedules';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <ClassSchedules/>
        </div>
    );
};

export default Home;