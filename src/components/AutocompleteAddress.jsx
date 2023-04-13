import { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'

const AutocompleteAddress = () => {
  const [autocomplete, setAutocomplete] = useState(null)
  const [address, setAddress] = useState('')

  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete)
  }

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      setAddress(autocomplete.getPlace().formatted_address)
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  }

  return (
    <>
      <h1 className='title'>Using Autocomplete For Addresses</h1>
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}
      >
        <input
          type="text"
          placeholder="Search for a place"
          className='autocomplete-input'
        />
      </Autocomplete>
      {
        address !== '' && (
          <p className='autocomplete-result'>
            The place you have selected is:
            <br />
            {address}
          </p>
        )
      }
    </>
  )
}

export default AutocompleteAddress