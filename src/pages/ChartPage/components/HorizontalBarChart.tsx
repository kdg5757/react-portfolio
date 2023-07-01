import React from 'react';
import { Mix } from '@ant-design/plots';
import { Datum, MixConfig } from '@ant-design/charts';

type Props = Record<string, never>;

const HorizontalBarChart: React.FC<Props> = () => {
  const data = [
    {
      "date": "10月1日",
      "maxTemp": 26,
      "minTemp": 13,
      "type": 'series1',
    },
    {
      "date": "10月2日",
      "maxTemp": 18,
      "minTemp": 9,
      "type": 'series1',
    },
    {
      "date": "10月1日",
      "maxTemp": 23,
      "minTemp": 10,
      "type": 'series2',
    },
    {
      "date": "10月2日",
      "maxTemp": 16,
      "minTemp": 12,
      "type": 'series2',
    }
  ];

  const config: MixConfig = {
    meta: {
      values: {
        min: 0,
        max: 30,
      },
    },
    tooltip: false,
    plots: [
      {
        type: 'bar',
        options: {
          data: data.map((d) => {
            return { ...d, values: [d.minTemp, d.maxTemp] };
          }),
          isGroup: true,
          xField: 'values',
          yField: 'date',
          seriesField: 'type',
          meta: {
            values: {
              min: 0,
              max: 30,
              sync: true
            },
          },
          color: (datum: Datum) => {
            if (datum.type === 'series2') {
              return 'transparent'
            }
            return '#ff0000';
          },
          minBarWidth: 8,
          maxBarWidth: 8,
          tooltip: false,
          dodgePadding: 20
        }
      },
      {
        type: 'bar',
        options: {
          data: data.map((d) => {
            return { ...d, values: [d.minTemp, d.maxTemp] };
          }),
          isGroup: true,
          xField: 'values',
          yField: 'date',
          seriesField: 'type',
          meta: {
            values: {
              min: 0,
              max: 30,
              sync: true
            },
          },
          color: (datum: Datum) => {
            if (datum.type === 'series1') {
              return 'transparent'
            }
            return '';
          },
          tooltip: false,
          dodgePadding: 20
        }
      }
    ]
  };

  return (
    <Mix
      {...config}
    />
  );
};

export default HorizontalBarChart;
