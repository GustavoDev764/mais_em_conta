import React,{Fragment, PureComponent} from 'react';

import {
        View,
        Text, 
        StyleSheet, 
        TouchableOpacity, 
    } from 'react-native';

import {Header} from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import {Feather, FontAwesome} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { Camera} from 'expo';

//import Json
import {dadosUser} from '../../utils/dadosUser';

//import components
import HeadArrowBack from '../../Components/Head/HeadArrowBack';
import Theme from '../../Style';
import Body from '../../Components/Body';
import CardPerfil from '../../Components/PerfilUsuario/cardperfil';
import CardEndereco from '../../Components/PerfilUsuario/cardendereco';
import ModalSelecao from '../../Components/PerfilUsuario/modal';
import CameraModal from '../../Components/PerfilUsuario/cameramodal';


//import Routes
import EditDadosUser from '../EditDadosUser';
import EditEnderecoUser from '../EditEnderecoUser';


export default class PerfilScreen extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            data: dadosUser,
            modalVisible: false,
            cameraVisible: false,
            trocaImage: false,
            image: null,

        }
    }


    static navigationOptions = {
        //Drawer
        drawerLabel: "Perfil",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />,
        
        //Stack
        title: "Perfil", 
        headerMode: "none",
        
    };

    componentDidMount() {
        this.getPermissionAsync();
      //  console.log('hi');
    }

    getPermissionAsync = async () => {
        if (Constants.platform.android) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
    }
    


    //Navega por telas

    openTelaEditDadosUser = (dadosUser) => {
        return this.props.navigation.navigate("EditDadosUser",
           {routeBack: "PerfilScreen", data: dadosUser} );
    }

    openTelaEditEnderecoUser = (dadosUser) => {
        return this.props.navigation.navigate("EditEnderecoUser",
           {routeBack: "PerfilScreen", data: dadosUser} );
    }

    //Fim de Navegações

    closeModal = () => {
        this.setState({modalVisible: false});
    }


    savePhoto = (photo) => {
        this.setState({ image: photo.uri, trocaImage: true });
        this.closeModalCamera();
    }

    openModal = () =>{
        this.setState({modalVisible: true});
    }

    closeModalCamera = () => {
        this.setState({cameraVisible: false});
    }

    openModalCamera = () =>{
        this.setState({cameraVisible: true});
    }


    openCamera = async () =>{
        
        this.openModalCamera();
        
        this.setState({modalVisible: false});
        
        
        
    }

    openGaleria = async () =>{

        this.setState({modalVisible: false});

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
          });
      
        if (!result.cancelled) {
            this.setState({ image: result.uri, trocaImage: true });
           
        }



    }

    render(){

        const {navigation} = this.props;

        const {data, modalVisible, cameraVisible, trocaImage, image} = this.state;

        const routeBack = "ListProdutoScreen";

        //console.log(data.image);
        
        return(

            
            cameraVisible ? <CameraModal
                                savePhoto    = {this.savePhoto}
                                closeModalCamera = {this.closeModalCamera}
            />
            : <Fragment>
                    
                    <Header 
                        leftComponent={<HeadArrowBack navigation={navigation} routeBack={routeBack} />} 
                        centerComponent={<Text style={[Theme.TitlePage, Theme.colorWhite]}>Perfil</Text>}
                                
                        containerStyle={[{
                               
                            justifyContent: 'space-around',
                        }, Theme.tmHead, Theme.backgroundPrimaryColor]}
                    />

                    <Body>

                        

                        <View style={styles.container}>

                            <CardPerfil
                                trocaImage = {trocaImage}
                                image      = {image}
                                data = {data}
                                openViewEditDadosUser = {this.openTelaEditDadosUser}
                                openModal = {this.openModal}
                            />

                            <CardEndereco
                                data = {data}
                                openViewEditEnderecoUser = {this.openTelaEditEnderecoUser}
                            />

                            <View style={styles.footer}>

                                <TouchableOpacity onPress={()=>{alert("deslogar");}} style={styles.containerButton}>
                                    <Text style={styles.textButton}>Sair da Conta</Text>
                                </TouchableOpacity>

                            </View>
                            
                            
                        </View>

                        <ModalSelecao
                        
                            modalVisible = {modalVisible}
                            closeModal   = {this.closeModal}
                            openModal    = {this.openModal}
                            openGaleria  = {this.openGaleria}
                            openCamera   = {this.openCamera}

                        />
                        

                     </Body>

            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        marginTop:0,
        padding:5,
    },

    footer:{
        padding:2,
        alignItems:"center",
    },

    containerButton:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"red",
        borderRadius:3,
        width:"100%",
        height:40,
    },

    textButton:{
        color:"#FFF",
        fontSize:20,
    },
   

});

export const PerfilScreenStack = createStackNavigator(
    {
        PerfilScreen,
        EditDadosUser,
        EditEnderecoUser,
    },
    {
        headerMode: "none",
        gestureEnabled:true,
        gestureDirection: "horizontal",
        mode:"card",
        //transitionSpec: config,
        

        navigationOptions:{
            drawerLabel: "Perfil",
            drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />,
        }
      
    }
);

//Configuração Padrao
const config = {
   
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
};