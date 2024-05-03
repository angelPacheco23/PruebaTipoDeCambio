import React from 'react';
import { useEffect, useState } from 'react';

//Url de la api del tipo de cambio 
const URL = 'https://v6.exchangerate-api.com/v6/225d7dee27ebaa840d46b943/pair/USD/MXN'


export default function USDMXN() {

  //El estado del componente se gestiona mediante estas variables

  //Almacena la cantidad de dolares
  const [amount, setAmount] = useState(1);

  //Almacena la cantidad correspondiente en pesos mexicanos
  const [exchangeRate, setExchangeRate] = useState(0);

  //Se utiliza para realizar una solicitud HTTP a la API
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setExchangeRate(data.conversion_rate));
  }, []);

  //Actualiza el estado amount cuando el usuario cambia el valor del input de texto
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  //Calcula el total multiplicando el valor de amount por el valor de exchangeRate y se redondea a dos decimales
  const convertedAmount = (amount * exchangeRate).toFixed(2);

  return (
    <div>
      <input type="number" value={amount} onChange={handleAmountChange} />
      <img src='/eu.png' width='60px' align='center' />
      USD
      <div>=</div>
      {/* Se muestra la cantidad convertida */}
      <div>{convertedAmount} MXN</div>
      <img src='/mexico.png' width='60px' align='center' />
    </div>
  )
}
