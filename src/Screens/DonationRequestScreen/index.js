import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { donationRequest } from '../../Shared/components/Card/DonationCard/Data'
import DonationCard from '../../Shared/components/Card/DonationCard'

const DonationRequestScreen = () => {
    return (
        <FlatList
        data={donationRequest}
        renderItem={({item})=><DonationCard item={item}/>}
        />
    )
}

export default DonationRequestScreen

const styles = StyleSheet.create({})