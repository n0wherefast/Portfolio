"use client"
import React, { useState, useEffect } from 'react'
import { PiSunBold } from 'react-icons/pi'

const getWeatherData = async () => {
  const res = await fetch('/api/weather')
  if (!res.ok) throw new Error('Failed to fetch weather')
  return res.json()
}

function Weather() {
  const [data, setData] = useState<any>(null)
console.log(data)
  useEffect(() => {
    let mounted = true
    getWeatherData()
      .then((res) => {
        if (mounted) setData(res)
      })
      .catch(() => {
        if (mounted) setData(null)
      })
    return () => {
      mounted = false
    }
  }, [])

  const temp = data?.current_weather?.temperature ?? '--'
  const code = data?.current_weather?.weathercode
  const wind = data?.current_weather?.windspeed ?? '--'
  const timeStr = data?.current_weather?.time
  let formattedDateTime = ''
  if (timeStr) {
    try {
      const d = new Date(timeStr)
      formattedDateTime = d.toLocaleString(undefined, { dateStyle: 'medium'})
    } catch (e) {
      formattedDateTime = timeStr
    }
  }

  const weatherCodeToIcon = (c:any) => {
    // Mapping based on Open-Meteo weather codes
    // https://open-meteo.com/en/docs
    switch (c) {
      case 0:
        return { icon: '☀️', desc: 'Clear sky' }
      case 1:
      case 2:
      case 3:
        return { icon: '⛅', desc: 'Partly cloudy' }
      case 45:
      case 48:
        return { icon: '🌫️', desc: 'Fog' }
      case 51:
      case 53:
      case 55:
        return { icon: '🌦️', desc: 'Drizzle' }
      case 61:
      case 63:
      case 65:
        return { icon: '🌧️', desc: 'Rain' }
      case 71:
      case 73:
      case 75:
      case 77:
        return { icon: '❄️', desc: 'Snow' }
      case 80:
      case 81:
      case 82:
        return { icon: '🌧️', desc: 'Rain showers' }
      case 95:
      case 96:
      case 99:
        return { icon: '⛈️', desc: 'Thunderstorm' }
      default:
        return { icon: '📡', desc: 'Unknown' }
    }
  }

  const { icon, desc } = weatherCodeToIcon(code)

  return (
    <div className={`flex items-center gap-3 p-1 mr-2 ml-2`}>
      <div className="flex md:flex-row flex-col gap-4 items-start py-2 px-2 ">
        <div className="flex  gap-4 items-start text-md ">
              <h3 className="font-semibold md:text-lg">Catania</h3>
              <div className="flex items-center gap-2">
                <span className="md:text-xl">{icon}</span>
                <span className="md:text-lg">{temp}°C</span>
              </div>
            {formattedDateTime ? (
              <span className="md:text-lg text-gray-200">{formattedDateTime}</span>
            ) : null}
          </div>
      </div>
    </div>
  )
}

export default Weather