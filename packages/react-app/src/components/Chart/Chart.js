
import React from 'react';
import styles from './styles.module.scss';

import { ResponsiveBar } from '@nivo/bar'

import { useGlobalState } from '../../store/state';
import getData from './generator'

/*
  Cf. https://nivo.rocks/bar/
*/
function Chart() {

    const [value, update] = useGlobalState('startingRoyalities');
    // const [data] = useGlobalState('data');
    const data = getData(value)

  return (
    <div className="container">
      <div className={styles.chart}>
        <ResponsiveBar
          data={data}
          keys={['Frank', 'Emily', 'Darren', 'Cathy', 'Bob', 'Alice']}
          indexBy="order"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          colors={{ scheme: 'greys' }}
          defs={[
              {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: '#38bcb2',
                  size: 4,
                  padding: 1,
                  stagger: true
              },
              {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: '#eed312',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
              }
          ]}
          fill={[
              {
                  match: {
                      id: 'fries'
                  },
                  id: 'dots'
              },
              {
                  match: {
                      id: 'sandwich'
                  },
                  id: 'lines'
              }
          ]}
          borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Order of Transaction',
              legendPosition: 'middle',
              legendOffset: 32
          }}
          axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Total Earnings',
              legendPosition: 'middle',
              legendOffset: -50,
              format: value =>
                `$${Number(value).toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                })}`,
          }}
            tooltipFormat={value =>
                `$${Number(value).toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                })}`
            }
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
          legends={[
              {
                  dataFrom: 'keys',
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: 'left-to-right',
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
      />
      </div>
    </div>
  );
}

export default Chart;
