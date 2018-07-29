import React, {Component} from 'react';
import Nav from './Nav';
import Articles from './Articles';
import navItems from './nav_items';
import articlesArray from './articles_array';

const wrapperStyle = {
    minHeight: 'calc(100vh - 150px)',
};

class Wrapper extends Component {
    render() {
        return(
            <div style={wrapperStyle}>
                <Nav navItems={navItems}/>
                <Articles articlesArray={articlesArray}/>
            </div>
        )
    }
}

export default Wrapper;
