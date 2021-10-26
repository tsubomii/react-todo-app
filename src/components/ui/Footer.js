import React from 'react';
import Filter from './Filter';
import ButtonWrapper from './ButtonWrapper';
import PerfMarker from './PerfMarker';

export default class Footer extends PerfMarker {
    render() {
        const { count, filter, changeFilter } = this.props;

        return (
            <footer className="clearfix">
                <div className="pull-left buttons">
                    <ButtonWrapper {...this.props} />
                </div>
                <div className="pull-left">
                    {`${count} items left`}
                </div>
                <div className="pull-right">
                    <Filter {...{ filter, changeFilter }} />
                </div>
            </footer>
        );
    }
}

