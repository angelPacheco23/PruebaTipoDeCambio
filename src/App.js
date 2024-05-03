import './App.css';
import { useState } from 'react';

//IMPORTACIONES DE LOS COMPONENTES DONDE SE REALIZA LAS CONVERSIONES
import USDMXN from './USDMXN';
import MXNUSD from './MXNUSD';

function App() {

  //Almacena la opción seleccionada por el usuario en el menú desplegable
  const [selectedOption, setSelectedOption] = useState('');

  //Se encarga de actualizar el estado selectedOption cada vez que el usuario cambia la opción seleccionada en el menú desplegable.
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Conversor de divisas MXN y USD</h1>
      </div>


      <div className="Content">
        <select onChange={handleSelectChange}>
          <option value=''>Seleccione una opción</option>
          <option value='USDMXN'>USD - MXN </option>
          <option value='MXNUSD'>MXN - USD</option>
        </select>

        {/* Se renderiza el componente correspondiente a la opción seleccionada */}
        {selectedOption === 'USDMXN' && <USDMXN />}
        {selectedOption === 'MXNUSD' && <MXNUSD />}
      </div>
    </div>
  );
}

export default App;