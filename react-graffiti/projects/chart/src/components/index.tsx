import { ApexOptions } from 'apexcharts';
import React from 'react';
import Chart from 'react-apexcharts';

export const COLORS = ['#d6d4d1', '#ff7d75', '#ff9d69', '#ffb84f', '#ffcb40', '#ffe440', '#d6e46e', '#cde9a3', '#a5dd96', '#8ccfb1', '#7cadf8'];

export default function ApexChart() {
    const coverages = [44, 55, 41, 64, 22, 43, 21];
    const scales = [1023, 23451, 2342, 534, 123, 6547, 49];
    const multiAxisOptions: ApexOptions = {
        series: [
            {
                data: coverages,
                name: 'coverage',
                type: 'bar',
                color: 'lightgreen'
            },
            {
                data: scales,
                name: 'scale',
                color: 'lightblue'
            }
        ],
        xaxis: {
            categories: ['2022-08-01', '2022-08-02', '2022-08-03', '2022-08-04', '2022-08-05', '2022-08-06', '2022-08-07']
        },
        yaxis: [
            {
                title: {
                    text: 'coverage'
                },
                labels: {
                    formatter: function (val: number) {
                        return val + '%';
                    }
                },
                min: 0,
                max: 100
            },
            {
                opposite: true,
                title: {
                    text: 'scale'
                },
                min: 0,
                max: Math.max(...scales) + Math.max(...scales) / 10
            }
        ],
        legend: {
            horizontalAlign: 'center',
            position: 'top',
            offsetY: 17,
            offsetX: 0
        },
        noData: {
            text: 'No data'
        },
        chart: {
            toolbar: {
                show: false,
                tools: {
                    download: false,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false
                }
            }
        }
    };
    const treemapOptions: ApexOptions = {
        series: [
            {
                data: [
                    {
                        x: 'abc()',
                        y: 123,
                        fillColor: COLORS[0],
                        goals: '432'
                    },
                    {
                        x: 'd()',
                        y: 345,
                        fillColor: COLORS[1]
                    },
                    {
                        x: 'e()',
                        y: 645,
                        fillColor: COLORS[2]
                    },
                    {
                        x: 'f()',
                        y: 1234,
                        fillColor: COLORS[3]
                    },
                    {
                        x: 'g()',
                        y: 645,
                        fillColor: COLORS[4]
                    },
                    {
                        x: 'h()',
                        y: 12,
                        fillColor: COLORS[5]
                    },
                    {
                        x: 'u()',
                        y: 455,
                        fillColor: COLORS[6]
                    },
                    {
                        x: 'y()',
                        y: 35,
                        fillColor: COLORS[7]
                    },
                    {
                        x: 't()',
                        y: 432,
                        fillColor: COLORS[8]
                    },
                    {
                        x: 'r()',
                        y: 654,
                        fillColor: COLORS[9]
                    }
                ]
            }
        ],
        chart: {
            toolbar: {
                show: false,
                tools: {
                    download: false,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false
                }
            }
        },
        tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

                return `<div style="padding: 8px 12px; background-color: ${data.fillColor}; color: white; border-radius: 2px;">
                    <div>${data.x}</div>
                    <div>scale: ${data.y}</div>
                    <div>scale: ${coverages[seriesIndex]}</div>
                    </div>`;
            }
        }
    };

    return (
        <div>
            <p>Multi-axis chart</p>
            <Chart options={multiAxisOptions} series={multiAxisOptions.series} type="line" height={350} width={640} />
            <p>Treemap chart</p>
            <Chart options={treemapOptions} series={treemapOptions.series} type="treemap" height={350} width={640} />
        </div>
    );
}
