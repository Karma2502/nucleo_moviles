import { Image, Modal, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import React, { useState } from 'react'

export default function ImagenesScreen() {
  const [modalVisible, setmodalVisible] = useState(false)

  return (
    <View>
      <Text>IMAGENES</Text>

      <Image 
        source={{ uri: 'https://www.clarin.com/img/2025/03/31/mUekiqzSr_2000x1500__1.jpg'}}
        style={styles.imagen1}
      />

      <TouchableOpacity onPress={() => setmodalVisible(true)}>
        <Text>MODAL</Text>
        <Image 
          source={{ uri: 'https://www.clarin.com/img/2025/03/31/mUekiqzSr_2000x1500__1.jpg' }}
          style={styles.imagen2}
        />
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View>
          <Text>IMAGENES Y MODAL</Text>
          <Image
            source={require("../assets/image/futurama.jpg")}
            style={styles.imagen1}
          />
          <Button title="Salir" onPress={() => setmodalVisible(false)} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  imagen1: {
    width: 600,
    height: 400
  },
  imagen2: {
    width: 600,
    height: 400
  }
})
