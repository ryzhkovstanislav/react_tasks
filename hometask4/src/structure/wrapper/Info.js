import React, {Component} from 'react';
import PersonalCard from './info/PersonalCard';
import ManageBar from './info/ManageBar';
import styled from 'styled-components';

const Div = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 10px;
    @media screen and (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`;

const apiUrl = 'https://randomuser.me/api/';

class Info extends Component {
    state = {imageUrl: '', name: '', city: '', email: '',};

    async componentDidMount() {
        const data = await fetch(apiUrl).then(res => res.json());
        const {picture, name, location, email} = data.results[0];
        this.setState({
            imageUrl: picture.large,
            name: `${name.first} ${name.last}`,
            city: location.city,
            email,
        });
    }

    render() {
        const {imageUrl} = this.state;
        console.log(imageUrl);
        return(
            <section>
                <div className='container'>
                    <Div>
                        <PersonalCard
                            imageUrl={this.state.imageUrl}
                            name={this.state.name}
                        />
                        <ManageBar
                            city={this.state.city}
                            email={this.state.email}
                        />
                    </Div>
                </div>
            </section>
        )
    }
}

export default Info;
