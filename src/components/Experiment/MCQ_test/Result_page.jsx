import React from 'react';
import ReactEcharts from 'echarts-for-react'; // Import React wrapper for ECharts

export default function Result_page({ correctCount, totalCount, topicWiseResult, mode }) {
  // Prepare graph data for Stacked Bar Chart (Correct vs Wrong per topic)
  const graphData = Object.keys(topicWiseResult).map(topic => ({
    topic,
    correct: topicWiseResult[topic].correct,
    wrong: topicWiseResult[topic].total - topicWiseResult[topic].correct
  }));

  // Prepare data for Pie Chart (Total Correct vs Wrong answers)
  const pieData = [
    { name: 'Correct', value: correctCount },
    { name: 'Wrong', value: totalCount - correctCount },
  ];

  // Stacked Bar Chart options
  const barChartOption = {
    title: {
      text: 'Topic-wise Performance',
      left: 'center'
    },
    tooltip: {},
    legend: {
      data: ['Correct', 'Wrong'],
      bottom: 10
    },
    xAxis: {
      type: 'category',
      data: graphData.map(data => data.topic)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Correct',
        type: 'bar',
        stack: 'total',
        data: graphData.map(data => data.correct),
        itemStyle: {
          color: '#00c853'
        }
      },
      {
        name: 'Wrong',
        type: 'bar',
        stack: 'total',
        data: graphData.map(data => data.wrong),
        itemStyle: {
          color: '#f44336'
        }
      }
    ]
  };

  // Pie Chart options
  const pieChartOption = {
    title: {
      text: 'Overall Performance',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [
      {
        name: 'Correct vs Wrong',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        data: pieData
      }
    ]
  };

  return (
    <div className={`container ${mode === 'light' ? 'bg-body-tertiary' : 'bg-dark text-light'}`}>
      <h1 className="text-center my-4">Result Summary</h1>
      <h3 className="text-center mb-4">{correctCount}/{totalCount} Correct Answers</h3>

      {/* Table with topic-wise result */}
      <table className={`table ${mode === 'light' ? 'table-light' : 'table-dark'}`}>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Correct</th>
            <th>Total Questions</th>
          </tr>
        </thead>
        <tbody>
          {graphData.map(data => (
            <tr key={data.topic}>
              <td>{data.topic}</td>
              <td>{data.correct}</td>
              <td>{data.correct + data.wrong}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Stacked Bar Chart for Topic-wise Performance using ECharts */}
      <h4 className="text-center mt-5">Performance by Topic</h4>
      <div style={{ width: '100%', height: 300 }}>
        <ReactEcharts option={barChartOption} style={{ height: '100%' }} />
      </div>

      {/* Pie Chart for Correct vs Wrong overall using ECharts */}
      <h4 className="text-center mt-5">Overall Performance</h4>
      <div style={{ width: '100%', height: 300 }}>
        <ReactEcharts option={pieChartOption} style={{ height: '100%' }} />
      </div>

      {/* Button to Restart Test */}
      <div className="text-center my-5">
        <button className="btn btn-primary">Retake Test</button>
      </div>
    </div>
  );
}
