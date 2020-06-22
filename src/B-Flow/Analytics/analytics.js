import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import NavBar from '../NavBar/navBar.js';

const options = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'My chart'
    },
    series: [
        {
            data: [1, 2, 1, 4, 3, 6]
        }
    ]
};

const graph = () => (
    <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
);

const Analytics = () => {
        return (
            <div>
            <NavBar />
            <div className='analytics container-md mx-auto'>
                <div className="pb-5"></div>
                <div className="pb-5"></div>
                <div>
                    <select class="form-control form-control-sm">
                        <option>Inserte una opción de fecha</option>
                        <option>Desde el inicio</option>
                        <option>Último mes</option>
                        <option>Última semana</option>
                        <option>Últimos 3 días</option>
                    </select>
                </div>
                <div className="pb-3"></div>
                <h1 className="">Analíticas</h1>
                <div className="pb-3"></div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <p class="card-title">Número de pedidos enviados</p>
                                <h3 class="card-text">30</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <p class="card-title">Número de pedidos recibidos</p>
                                <h3 class="card-text">50</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <p class="card-title">Número de pedidos rechazados</p>
                                <h3 class="card-text">40</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-5"></div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">[Gráfico]</h1>
                        <p class="lead">[Estoy revisando cómo hacer que se visualicen los gráficos de high charts.]</p>
                    </div>
                </div>
            </div>
            </div>
        )
      }

export default Analytics