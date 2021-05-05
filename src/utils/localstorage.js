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
  JSON.parse(window.localStorage.getItem(currentLocationSelection))
}

const getLocationListLocal = () => {
  JSON.parse(window.localStorage.getItem(locationList))
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
