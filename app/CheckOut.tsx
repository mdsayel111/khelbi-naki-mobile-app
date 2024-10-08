import Button from '@/components/partials/element/Button';
import Text from '@/components/partials/element/CustomText';
import ScreenContainer from '@/components/partials/element/ScreenContainer';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const CheckOut = () => {
 
    function handleConfirm() {

    }

    function handleCancel() {

    }

    function handleViewConfirmedPlayer() {

    }
    return (
        <ScreenContainer>
            <View style={styles.constainer}>
                <Text style={{ fontSize: 25, textAlign: "center" }}>Check Out Upcoming Game</Text>

                {/* match details section */}
                <View style={styles.matchDetailsContainer}>
                    <View style={styles.matchDetails}>
                        <Text style={styles.matchDetailsText}>
                            Next Match Day:
                        </Text>
                        <Text style={styles.matchDetailsText}>
                            28th September
                        </Text>
                    </View>
                    <View style={styles.matchDetails}>
                        <Text style={styles.matchDetailsText}>
                            Venue:
                        </Text>
                        <Text style={styles.matchDetailsText}>
                            XYZ Stadium
                        </Text>
                    </View>
                </View>

                {/* game slot section */}
                <View>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                        Game Slot
                    </Text>
                    <View style={styles.slotProgressBar}>
                        <View style={styles.slotBookedBar}><Text style={{ marginRight: 10 }}>10</Text></View>
                        <Text style={{ marginRight: 10 }}>10</Text>
                    </View>
                </View>

                <Text>
                    4 out of 10 guest slot is filled up Hurry up and confirm your slot!
                </Text>

                {/* action section */}
                <View style={{ width: "70%", marginHorizontal: "auto" }}>
                    <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 10 }}>Are you coming?</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Button title='Yes' onPress={handleConfirm} style={styles.actionButton} textStyle={{ fontSize: 15 }} />
                        <Button title='No' onPress={handleCancel} style={styles.actionButton} textStyle={{ fontSize: 15 }} />
                    </View>
                </View>

                <Button title='View Confirmed Players' onPress={handleViewConfirmedPlayer} />
            </View>
        </ScreenContainer>
    );
};

const styles = StyleSheet.create({
    constainer: {
        width: "70%",
        gap: 30
    },
    matchDetailsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    matchDetails: {
        borderColor: "black",
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    matchDetailsText: {
        fontSize: 16
    },
    slotProgressBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 30,
        borderColor: "black",
        borderWidth: 1
    },
    slotBookedBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        height: 30 - 2,
        backgroundColor: "#D9D9D9",
        width: "10%"
    },
    actionButton: {
        paddingHorizontal: 15,
        paddingVertical: 0
    }
})

export default CheckOut;