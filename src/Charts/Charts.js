import React from 'react'
import { Link } from 'react-router-dom';
import { Chart } from '../Dash/Chart';
import { PieChart } from '../Dash/PieChart';
import { BarChart } from './BarChart';

function Charts() {
    return (
        <div class="container-fluid">
            <h1 class="h3 mb-2 text-gray-800">Charts</h1>
            <p class="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
                The charts below have been customized - for further customization options, please visit the <Link
                    target="_blank" to="https://www.chartjs.org/docs/latest/">official Chart.js
                    documentation</Link>.</p>

            <div class="row">

                <div class="col-xl-8 col-lg-7">


                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                                <Chart />
                            </div>

                            Styling for the area chart can be found in the
                            <code>/js/demo/chart-area-demo.js</code> file.
                        </div>
                    </div>


                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Bar Chart</h6>
                        </div>
                        <div class="card-body">
                            <div class="chart-bar">

                                <BarChart />



                            </div>

                            Styling for the bar chart can be found in the
                            <code>/js/demo/chart-bar-demo.js</code> file.
                        </div>
                    </div>

                </div>

                <div class="col-xl-4 col-lg-5">
                    <div class="card shadow mb-4">

                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Donut Chart</h6>
                        </div>

                        <div class="card-body">
                            <div class="chart-pie pt-4">
                                <PieChart />
                            </div>

                            Styling for the donut chart can be found in the
                            <code>/js/demo/chart-pie-demo.js</code> file.
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Charts