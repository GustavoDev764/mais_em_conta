import React, {Fragment, PureComponent} from 'react';

import {
        View,
        Text,
        KeyboardAvoidingView,
        StyleSheet,
        TouchableOpacity,
} from 'react-native';

import {Header} from 'react-native-elements';


//import components
import HeadArrowBack from '../../Components/Head/HeadArrowBack';
import Body from '../../Components/Body';
import InputText from '../../Components/EditarPerfil/input';
import Theme from '../../Style';

export default class EditEnderecoUser extends PureComponent{
    
    constructor(props){
        super(props);

        this.state = {
            isRender: false,
            endereco:null,
            ncasa:null,
            bairrodistrito:null,
            cep:null,
            localidadeuf:null
        }
        

    }

    componentDidMount(){
        
        if(this.state.isRender == false){

            const data = this.props.navigation.getParam("data");
            
            this.setState({
                endereco:data.endereco,
                ncasa:data.ncasa,
                bairrodistrito:data.bairrodistrito,
                cep:data.cep,
                localidadeuf: data.localidadeuf,
            });

            this.setRender();
        }
    }

    setRender(){
        setTimeout(()=>{ this.setState({isRender: true}) }, 0);
    }

   
    render(){

        const {navigation} = this.props;
        const {
            endereco,
            ncasa,
            bairrodistrito,
            cep,
            localidadeuf,

        } = this.state;

        const routeBack = navigation.getParam("routeBack");
        

        return(
            <KeyboardAvoidingView 
                style={{flex:1}}
                behavior="padding"
            >
                <Fragment>
                    
                        <Header 
                            leftComponent={<HeadArrowBack navigation={navigation} routeBack={routeBack} />} 
                            centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Editar Endereço</Text>}
                                
                            containerStyle={[{
                               
                                justifyContent: 'space-around',
                            }, Theme.tmHead, Theme.backgroundPrimaryColor]}
                        />

                        <Body>

                            <View style={styles.container} >

                                <View style={styles.containerForm} >
                                    
                                    <View style={styles.form} >

                                    
                                        

                                        <InputText
                                            nameInput = {"Endereço"} 
                                            value     = {endereco}
                                            errorMessage = {null}
                                            placeholder = {"Endereço"}
                                            onChangeText = { (text) => {this.setState({endereco: text})} } 

                                        />


                                        <InputText
                                            nameInput = {"N° Casa"} 
                                            value     = {ncasa}
                                            errorMessage = {null}
                                            placeholder = {"Digite o N° da casa"}
                                            onChangeText = { (text) => {this.setState({ncasa: text})} } 

                                        />

                                        <InputText
                                            nameInput = {"Bairro/Distrito"} 
                                            value     = {bairrodistrito}
                                            errorMessage = {null}
                                            placeholder = {"Digite o Bairro/Distrito"}
                                            onChangeText = { (text) => {this.setState({bairrodistrito: text})} } 

                                        />

                                        <InputText
                                            nameInput = {"CEP"} 
                                            value     = {cep}
                                            errorMessage = {null}
                                            placeholder = {"Digite o CEP"}
                                            onChangeText = { (text) => {this.setState({cep: text})} } 

                                        />

                                        <InputText
                                            nameInput = {"Localidade/UF"} 
                                            value     = {localidadeuf}
                                            errorMessage = {null}
                                            placeholder = {"Digite a Localidade/UF"}
                                            onChangeText = { (text) => {this.setState({localidadeuf: text})} } 

                                        />

                                    </View>

                                </View>


                                <View style={styles.footer}>

                                    <TouchableOpacity onPress={()=>{alert("Salvar");}} style={styles.containerButton}>
                                        <Text style={styles.textButton}>Salvar</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>
                        </Body>
                        
                </Fragment>

            </KeyboardAvoidingView>
            
            
        );
    }
}


const styles = StyleSheet.create({

   
   
    container:{
        flexDirection:"column",
        padding:10,
        //margin:10,
        marginBottom:20,
        marginLeft:10,
        marginRight:10,
        borderRadius:8,
        marginTop:21,
        backgroundColor:"#fff",
    },

    head:{
        marginBottom:5,
        padding:1,
    },

    textHead:{
        fontSize:16,
    },

   

    containerForm:{
        flexDirection:"column",
        marginBottom:5,
        alignItems:"center",
        padding:2,
    },

    form:{
        marginTop:5,
        width:"100%",
        padding:2,
    },

    footer:{
        //borderWidth:1,
        padding:2,
        alignItems:"center",
    },

    containerButton:{
        //borderWidth:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"blue",
        borderRadius:3,
        width:"60%",
        height:40,
    },

    textButton:{
        color:"#FFF",
        fontSize:20,
    }

   


});