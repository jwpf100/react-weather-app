const currentLocationSelection = 'currentLocationSelectionLocal'
const locationList = 'locationListLocal'

// Set localstorage

const storeCurrentLocationLocal = (locationObject) => {
  window.localStorage.setItem(
    currentLocationSelection,
    JSON.stringify(locationObject)
  )
}

const storeLocationListLocal = (locationObject) => {
  window.localStorage.setItem(locationList, JSON.stringify(locationObject))
}

// Get localstorage

const getCurrentLocationLocal = () => {
  const localStorageData = window.localStorage.getItem(currentLocationSelection)
  return localStorageData === null || localStorageData === 'undefined'
    ? {}
    : JSON.parse(localStorageData)
}

const getLocationListLocal = () => {
  const localStorageData = window.localStorage.getItem(locationList)
  return localStorageData === null || localStorageData === 'undefined'
    ? []
    : JSON.parse(localStorageData)
}

// Remove

const removeCurrentLocation = () => {
  window.localStorage.removeItem(currentLocationSelection)
}

const removeLocationList = () => {
  window.localStorage.removeItem(locationList)
}

export {
  storeCurrentLocationLocal,
  storeLocationListLocal,
  getCurrentLocationLocal,
  getLocationListLocal,
  removeCurrentLocation,
  removeLocationList,
}
