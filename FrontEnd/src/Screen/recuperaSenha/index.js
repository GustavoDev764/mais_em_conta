import React,{PureComponent} from 'react';

import {
        View,
        Text,
        StyleSheet,
        TouchableOpacity,
        Image,
        Dimensions,
} from 'react-native';

import {FontAwesome, Feather} from '@expo/vector-icons';
import { SocialIcon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';

//import components
import InputText from '../../Components/EditarPerfil/input';
import BodyLogin from '../../Components/login/bodylogin';
import Theme from '../../Style';



const {height, width} = Dimensions.get("window");


export default class RecuperaSenhaScreen extends PureComponent{

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        //Drawer
        drawerLabel: "Login",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />,
              
    };

    //Navega por telas
    
    
    openRouteBack = (Screen) => {
        return this.props.navigation.navigate(Screen,
           {routeBack: "RecuperaSenhaScreen"} );
    }

    //Fim de Navegações


    render(){

        const {navigation} = this.props;

        var routeBack = navigation.getParam('routeBack');

        routeBack = routeBack != null ? routeBack : 'LoginScreen';

        return(
            <BodyLogin>
       
                <View style={styles.container}>

                    <View style={styles.containerLogo}>

                        <Image 
                            source={require("../../../assets/logo.png")} 
                            style={styles.logo}
                            resizeMode={"contain"}
                        />

                    </View>

                    <View style={styles.form}>

                        <View style={styles.containerInput}>

                            <InputText
                                nameInput = {null} 
                                inputStyle= {styles.input}
                                leftIcon  = {<FontAwesome name={"user"} style={styles.icon} />}
                                placeholder = {"Digite o Email"}
                                onChangeText = { (text) => {} } 

                            />

                        </View>
                       
                        <View style={styles.containerBotaoLogin}>
                            <TouchableOpacity
                                 style={styles.buttonLogin}
                                onPress={()=>{alert("Envia Link")}}
                             >
                                <Text style={styles.textButton}>Enviar o link para email</Text>
                             </TouchableOpacity>

                        </View>

                    </View>

                    <View style={styles.containerSocialMidia}>

                        <TouchableOpacity 
                            onPress={()=>{this.openRouteBack(routeBack);}}
                            style={styles.containerCriaConta}>
                            <Text style={styles.textCriaConta}>Volta</Text>
                        </TouchableOpacity>

                    </View>


                </View>

              
            </BodyLogin>
        );
    }
}


const styles = StyleSheet.create({
    
    container:{
        //borderWidth:1,
        flex:1,
        marginTop:height * .08,
        padding:15,
        justifyContent:"center",
        alignItems:"center",
        
    },

    input:{
        color: Theme.PrimaryColor.color,
    },

    containerLogo:{
        width:150,
        height:150,
        //borderWidth:1,
    },

    logo:{
        width:"100%",
        height:"100%",
       
    },

    form:{
        //borderWidth:1,
        padding:2,
        paddingBottom:5,
        width:"100%",
        marginTop:10,
        //backgroundColor:"#00000070",
        //backgroundColor:"#FFF",
        borderRadius:3,
    },

    icon:{
        fontSize:20,
        marginRight:10,
        color: Theme.PrimaryColor.color,
       
    },
    containerInput:{
        marginTop:10,
        backgroundColor:"#FFF",
        borderRadius:3,
        //borderWidth:1,
    },

    recuperaSenhaForm:{
        //borderWidth:1,
        marginTop:10,
        width:"100%",
        alignItems:"flex-end",
        paddingRight:20,
    },

    textSenha:{
        color:Theme.PrimaryColor.color,
        fontSize:16,
    },

    containerBotaoLogin:{
        //borderWidth:1,
        marginTop:10,
        padding:2,
        paddingRight:0,
        paddingLeft:0,
        width:"100%",
        alignItems:"center",
    },
  
    buttonLogin:{
        //borderWidth:1,
        width:"100%",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#EB0C38",
       
        borderRadius:3,
        zIndex:2,

    },

    textButton:{
        color:"#FFF",
        fontSize:18,
    },

    containerSocialMidia:{
        //borderWidth:1,
        marginTop:10,
        width:"100%",
        flexDirection:"column",
        justifyContent:"center",
        //backgroundColor:"#00000070",
        //backgroundColor:"#FFF",
        borderRadius:3,
    },

    

    containerCriaConta:{
        marginTop:5,
        marginBottom:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
    },

    textCriaConta:{
        color:Theme.PrimaryColor.color,
        fontSize:16,
    },

    

});

