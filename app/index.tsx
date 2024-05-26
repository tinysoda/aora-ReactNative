import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl font-pblack' >Aora</Text>
      {/* <StatusBar barStyle="light-content" /> */}
      <Link href="./home" className='text-link'>Go to Home</Link>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View >
  )
}

export default index