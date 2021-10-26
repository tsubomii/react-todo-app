import React from 'react';
import TodoItem from './TodoItem';
import PerfMarker from './PerfMarker';
import {MSG_NO_ITEMS} from '../../assets/text/en_US';

export default class FilteredList extends PerfMarker {
    render() {
        const { items, changeStatus } = this.props;

        if (items.length === 0) {
            return (
                <p className="alert alert-info">{MSG_NO_ITEMS}</p>
            );
        }

        return (
            <ul className="list-unstyled">
                {items.map(item => (
                    <TodoItem key={item.id} data={item} changeStatus={changeStatus} />
                ))}
            </ul>
        );
    }
}