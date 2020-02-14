import React,{Fragment, PureComponent} from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import {Feather} from '@expo/vector-icons';


//aquivos json
import {ProdutoListView} from '../../utils/ProdutoListView';

//import components
import Body from '../../Components/Body';
import ListProduto from '../../Components/ListProduto';

//HeadListProdutoScreen
import HeadGrupo from '../../Components/Head/HeadGrupo';
import HeadArrowBack from '../../Components/Head/HeadArrowBack';
import HeadList from '../../Components/Head/HeadList';
import HeadSearch from '../../Components/Head/HeadSearch';



export default class ListProdutoScreen extends PureComponent{

    constructor(props){
        super(props);

        this.state = {
            dataProduto: ProdutoListView, 
            loadingMore: false,
        }
    }



    static navigationOptions = {
        //Drawer
        drawerLabel: "Lista de Produto",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />,
    };

    //Navega por telas

    openTelaSearhcView = () => {
        return this.props.navigation.navigate('SearchBarScreen',{routeBack: "ListProdutoScreen"});
    }

    openTelaProduto = (produto) => {
        return this.props.navigation.navigate("ProdutoScreen",
           {routeBack: "ListProdutoScreen", data: produto} );
    }

    //Fim de Navegações

    openMenuDrawer = () => {
        return this.props.navigation.openDrawer();
    }

    loadMoreProduto = () => {

        this.setState({loadingMore: true});
        setTimeout(()=>{
            this.setState({ dataProduto: [...this.state.dataProduto, ...ProdutoListView],
                            loadingMore: false });
        }, 2000);

       // alert("klklklkl");
    }

    renderItem(item){
        return(
            <ListProduto
                
                openViewProduto = {this.openTelaProduto}
                onFuncMore      = {this.loadMoreProduto}
                loadingMore     = {this.state.loadingMore}
                produtos        = {item}
            />
        );
    }


    render(){

        const {
            navigation,
           // routeBack,
        } = this.props;

        const {dataProduto} = this.state;

        const routeBack = "HomeScreen";
        
        return(
            <Fragment>

                <Header 
                    leftComponent={<HeadArrowBack navigation={navigation} routeBack={routeBack} />} 
                    centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Lista de Produto</Text>}
                    rightComponent={
                        <HeadGrupo>
                            <HeadSearch opressFunc={this.openTelaSearhcView} />
                            <HeadList   opressFunc={this.openMenuDrawer} />
                        </HeadGrupo>
                    }
                    containerStyle={{
                        backgroundColor: '#0086ff',
                        justifyContent: 'space-around',
                       
                      }}
                />

                <Body>
                      {
                        this.renderItem(dataProduto)
                      } 
                </Body>

            </Fragment>
        );
    }
}