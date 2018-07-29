import React, {Component} from 'react';

const navStyle = {
    background: '#3F729B'
};

const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
};

const liStyle = {
    margin: '20px 40px',
};

const aStyle = {
    color: 'white',
    fontSize: '20px',
    textDecoration: 'none',
};

class Nav extends Component {
    renderNavItems = (navItems) => navItems.map(item => (
        <li key={item.id} style={liStyle}>
            <a style={aStyle} href="">
                {item.name}
            </a>
        </li>
    ));

    render() {
        return(
            <nav style={navStyle}>
                <div className="container">
                    <ul style={ulStyle}>
                        {this.renderNavItems(this.props.navItems)}
                        </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;
