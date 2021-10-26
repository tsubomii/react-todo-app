import React from 'react';


export default class PerfMarker extends React.Component {
  constructor(props) {
    super(props);
    this.markerName = props.markerName;
    performance.mark(`${this.markerName}-start`);
  }

  componentDidMount() {
    performance.mark(`${this.markerName}-end`);
    performance.measure(`${this.markerName}`, `${this.markerName}-start`, `${this.markerName}-end`);
  }
}