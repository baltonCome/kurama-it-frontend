import axios from 'axios';



const countries = axios.create ({
    
  baseURL:'https://countriesnow.space/api/v0.1/countries'
})

export default countries;