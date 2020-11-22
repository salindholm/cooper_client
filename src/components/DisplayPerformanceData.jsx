import React, { Component } from 'react';
import { getData, saveData } from "../modules/performanceData";
import { Doughnut} from 'react-chartjs-2';

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
    
    if (this.state.performanceData != null) { 
      this.state.performanceData.forEach((entry) => {
        distances.push(entry.data.distance)
        labels.push(entry.data.message)
        age.push(entry.data.age)
      }); 
      
    }

    const data = {
      labels: age,
      datasets: [{
        label: 'My previous results', 
        data: distances,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ], 
      }],
    };

    graph = (
      <Doughnut data={data} />
    )

    return (
      <div id="index">
        {graph}
      </div>
    )
  }
}

export default DisplayPerformanceData