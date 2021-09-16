import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const AddToCart = ({ navigation }) => {
    const handleOnPress = () => {
        navigation.navigate("Payment")
    }

    const handleOnPrevious = () => {
        navigation.navigate('Online')
    };

    const handleOnSkip = () => {
        navigation.navigate("Payment")
    }

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.title}>ADD TO CART</Text>

                <Text style={styles.loremText}>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                </Text>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../assets/images/cart.png")}></Image>
            </View>

            <View style={styles.nextContainer}>
                <TouchableOpacity style={styles.pressButton} onPress={handleOnPress}>
                    <Text style={styles.nextButton}>Next</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.swipeContainer}>

                <TouchableOpacity>
                <Text style={styles.skipPre} onPress = {handleOnPrevious}>Previous</Text>
                </TouchableOpacity>

                <View style={styles.swipeContainer}>
                    <Text style={styles.swipeOne}></Text>
                    <Text style={styles.swipeTwo}></Text>
                    <Text style={styles.swipeThird}></Text>
                </View>

                <TouchableOpacity>
                    <Text style={styles.skipButton} onPress = {handleOnSkip}>Skip</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default AddToCart;

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
        flexDirection : 'row',
        
    },

    swipeOne: {
        height: 10,
        width: 8,
        backgroundColor: "#D0CAEB",
        marginTop: 58,
        marginHorizontal: -130,
    },

    swipeTwo: {
        height: 11,
        width: 17,
        backgroundColor: "#7A65C6",
        borderRadius: 10,
        marginTop: 58,
        marginHorizontal: 132,
    },

    swipeThird: {
        height: 10,
        width: 8,
        backgroundColor: "#D0CAEB",
        marginTop: 58,
        marginHorizontal: -130,
    },

    skipPre: {
        color : "#BFB4B5",
        marginTop: 50,
        marginRight: 200,
        left: -30,
    },

    skipButton: {
        color : '#BFB4B5',
        marginTop: 50,
        right: -35,
    },

})