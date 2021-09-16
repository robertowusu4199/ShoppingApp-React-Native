import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const PaymentSuccessful = ({ navigation }) => {
    const handleOnPress = () => {
        navigation.navigate("Online")
    }

    const handleOnPrevious = () => {
        navigation.navigate('Cart')
    };
    
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.title}>PAYMENT SUCCESSFUL</Text>

                <Text style={styles.loremText}>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                </Text>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../assets/images/purchase.png")}></Image>
            </View>

            <View style={styles.nextContainer}>
                <TouchableOpacity style={styles.pressButton} onPress={handleOnPress}>
                    <Text style={styles.nextButton}>Next</Text>
                </TouchableOpacity>
            </View>

            <View>

                <View style={styles.swipeContainer}>
                    <Text style={styles.swipeOne}></Text>
                    <Text style={styles.swipeTwo}></Text>
                    <Text style={styles.swipeThird}></Text>
                </View>

                <TouchableOpacity>
                <Text style={styles.skipPre} onPress = {handleOnPrevious}>Previous</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default PaymentSuccessful;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 40,
        marginTop: 80,
    },

    title: {
        fontSize: 25,
        fontWeight: "bold",
    },

    loremText: {
        fontSize: 15,
    },

    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },

    image: {
        width: 300,
        height: 230,
    },

    nextContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
    },

    pressButton: {
        borderRadius: 50,
        backgroundColor: "#7A65C6",
        width: 120,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },

    nextButton: {
        color: "white",
        fontWeight: "bold",
    },

    swipeContainer: {
        flexDirection: "row",
        justifyContent: "center",
        flex : 1,
        marginTop: 40,
    },

    swipeOne: {
        height: 10,
        width: 8,
        backgroundColor: "#D0CAEB",
        marginTop: 10,
    },

    swipeTwo: {
        height: 10,
        width: 8,
        backgroundColor: "#D0CAEB",
        marginTop: 10,
        marginHorizontal: 2,
    },

    swipeThird: {
        height: 11,
        width: 17,
        backgroundColor: "#7A65C6",
        borderRadius: 10,
        marginTop: 10,
    },

    skipPre: {
        color : "#BFB4B5",
        marginRight: 0,
        marginTop: 5,
        left: -30,
    },

})