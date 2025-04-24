import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function FormularioScreen() {
    const [nombre, setnombre] = useState("")
    const [edad, setedad] = useState(0)
    const [email, setemail] = useState("")

    useEffect(() => {
      if ( Number.isNaN(edad)){
        setedad(0)
      }

    }, [edad])
    

    function saludo(){
        console.log("Hola "+ nombre + "tienes"+ edad+ "años");
        Alert.alert("Saludo", "Hola "+ nombre + "tienes"+ edad+ "años")
        setnombre("")
        setedad(0)
        setemail("")
    }

  return (
    <View>
      <Text>FORMULARIO</Text>
      <TextInput
      placeholder='Ingresar nombre'
      onChangeText={ (texto) => (setnombre ( texto )) }
      value={nombre} 
      />

      <TextInput
      placeholder='Ingresar edad'
      onChange={ (texto) => setedad ( +texto  )}
      value={edad.toString() } 
      />


<TextInput
      placeholder='Ingresar email'
      onChangeText={ (texto) => setemail (texto  )}  
      value={email} 
/>

        <Button title='Aceptar' onPress={() => saludo}/> 
        

    </View>
  )
}

const styles = StyleSheet.create({})