import React from 'react';
import Header from './wrapper/Header';
import Info from './wrapper/Info';

const wrapperStyle = {
    minHeight: 'calc(100vh - 150px)',
};

const Wrapper = () => {
    return(
        <div style={wrapperStyle}>
            <Header/>
            <Info/>
        </div>
    )
};

export default Wrapper;
