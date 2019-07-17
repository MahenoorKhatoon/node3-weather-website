const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/6e044417b72c676279c0bb95634888f4/'+ latitude +',' +longitude
    
    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to the weather services!',undefined)
        }else if(body.error) {
            callback('Unable to find the location...',undefined)
        }else {
            console.log(body.daily.data[0])
            callback(undefined, body.daily.data[0].summary + 'It is currently '+body.currently.temperature+' degrees out. Todays high is '+body.daily.data[0].temperatureHigh+' and low is '+ body.daily.data[0].temperatueLow+'. There is a '+body.currently.precipProbability+'% chance of rain.')
        }
    })
}

module.exports = forecast