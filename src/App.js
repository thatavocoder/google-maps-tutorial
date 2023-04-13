import { useLoadScript } from '@react-google-maps/api';
import MapWithMarker from './components/MapWithMarker';
import AutocompleteAddress from './components/AutocompleteAddress';
import './App.css';
import AreaSelect from './components/AreaSelect';

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  })
  return (
    <div className="App">
      {
        isLoaded ? (
          <>
            <MapWithMarker />
            <AutocompleteAddress />
            <AreaSelect />
          </>
        ) : <h3>Loading...</h3>
      }
    </div>
  );
}

export default App;
