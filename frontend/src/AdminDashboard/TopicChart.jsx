import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const TopicsPolarAreaChart = ({ data }) => {
  const topics = data.map(item => item.topic);

  const chartData = {
    labels: topics,
    datasets: [
      {
        data: data.map(item => item.relevance),
        backgroundColor: [
          '#8A3FFC',
          '#20D5D2',
          '#A11950',
          '#4F2196',
          '#092858',
        ],
        borderColor: [
          '#8A3FFC',
          '#20D5D2',
          '#A11950',
          '#4F2196',
          '#092858',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 1,
        max: 5,
      },
    },
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Topics Chart
      </Heading>
      <PolarArea data={chartData} options={chartOptions} />
    </Box>
  );
};

export default TopicsPolarAreaChart;
