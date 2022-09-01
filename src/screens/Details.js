import { Linking, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import PlanetHeader from '../components/PlanetHeader'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { MercurySvg } from '../svg'
import { EarthSvg } from '../svg'
import { JupiterSvg } from '../svg'
import { MarsSvg } from '../svg'
import { NeptuneSvg } from '../svg'
import { SaturnSvg } from '../svg'
import { UranusSvg } from '../svg'
import { VenusSvg } from '../svg'
import Text from '../components/text/text'

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text preset='small' style={{ textTransform: 'uppercase' }}>
        {title}
      </Text>
      <Text preset='h2'>{value}</Text>
    </View>
  )
}

const Details = ({ route }) => {
  const planet = route.params.planet
  const {
    name,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
  } = planet

  const renderImage = () => {
    switch (name) {
      case 'mercury':
        return <MercurySvg />
      case 'earth':
        return <EarthSvg />
      case 'jupiter':
        return <JupiterSvg />
      case 'mars':
        return <MarsSvg />
      case 'neptune':
        return <NeptuneSvg />
      case 'saturn':
        return <SaturnSvg />
      case 'uranus':
        return <UranusSvg />
      case 'venus':
        return <VenusSvg />
      default:
        return
    }
  }

  const onPressLink = () => {
    Linking.openURL(wikiLink)
  }

  return (
    <View style={styles.container}>
      <PlanetHeader backBtn={true} />
      <ScrollView>
        <View style={styles.imageView}>{renderImage()}</View>
        <View style={styles.detailsView}>
          <Text style={styles.name} preset='h1'>
            {name}
          </Text>
          <Text style={styles.description}>{description}</Text>
          <Pressable onPress={onPressLink} style={styles.source}>
            <Text>Source: </Text>
            <Text preset='h4' style={styles.wikipedia}>
              Wikipedia
            </Text>
          </Pressable>
        </View>
        <View style={{ height: 40 }} />
        <PlanetSection title='ROTATION TIME' value={rotationTime} />
        <PlanetSection title='REVOLUTION TIME' value={revolutionTime} />
        <PlanetSection title='RADIUS' value={radius} />
        <PlanetSection title='AVERAGE TEMP' value={avgTemp} />
      </ScrollView>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  imageView: {
    marginTop: spacing[8],
    padding: spacing[5],
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
  },
  name: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginTop: spacing[5],
    lineHeight: 21,
  },
  source: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing[5],
  },
  wikipedia: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  planetSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
  },
})
