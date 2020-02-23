import React, {Fragment, PureComponent} from 'react';
import {View, Text, Picker} from 'react-native';
import {Header, Rating, Button, Card} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';

//import coponents
import HeadArrowBack from '../../Components/Head/HeadArrowBack';
import Body from '../../Components/Body';
import CardInfor from '../../Components/AvaliacaoDoProduto/cardinfor';
import DetalhesAvaliacao from '../../Components/AvaliacaoDoProduto/detalhesavaliacao';
import CardComent from '../../Components/AvaliacaoDoProduto/cardcoment';
import CardFiltro from '../../Components/AvaliacaoDoProduto/cardfiltro';
import CardLoading from  '../../Components/Produto/cardLoading';
import Theme from '../../Style';


//import json
import {detalhesAvalicao, Comentarios} from '../../utils/Avaliacao';

export default class AvaliacaesDoProdutoScreen extends PureComponent{

    constructor(props){
        super(props);

        this.state = {
            favorito: false,
            isRender: false,
            dataComent: Comentarios,
            loadingComent: false,
            tipo: '',
        }
    }


    //Navegação por telas

    openTelaAvaliaProduto = (produto)=>{
        return this.props.navigation.navigate('AvaliaProdutoScreen', {routeBack: "AvaliacaesDoProdutoScreen", produto: produto});
    }

    //Fim de Navegações


    //state = {tipo: ''}
    updateTipo = (tipo) => {
        this.setState({ tipo: tipo })
    }

    setRender(){
        setTimeout(()=>{ this.setState({isRender: true}) }, 0);
     }


    componentDidMount(){

        if(this.state.isRender == false){
            this.setRender()
        }
    }

    loadMoreComents = () => {
        //alert("foi");
        this.setState({loadingComent: true});

        setTimeout(()=>{
            this.setState({ dataComent: [...this.state.dataComent, ...Comentarios],
                            loadingComent: false });
        }, 2000);
        
    }


    render(){

        const {navigation} = this.props;

        const {isRender, dataComent, loadingComent, tipo} = this.state;

        const routeBack = navigation.getParam("routeBack");
        const produto   = navigation.getParam("produto");


        return(
            <Fragment>
                <View style={{flex:1}}>

                    <Header 
                        leftComponent={<HeadArrowBack navigation={navigation} routeBack={routeBack} />} 
                        centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Avaliações</Text>}
                            
                        containerStyle={[{
                            
                            justifyContent: 'space-around',
                        },Theme.tmHead, Theme.backgroundPrimaryColor]}
                    />
                    {
                        
                    
                    isRender ? <Body>

                        <View style={{marginTop:0, padding:5,}}>

                            <CardInfor
                               opressFunc = {this.openTelaAvaliaProduto}
                               produto    = {produto}
                            />
                            
                            <DetalhesAvaliacao data={detalhesAvalicao} />


                            <CardFiltro
                                tipo       = {tipo}
                                updateTipo = {this.updateTipo}
                            />
                            
                            <CardComent
                                data = {dataComent}
                                opressFunc = {this.loadMoreComents}
                                loadingComent = {loadingComent}
                            />

                        </View>

                        

                    </Body> : <CardLoading />
                    
                    }
       

                </View>
            </Fragment>
        );
    }
}