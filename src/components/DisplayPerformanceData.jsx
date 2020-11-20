import React, { Component } from 'react';
import { getData } from "../modules/performanceData";
import { Bar } from 'react-chartjs-2';

class DisplayPerformanceData extends Component {
  state = {
    performanceData: null
  }

  componentDidMount() {
    this.getPerformanceData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex !== prevProps.updateIndex) {
      this.getPerformanceData()
    }
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({performanceData: result.data.entries}, () => {
      this.props.indexUpdated();
    })
  }

  render () {
    let graph;
    let distances = [];
    let labels = [];
    let age = [];
    
    if (this.state.performanceData !== null) { 
      this.state.performanceData.forEach((entry) => {
        distances.push(entry.data.distance)
        labels.push(entry.data.message)
        age.push(entry.data.age)
      }); 
        // <div>
        //   {this.state.performanceData.map(item => {
        //     return (
        //       <div key={item.id}>
        //         <p>{item.data.message}</p>
        //         <p>{item.data.age}</p>
        //         <p>{item.data.distance}</p>
        //       </div>)
        //   })}
        // </div>
      
    }

    const data = {
      labels: age,
      datasets: [{labels: 'My previous results', data: distances}],
    };

    graph = (
      <Bar data={data} />
    )

    return (
      <div id="index">
        {graph}
      </div>
    )
  }
}

export default DisplayPerformanceData