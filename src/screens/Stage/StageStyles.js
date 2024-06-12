import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        fontSize: 5,
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: 'center',
        backgroundColor: 'black'
    },
    gameScreenStyle: {
        backgroundColor: 'red',
        margin: 5,
        flex: 1

    },
    style1: {
        fontSize: 5,
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: 'center'

    },
    edge: {

        flex: 1,
        fontSize: 1,
        fontStyle: "italic",
        fontWeight: "bold"

    },
    board1: {

        //flexDirection:"row",
        margin: 5

    },
    buttons: {
        flex: 1,
        flexDirection: "row",
        margin: 1,
        alignItems: 'center',
    },
    statsBoard: {
        margin: 1,
        flex: 0.,
        flexDirection: 'row'
    },
    fighterImageStyle: {
        flex: 1,
        flexDirection: 'row',
        margin: 2


    },
    gamePrompt: {

        flex: 1,
        backgroundColor: 'blue'
    },
    gameStatus: {
        flex: 1,
        backgroundColor: 'pink'
    },
    image: {
        margin: 1,
        width: 197,
        height: 290

    }
});

export  { styles };
