import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

import { Redirect, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from "../constants"
import CustomButton from '@/components/CustomButton'

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className='w-full justify-top items-center min-h-[85vh] px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />

          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless Possibilites With {' '}
              <Text className='text-secondary-200'>Aora</Text>
              {/* <Image
                source={images.path}
                className='w-[130px] h-[15px]'
                resizeMode='contain'
              /> */}
            </Text>
          </View>
          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center '>
            Where creativity meets notivation: embark on a journey of limitless exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
            textStyles={''}
            isLoading={false} />

        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
      {/* <SafeAreaView style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/(tabs)/App.tsx" /> */}
    </SafeAreaView >
  )
}

export default App