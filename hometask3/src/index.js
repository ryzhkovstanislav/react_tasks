import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import '../src/style.css';

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

ReactDom.render(<App/>, document.getElementById('root'));
