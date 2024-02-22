import { LoadingButton } from "@mui/lab"
import { Container, Divider, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"

const WeatherApp = () => {
  const apikey = import.meta.env.VITE_WEATHER_API_KEY
  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    error: false,
    message: "",
  })
  const apiurl = `http://api.weatherapi.com/v1/current.json?key=${apikey}=${city}&aqi=no`
  const onSubmit = async (e) => {
    e.preventDefault()
    console.log("Submit", city)
    setLoading(true)
    setError({
      error: false,
      message: "",
    })
    try {
      if(!city.trim()) throw {message: "Please digit an city"}
      const res = await fetch(apiurl)
      const data = await res.json()
      console.log(data)

    } catch (err) {
      console.log(err)
      setError({
        error: true,
        message: err.message,
      })
    } finally {
      setLoading(false)
    }
  }
  return (
    <Container
      maxWidth="xs"
      sx={{mt: 2}}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>Weather App</Typography>
      <Box
        sx={{display: "grid", gap: 2}}
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}>
          <TextField
            id="city"
            label="City"
            variant="outlined"
            size="small"
            required
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={error.error}
            helperText={error.message} />
          <LoadingButton
            type="submit"
            variant="contained"
            loading={loading}
            loadingIndicator="Loading..."
          >Get</LoadingButton>
      </Box>
      
      <Divider />
      <Typography textAlign="center" sx={{mt: 2, fontSize: "10px"}}>Powered by:{" "}<a href="https://www.weatherapi.com/" title="Weather API"> WatherAPI.com</a></Typography>
    </Container>
  )
}

export default WeatherApp
