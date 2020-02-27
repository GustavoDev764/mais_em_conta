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

export default class EditDadosUser extends PureComponent{
    
    constructor(props){
        super(props);

        this.state = {
            isRender: false,
            name:null,
            email:null,
            cpf:null,
            telefone:null,
            nascimento:null
        }
        

    }

    componentDidMount(){
        
        if(this.state.isRender == false){

            const data = this.props.navigation.getParam("data");
            
            this.setState({
                name:data.name,
                email:data.email,
                cpf:data.cpf,
                telefone:data.telefone,
                nascimento: data.nascimento,
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
            name,
            email,
            cpf,
            telefone,
            nascimento,

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
                            centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Editar Perfil</Text>}
                                
                            containerStyle={[{
                               
                                justifyContent: 'space-around',
                            }, Theme.tmHead, Theme.backgroundPrimaryColor]}
                        />

                        <Body>

                            <View style={styles.container} >

                                <View style={styles.containerForm} >
                                    
                                    <View style={styles.form} >

                                    
                                        

                                        <InputText
                                            nameInput = {"Nome"} 
                                            value     = {name}
                                            errorMessage = {null}
                                            placeholder = {"Nome Completo"}
                                            onChangeText = { (text) => {this.setState({name: text})} } 

                                        />


                                        <InputText
                                            nameInput = {"Email"} 
                                            value     = {email}
                                            errorMessage = {null}
                                            placeholder = {"Digite o Email"}
                                            onChangeText = { (text) => {this.setState({email: text})} } 

                                        />

                                        <InputText
                                            nameInput = {"CPF"} 
                                            value     = {cpf}
                                            errorMessage = {null}
                                            placeholder = {"Digite o CPF"}
                                            onChangeText = { (text) => {this.setState({cpf: text})} } 

                                        />

                                        <InputText
                                            nameInput = {"Telefone"} 
                                            value     = {telefone}
                                            errorMessage = {null}
                                            placeholder = {"Digite o Telefone"}
                                            onChangeText = { (text) => {this.setState({telefone: text})} } 

                                        />

                                        <InputText
                                            nameInput = {"Data de Nascimento"} 
                                            value     = {nascimento}
                                            errorMessage = {null}
                                            placeholder = {"Digite a Data de Nascimento"}
                                            onChangeText = { (text) => {this.setState({nascimento: text})} } 

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