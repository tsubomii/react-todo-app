import React from 'react';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import PerfMarker from './PerfMarker';
import { applyFilter, search } from '../../services/filter';

export default class TodoList extends PerfMarker {
    render() {
        const { list, filter, mode, query } = this.props.data;
        const { addNew, changeFilter, changeStatus, changeMode, setSearchQuery } = this.props.actions;
        const count = list.length;
        const items = search(applyFilter(list, filter), query);
        const headerProps = { ...{ addNew, mode, query, setSearchQuery }};
        headerProps.markerName = 'header';
        const filterProps = { ...{ items, changeStatus} };
        filterProps.markerName = 'filteredList';
        const footerProps = { ...{ count, filter, changeFilter, mode, changeMode } };
        footerProps.markerName = 'footer';

        return (
            <div className="container">
                <div className="row">
                    <div className="todolist">
                        <Header {...headerProps} />
                        <FilteredList {...filterProps }/>
                        <Footer {...footerProps}  />
                        <Info mode={mode} markerName='info'/>
                    </div>
                </div>
            </div>
        );
    }

}
