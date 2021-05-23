
import { Provider } from 'react-redux';
import './App.css';
import Table from "./Services/Table"
import {store} from "./store/store/store"
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { useState } from 'react';
function App() {
  const [dark,setDark]=useState(false);

const DarkTheme={
  backgroundColor : dark ? "gray" : "white",
  color :dark ? "#C0C0C0" :null
}

const icon =dark ? <Brightness4Icon/> :<Brightness7Icon/>
  return (
    <div style={DarkTheme}>
      <button onClick={()=>setDark(previousTheme => !previousTheme)}>{icon}</button>
      <Provider store={store}>

      <Table DarkTheme={DarkTheme}/>
      </Provider>
    </div>
  );
}

export default App;
