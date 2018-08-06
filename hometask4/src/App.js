import React, {Component} from 'react';
import Footer from './structure/Footer';
import Wrapper from './structure/Wrapper';
import './index.css';
import 'antd/dist/antd.css';

class App extends Component {
    render() {
        return(
            <div>
                <Wrapper/>
                <Footer/>
            </div>
        )
    }
}

export default App;
