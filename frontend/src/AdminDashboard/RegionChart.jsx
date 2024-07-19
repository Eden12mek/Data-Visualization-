import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const RegionChart = ({ data }) => {
  
  const regionCounts = {};
  data.forEach(item => {
    if (item.region in regionCounts) {
      regionCounts[item.region]++;
    } else {
      regionCounts[item.region] = 1;
    }
  });

  const chartData = {
    labels: Object.keys(regionCounts),
    datasets: [
      {
        data: Object.values(regionCounts),
        backgroundColor: [
          '#3D79CF',
          '#ED7D31',
          '#00B0F0',
          '#C00000',
          '#70AD47',
          '#7030A0',
          '#F79700',
        ],
        hoverBackgroundColor: [
          '#3D79CF',
          '#ED7D31',
          '#00B0F0',
          '#C00000',
          '#70AD47',
          '#7030A0',
          '#F79700',
        ],
      },
    ],
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Region Distribution
      </Heading>
      <Doughnut data={chartData} />
    </Box>
  );
};

export default RegionChart;
