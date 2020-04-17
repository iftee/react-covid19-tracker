import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

export const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const lineChart = (
    dailyData.length ? (
      <Line
        data={ {
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infected',
              borderColor: '#ffc107',
              fill: false,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Died',
              borderColor: '#f44336',
              fill: false,
            },
          ]
        } }
        options={ {
          legend: {
            labels: {
              fontStyle: 'normal',
              fontFamily: "'Inter', sans-serif",
              fontColor: '#9e9e9e',
            },
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontStyle: 'normal',
                  fontFamily: "'Inter', sans-serif",
                  fontColor: '#9e9e9e',
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontStyle: 'normal',
                  fontFamily: "'Inter', sans-serif",
                  fontColor: '#9e9e9e',
                },
              },
            ],
          },
        } }
      />
    ) : null
  );

  const barChart = (
    confirmed ? (
      <Bar
        data={ {
          labels: ['Infected', 'Recovered', 'Died'],
          datasets: [
            {
              data: [confirmed.value, recovered.value, deaths.value],
              label: 'People',
              backgroundColor: ['#ffc107', '#4caf50', '#f44336'],
            }            
          ],
        } }
        options={ {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: [`Current sitaution in ${ country }`, 'Historical data are not availble'],
            fontStyle: 'normal',
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontColor: '#9e9e9e',
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontStyle: 'normal',
                  fontFamily: "'Inter', sans-serif",
                  fontColor: '#9e9e9e',
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontStyle: 'normal',
                  fontFamily: "'Inter', sans-serif",
                  fontColor: '#9e9e9e',
                },
              },
            ],
          },
        } }
      />
    ) : null
  );
  
  return (
    <>
      { country? barChart : lineChart }
    </>
  );
}