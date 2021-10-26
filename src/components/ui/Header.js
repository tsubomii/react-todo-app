import React from 'react';
import InputWrapper from './InputWrapper';
import PerfMarker from './PerfMarker';

export default class Header extends PerfMarker{
    render() {
        return (
            <header>
                <h1>Things To Do</h1>
                <InputWrapper {...this.props} />
            </header>
        );
    }
}
