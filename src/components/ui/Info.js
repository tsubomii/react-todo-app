import React from 'react';
import {MODE_NONE} from '../../services/mode';
import PerfMarker from './PerfMarker';
import {INFO_SHORTCUT_KEYS, INFO_CANCEL_SHORTCUT_KEY} from '../../assets/text/en_US';

export default class Info extends PerfMarker {
    render() {
        const message = this.props.mode === MODE_NONE ? INFO_SHORTCUT_KEYS : INFO_CANCEL_SHORTCUT_KEY;

        return <p className="info">{message}</p>;
    }
}