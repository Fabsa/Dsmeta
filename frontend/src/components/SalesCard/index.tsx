
import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationsButton';
import './styles.css';

function SalesCard() {
    
    const min = new Date(new Date().setDate(new Date().getDate() - 365));//processa a data atual com um ano atras
    const max = new Date();
  //  const date = new Date(new Date().setDate(new Date().getDate() - 365));
   const [minDate, setMinDate] = useState(new Date(min));
   const [maxDate, setMaxDate] = useState(new Date(max));
                   //setMaxDate altera o valor de MinDate ou MaxDate

     useEffect(() =>{
         axios.get("https://dsmeta-fabioaraujo.herokuapp.com/sales?minDate=2021-11-01&maxDate=2021-12-31")
         .then (response=>{ console.log(response.data)})
     },[]);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)} //usa a função seMaxdate( recebendo date e onde retorna o valor selecionando preenchendo o campo data do form)
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                        />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <div className="dsmeta-red-btn">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <div className="dsmeta-red-btn">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <div className="dsmeta-red-btn">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}
export default SalesCard;