import react from 'react';
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({

    container:{
        marginBottom:15,
        padding:10,
        borderRadius:8,
        backgroundColor:"#FFF",
    },

    headCard:{
        marginBottom:5,
    },

    titleProduto:{
        fontSize:18,
        fontWeight:"bold",
        textAlign:"left",
    },

    containerBodyCard:{
        flexDirection:"column",
        justifyContent:"space-between",
    },

    containerElement:{
        borderWidth:.6,
        alignItems:"center",
        alignContent:"center",
        alignSelf:"center",
        width:120,
        marginBottom:2,
        marginTop:2,
        padding:10,
        borderRadius:3,

    },

    containerLineElement:{
        flexDirection:"row",
        justifyContent:"space-around"
    },

    textElement:{
        color:"#000",
        fontSize:16,
    },

    footer:{
        marginBottom:2,
        marginTop:2,
        padding:10,
        borderRadius:3,
        alignItems:"center",
        alignContent:"center",
        
        
    },

    textfooter:{
        color:"#FFF",
    }

});

export default styles;
