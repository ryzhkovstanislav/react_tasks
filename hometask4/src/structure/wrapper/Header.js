import React, {Component} from 'react';

const navStyle = {
    background: '#1b5e20',
    color: 'white',
    fontSize: 16,
};

const ulStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
};

const liStyle = {
    margin: '20px 40px',
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

const aStyle = {
    textDecoration: 'none',
    color: 'white',
};

class Header extends Component {
    render() {
        return(
            <nav style={navStyle}>
                <div className='container' style={containerStyle}>
                    <div>
                        <ul style={ulStyle}>
                            <li style={liStyle}>
                                <a style={aStyle} href="">Главная</a>
                            </li>
                            <li style={liStyle}>
                                <a style={aStyle} href="">О нас</a>
                            </li>
                            <li style={liStyle}>
                                <a style={aStyle} href="">Проекты</a>
                            </li>
                        </ul>
                    </div>
                    <div style={ulStyle}>
                        <span style={liStyle}>Username</span>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
