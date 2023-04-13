import { CircleF, GoogleMap, PolygonF } from '@react-google-maps/api'
import React from 'react'

const AreaSelect = () => {
  const [shape, setShape] = React.useState('circle')
  const [polygonPath, setPolygonPath] = React.useState([])

  const center = { lat: 19.07, lng: 72.87 }

  return (
    <>
      <h1 className='title'>Selecting Area In A Map</h1>
      <div>
        <input type='radio' name='area' value='circle' defaultChecked onChange={(e) => setShape(e.target.value)} />
        <label htmlFor='circle'>Circle</label>
        <input type='radio' name='area' value='polygon' onChange={(e) => setShape(e.target.value)} />
        <label htmlFor='polygon'>Polygon</label>
      </div>
      {shape === 'polygon' && <div className='polygon-tip'>Click on the map to add points to the polygon.</div>}
      <GoogleMap
        mapContainerClassName='map-container'
        zoom={13}
        center={center}
        options={{ streetViewControl: false, mapTypeControl: false }}
        onClick={
          shape === 'polygon' &&
          (e => {
            const newPolygonPath = [...polygonPath, { lat: e.latLng.lat(), lng: e.latLng.lng() }]
            setPolygonPath(newPolygonPath)
          })
        }
      >
        {shape === 'circle' ? (
          <CircleF center={center} radius={1000} editable draggable />
        ) : (
          <PolygonF editable draggable path={polygonPath} />
        )}
      </GoogleMap>
    </>
  )
}

export default AreaSelect
