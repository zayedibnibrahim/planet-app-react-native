import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const PlanetHeader = ({ backBtn, title = 'The Planet' }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable
          style={{ marginRight: spacing[4] }}
          onPress={() => {
            navigation.goBack()
          }}
        >
          <AntDesign name='left' size={24} color='white' />
        </Pressable>
      )}

      <Text preset='h2'>{title}</Text>
    </View>
  )
}

export default PlanetHeader

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomColor: colors.white,
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
