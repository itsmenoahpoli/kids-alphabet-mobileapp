import { View, Image, ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'
import { SPLASH_HEADER, HOME_ICON, SETTINGS_ICON, BIG_LETTERS_ICON, SMALL_LETTERS_ICON } from '@/assets'

const ACTION_BUTTONS = [
  {
    name: 'home',
    label: 'HOME',
    icon: HOME_ICON,
    backgroundColor: '#20B2AA'
  },
  {
    name: 'settings',
    label: 'SETTINGS',
    icon: SETTINGS_ICON,
    backgroundColor: '#FF1493'
  },
  {
    name: 'big_letters',
    label: 'BIG LETTERS',
    icon: BIG_LETTERS_ICON,
    backgroundColor: '#32CD32'
  },
  {
    name: 'small_letters',
    label: 'SMALL LETTERS',
    icon: SMALL_LETTERS_ICON,
    backgroundColor: '#FFD700'
  }
]

export default function Screen() {
  const insets = useSafeAreaInsets()
  const [showTransition, setShowTransition] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTransition(true)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [])
  
  return <View className="flex-1">
   <LinearGradient
      colors={['#d63384', '#f8d7da']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ 
        flex: 1,
        paddingTop: insets.top + 35,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }}
    >
      {!showTransition ? (
        <View className="flex-1 justify-center items-center">
          <Image 
            source={SPLASH_HEADER} 
            style={{ 
              width: 300, 
              height: 200,
              resizeMode: 'contain',
              marginBottom: 40
            }} 
          />
          
          <ActivityIndicator color="#ffffff" />
          <Text className="text-white text-lg font-semibold mt-4">
            Loading
          </Text>
          <Text className="text-white text-sm mt-2 opacity-80">
            Initializing Alphabet Kids App
          </Text>
        </View>
      ) : (
        <View className="flex-1">
          <Image 
            source={SPLASH_HEADER} 
            style={{ 
              width: '100%', 
              height: 200,
              resizeMode: 'cover'
            }} 
          />
          
          <View className="flex-1 px-6 py-6 mt-10">
            <View className="flex-row flex-wrap justify-between">
              {ACTION_BUTTONS.map((button, index) => (
                <TouchableOpacity
                  key={index}
                  className="w-[45%] mb-8 rounded-2xl p-4 items-center shadow-lg"
                  style={{ backgroundColor: button.backgroundColor }}
                  activeOpacity={0.8}
                >
                  {/* <Image 
                    source={button.icon} 
                    style={{ 
                      width: 80, 
                      height: 80,
                      resizeMode: 'contain',
                      borderRadius: 12,
                      marginBottom: 8
                    }} 
                  /> */}
                  <Text className="text-white text-lg font-extrabold text-center">
                    {button.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      )}
    </LinearGradient>
  </View>
}