// Model weather object for storage and searching

const createWeatherObject = (currentWeatherData) => {
  const currentLocationObject = {
    latInput: currentWeatherData.data[0].lat,
    lonInput: currentWeatherData.data[0].lon,
    cityInput: currentWeatherData.data[0].city_name,
    stateInput: currentWeatherData.data[0].state_code,
    countryInput: currentWeatherData.data[0].country_code,
    uniqueID: `${currentWeatherData.data[0].city_name},${currentWeatherData.data[0].state_code},${currentWeatherData.data[0].country_code}`,
  }
  return currentLocationObject
}

const checkIfDuplicate = (searchItem, newList) => {
  const found = newList.findIndex(
    (element) => element.uniqueID === searchItem.uniqueID
  )
  return found !== -1
}
const addToSearchList = (currentWeatherData, searchList, setSearchList) => {
  // On save, create an object storing the current location.  Store that in state, and add to list of saved searches.
  const currentLocationObject = createWeatherObject(currentWeatherData)
  // setSearchList([...searchList, currentLocationObject])
  if (!checkIfDuplicate(currentLocationObject, searchList)) {
    setSearchList([...searchList, currentLocationObject])
  }
}

export { createWeatherObject, addToSearchList }
