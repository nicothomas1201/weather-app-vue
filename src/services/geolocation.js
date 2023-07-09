function geolocationSupport(){
  return 'geolocation' in navigator
}

const defaultOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 100000,
}

function getCurrentPosition(options = defaultOptions){
  if(!geolocationSupport()) throw new Error('No hay soporte de geolocalicacion en tu navegador')

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
      resolve(position)
    }, () => {
      reject('no hemos podido obtener tu ubicación')
    }, options)
  })
}

export async function getLatLon(options = defaultOptions){
  try{
    const { coords: { latitude, longitude } } = await getCurrentPosition(options)
    return { lat: latitude, lon: longitude }
  } catch(err){
    // TODO: Retornar un objeto para manejar errores
    throw new Error('tuvimos problemos al obtener lattitude y longitud')
  }
  
}