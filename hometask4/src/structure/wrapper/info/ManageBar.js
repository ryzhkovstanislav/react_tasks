import React, {Component} from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['city', 'email'];

const Div = styled.div`
    background: #eeeeee;
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.2em;
    justify-items: center; 
    grid-auto-rows: 3em;
`;

class ManageBar extends Component {
    state = {
        arr: ['city'],
    };

    renderCheckbox = () => {
        return this.state.arr.map((el) => {
            return(
                <h3 key={el}>{el}: {this.props[el]}</h3>
            )
        });
    };

    onChangeHandler = (checkedValues) => {
        this.setState({
            arr: checkedValues,
        });
    };

    render() {
        return(
            <Div>
                <h1>Информация о лице</h1>
                <div>
                    <CheckboxGroup
                        options={plainOptions}
                        defaultValue={['city']}
                        onChange={this.onChangeHandler}
                    />
                </div>
                {this.renderCheckbox()}
            </Div>
        )
    }
}

export default ManageBar;
