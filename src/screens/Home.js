import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Pressable, TextInput } from 'react-native'
import PlanetHeader from '../components/PlanetHeader'
import Text from '../components/text/text'
import { PLANET_LIST } from '../data/planet-list'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { MaterialIcons } from '@expo/vector-icons'

const Home = ({ navigation }) => {
  const [list, setList] = useState(PLANET_LIST)

  const searchFilter = (text) => {
    const filteredList = PLANET_LIST.filter((item) => {
      const itemName = item.name.toLowerCase()
      const useTypedText = text.toLowerCase()

      return itemName.indexOf(useTypedText) > -1
    })
    setList(filteredList)
  }
  return (
    <View style={styles.container}>
      <PlanetHeader />
      <TextInput
        placeholder='Type the planet name here'
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={(text) => searchFilter(text)}
      />

      <FlatList
        contentContainerStyle={styles.list}
        data={list}
        keyExtractor={(item, index) => item.name}
        renderItem={({ item, index }) => {
          const { color, name } = item
          return (
            <Pressable
              onPress={() => {
                navigation.navigate('Details', { planet: item })
              }}
              style={styles.item}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.circle, { backgroundColor: color }]} />
                <Text style={styles.itemName}>{name}</Text>
              </View>

              <MaterialIcons
                name='keyboard-arrow-right'
                size={24}
                color={colors.white}
              />
            </Pressable>
          )
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    justifyContent: 'space-between',
  },
  list: {
    padding: spacing[4],
  },
  itemName: {
    textTransform: 'uppercase',
    marginLeft: spacing[4],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  separator: {
    borderBottomColor: colors.white,
    borderWidth: 0.5,
  },
  searchInput: {
    color: colors.white,
    padding: spacing[4],
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    margin: spacing[5],
  },
})
