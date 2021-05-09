import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      weather: ''
    }
  }

  getWeather=async()=>{

    var url="https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139"
    return fetch(url)
    .then(response=>response.json())

    .then(responsejson=>{
        this.setState({
            weather:responsejson
        })
    })
    .catch(error=>{
        console.error(error)
    })
   
;
  }

  componentDidMount=()=>{
    this.getWeather()
  }

  render(){
      if(this.state.weather===''){
        return(<View><Text>Loading...</Text></View>)
      }else{

      
  return (
    <View>
    <Text>Weather</Text>
    <Text>{
        this.state.weather.main.temp
        }</Text>

    <Text>humidity:{
        this.state.weather.main.humidity
        }
    </Text>

    </View>
      
  );}}
}



