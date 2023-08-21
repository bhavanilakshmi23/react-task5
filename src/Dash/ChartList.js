import React from 'react';
import { ChartBox } from './ChartBox';

/*linechart and pie chart datalist*/
export function ChartList() {
    const chartData = [
        {
            title: "Earnings Overview",
            isareaChart: true
        },
        {
            title: "Revenue Sources",
            isareaChart: false
        }
    ];
    return (
        <div class="row">
            {chartData.map(dt => <ChartBox data={dt} />)}
        </div>
    );
}