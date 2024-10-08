import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import commonStyles from '@/styles'
import { Ionicons } from '@expo/vector-icons'

export default function Footer() {
    return (
        // {/* Footer */ }
        < View style={[styles.footer, commonStyles.border]} >
            {/* "All rights reserved" Section */}
            < Text style={styles.footerText} > All rights reserved</Text >

            {/* Social Icons */}
            <View></View >

            {/* Footer Note */}
            <Text>
                Made with <Ionicons name="heart" size={16} color="red" /> by Antropous
            </Text >
        </View >
    )
}


const styles = StyleSheet.create({
    footer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        bottom: 0,
        left: 0,
        right: 0,
    },
    footerText: {
        color: "black",
    },
})