import React,{Fragment, PureComponent} from 'react';
import {Text, View, Dimensions, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Header} from 'react-native-elements';
import {Feather, FontAwesome} from '@expo/vector-icons';



//aquivos json
import {ProdutoListView} from '../../utils/ProdutoListView';
import {CategoriaData} from '../../utils/Categoria';

//import Components
import Body from '../../Components/Body';
import PreLoading from '../../Components/PreLoading';
import ProdutosLoja from '../../Components/Loja/Produtos';
import CategoriaList from  '../../Components/Categorias';
import InformacaoLoja from '../../Components/Loja/Informacao';

//HeadListProdutoScreen
import HeadGrupo from '../../Components/Head/HeadGrupo';
import HeadArrowBack from '../../Components/Head/HeadArrowBack';
import HeadList from '../../Components/Head/HeadList';
import HeadSearch from '../../Components/Head/HeadSearch';
import Theme from '../../Style';
import { ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get("screen");

const image  = "https://static.wixstatic.com/media/5c3c89_8225c36de0e84544a111da42453bfbde~mv2.png/v1/fill/w_800,h_300,al_c,q_90/file.jpg";
const logo   = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAe1BMVEXmABb////lAADmAA/+8/TvfoPoLDbpOkH4xcjmABPznqL40dLmAAbmAArzo6bsYmj0r7L619n2trnpMTz97/D73uDqQ0v/+vv85efnGyfxkJTwio7tcHX5zM/ylpvtaG3rTlX3vcDueH33wsTnCh7oIy/vg4jsXWPqR08KbH2AAAADEklEQVR4nO3c3XKiMBiA4fKBP7Go+Au1ausW273/K9yiq80XiNLMzmhn3+ewnjDvUEIS4OEBAAAAAAAAAAAAAAAAAAAAAIB/T77h1sd6P6SftJVv6XYij1FrA7KdkC0I2YKQLQjZgpAtCNmCkC0I2YLIpH22EdlO0pdOa6/DWx/t/Ujbz+SpBgDANcYaWeNbH8wPUd1kjDujbLrbTbPVeka664zIeDrX84LHbVfE3PrI7pnINmmaUS067Fj5ybgxWiX5xQnnIYNLc/gN3RrJ6PLax4JuDaRzuVoUTbm+1cRP16pF0ZLlD5e8Xc/2xunmiLtOonxezHO3G1c3hx4P8sHsMLMq1xuVbZze+jjvjBRWncJIfDiv4s9Jg51txX+pogeE0rr0q9OQsVRL7ZNKbU4Nl9YvO7IpsrLidO0VDxNbv/TJpkhmj5f2L/GebH5mmJ6ouwyjgpLNZb6c//Y5kOrpPdkuMfFxQbz7kumVJLL5VMVMb73KNkVtkkC2ZkZk/74rarnIdokMVwtvMrI1G15e3SVbI5nNr1UjW428elLNyeY3nHmiPQvZvIzUh8+82D33REqyeamp/Kdk974cHh5jMGTzMqJmA5OP6kGQ4ySLbH7ph11tZD+5oBYwyaaoZY6NaqOWKcmmqBcTemo3VNZk8xFr1p7oNGovgWyKfW+2cLItyOah9gsK/6WNbIqxzza1lWD061hkU1S28VebWA2xZHOoC1ghfx9ZiKXUzzI49yb/PZnacYrlcSthpk81srnUzVk1mmaDUb9h+e2RbDYj9e2WJhOyKbL1psqt696cbIoR74r40r7CPfBcoOJb3U1m6kTkATeHLJsub5s0Vc9wRXyHzCFl/fsM1asvegoR8YkBRyxrtaGQD47LlTLof9n0eN3PJfJ7NDmMDckiG59f61NfZqBag2rbxZRlVYqHwr9HPeIGAD9X3B6XvbN4323tiW4nfL8tCF8LDEK2IGQLQrYgZAtCtiBkC0K2IGQLwiwhSNzttbZnTnrGCggAAAAAAAAAAAAAAAAAAAAA/Dt/ACawJkgeZLADAAAAAElFTkSuQmCC";



export default class LojaScreen extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            idItemTab: 0,
            isRender:false,
            loadingPage:false,
            dataProduto: ProdutoListView, 
            
        }
    }

     setLoadingPage(){
  
        this.setState({loadingPage: true});
        setTimeout(()=>{this.setState({loadingPage: false}); }, 0);
      
    }

    setRender(){
        setTimeout(()=>{ this.setState({isRender: true}) }, 0);
    }

    componentDidMount(){
        if(this.state.isRender == false){
            this.setRender();
        }
    }

    static navigationOptions = {
        //Drawer
        drawerLabel: "Loja",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />,
              
    };

    //Navega por telas
    openTelaSearhcView = () => {
       return this.props.navigation.navigate('SearchBarScreen',{routeBack: "LojaScreen"});
    }

    openTelaCestaDeProdutoView = () => {
        return this.props.navigation.navigate('CestaDeProdutoScreen');
    }

    openTelaProduto = (produto) => {
        return this.props.navigation.navigate("ProdutoScreen",
           {routeBack: "LojaScreen", data: produto} );
    }

    openTelaListProduto = (produto) => {
        return this.props.navigation.navigate("ListProdutoScreen",
           {routeBack: "LojaScreen"});
    }
    //Fim de Navegações


    SwitchCaseView = () => {
        
        const {idItemTab, dataProduto} = this.state;

        switch(idItemTab){

            case 0:
                return  <ProdutosLoja 
                        openViewProduto = {this.openTelaProduto}
                        onFuncMore      = {this.openTelaListProduto}
                        produtos        = {dataProduto}
                    />;
                break;
            
            case 1:
                return  <ProdutosLoja 
                        openViewProduto = {this.openTelaProduto}
                        onFuncMore      = {this.openTelaListProduto}
                        produtos        = {dataProduto}
                    />;
                break;

            case 2:
                return  <CategoriaList 
                        openViewProduto = {this.openTelaProduto}
                        onFuncMore      = {this.openTelaListProduto}
                        CategoriaData   = {CategoriaData}
                    />;
                break;

            case 3:
                return  <InformacaoLoja 
                        openViewProduto = {this.openTelaProduto}
                        onFuncMore      = {this.openTelaListProduto}
                        CategoriaData   = {CategoriaData}
                    />;
                break;
        }

    }


    render(){

        const {navigation} = this.props;
        const {idItemTab, isRender, loadingPage}  = this.state;

        const routeBack = "HomeScreen";

        return(
            <Fragment>

                <Header 
                    leftComponent={<HeadArrowBack navigation={navigation} routeBack={routeBack} />} 
                    centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Loja</Text>}
                    rightComponent={
                        <HeadGrupo>
                            <HeadSearch opressFunc={this.openTelaSearhcView} />
                            <HeadList   opressFunc={this.openTelaCestaDeProdutoView} />
                        </HeadGrupo>
                    }
                    containerStyle={[{
                       
                        justifyContent: 'space-around',
                        opacity:1,
                        borderBottomWidth:0,
                        
                       
                      }, Theme.tmHead, Theme.backgroundPrimaryColor]}
                />

                <Body>

                    <View style={[styles.logoLojaBanner]}>
                        <Image
                           style={styles.image}
                           source={{ uri: image }}
                           resizeMode={"cover"}
                           //PlaceholderContent={<PreLoading />}
                        />
                    </View>

                    <View style={styles.containerLogoLoja}>

                        <Image
                            style={styles.imageLogoLoja}
                               
                            source={{ uri: logo }}
                            resizeMode={"cover"}
                               // PlaceholderContent={<PreLoading />}
                        />

                        <View style={styles.iconAbertoouFechado}>
                        </View>

                        <View style={styles.cotainerIconMap}>
                            <FontAwesome 
                                name='map-marker' 
                                style={[
                                    Theme.PrimaryColor,
                                    Theme.iconSizeX3,
                                ]}
                            />
                        </View>

                    </View>
                    

                    <ScrollView 
                        horizontal
                        style={styles.tabContianer}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity
                            onPress={()=>{
                                this.setState({idItemTab:0 });
                                this.setLoadingPage();
                                }} 
                            style={[
                                   styles.itemTab,
                                   (idItemTab == 0) ? styles.activeTab :styles.desativeTabe,
                                ]}
                        >
                            <Text 
                                style={styles.textTabItem}
                            >
                                Produtos
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=>{
                                this.setState({idItemTab:1 });
                                this.setLoadingPage();
                                }} 
                            style={[
                                   styles.itemTab,
                                   (idItemTab == 1) ? styles.activeTab :styles.desativeTabe,
                                ]}
                        >
                            <Text 
                                style={styles.textTabItem}
                            >
                                Serviços
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=>{
                                this.setState({idItemTab:2 });
                                this.setLoadingPage();
                                }} 
                            style={[
                                   styles.itemTab,
                                   (idItemTab == 2) ? styles.activeTab :styles.desativeTabe,
                                ]}
                        >
                            <Text
                                style={styles.textTabItem}
                            >
                                Categorias
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=>{
                                this.setState({idItemTab:3 });
                                this.setLoadingPage();
                                }} 
                            style={
                                [styles.itemTab,
                                 (idItemTab == 3) ? styles.activeTab :styles.desativeTabe ]}
                        >
                           
                            <Text 
                                style={styles.textTabItem}
                            >
                                Informações
                            </Text>

                        </TouchableOpacity>
                    </ScrollView>

                    {
                       isRender ?
                       
                        loadingPage ? <PreLoading /> : this.SwitchCaseView()
                       
                       : <PreLoading />

                    }


                  


                </Body>



            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    
    logoLojaBanner:{
        marginTop:-12,
        marginLeft:-1.8,
        marginBottom:15,
        width:width,
        height:height * .3,
        backgroundColor:"#ffffff00",
    },

    image:{
        width: width,
        height:height * .3,
    },

    tabContianer:{
        borderRadius:8,
        height:50,
        marginTop:2,
       
    },

    itemTab:{
       // borderWidth:1,
        flexDirection:"row",
        alignSelf:"center",
        padding:2,
        marginTop:2,
        marginRight:3,
        marginLeft:6,
        marginBottom:2,
        
    },

    textTabItem:{
        fontSize:16,
    },

    activeTab:{
        //borderBottomWidth:2,
        alignItems:"center",
        height:40,        
        padding:2,
        paddingLeft:3,
        paddingRight:3,
        borderRadius:8,
        backgroundColor:"#F5640C",
       
    },

    desativeTabe:{
        alignItems:"center",
        height:40,        
        padding:2,
        paddingLeft:3,
        paddingRight:3,
        borderRadius:8,
        backgroundColor:"#FFF",
    },

    containerLogoLoja:{
        position:"absolute",
        top:120,
        left:8,
        width:80,
        height:80,
        borderRadius:8,
        padding:5,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },

    imageLogoLoja:{
        width: 80,
        height:80,
        marginTop:15,
        marginBottom:15,
        borderRadius: 90,
        borderWidth: 1,
        resizeMode:"stretch",
        borderColor: "#FFF",
    },

    iconAbertoouFechado:{
        position:"absolute",
        top:"90%",
        left:"70%",   
        borderRadius:90,
        width:15,
        height:15,
        backgroundColor:"#38ad27",
    },

    cotainerIconMap:{
        position:"absolute",
        top:"68%",
        left:"120%",
    }

});
