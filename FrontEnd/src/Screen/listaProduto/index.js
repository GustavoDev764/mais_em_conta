import React,{Fragment, PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {Ionicons, Feather, FontAwesome} from '@expo/vector-icons';


//aquivos json
import {ProdutoListView} from '../../utils/ProdutoListView';

//import components
import Body from '../../Components/Body';
import ListProduto from '../../Components/ListProduto/List';
import GradeProduto from '../../Components/ListProduto/Grade';
import CardLoading from  '../../Components/Produto/cardLoading';
import SubMenu from '../../Components/ListProduto/submenu';

//HeadListProdutoScreen
import HeadGrupo from '../../Components/Head/HeadGrupo';
import HeadArrowBack from '../../Components/Head/HeadArrowBack';
import HeadList from '../../Components/Head/HeadList';
import HeadSearch from '../../Components/Head/HeadSearch';
import Theme from '../../Style';



export default class ListProdutoScreen extends PureComponent{

    constructor(props){
        super(props);

        this.state = {
            dataProduto: ProdutoListView, 
            isRender:false,
            loadingPage:false,
            loadingMore: false,
            scrollY:0,
            grade:false,
            list:true,
        }
    }

    setRender(){
      setTimeout(()=>{ this.setState({isRender: true}) }, 0);
    }

    setLoadingPage(){

        this.setState({loadingPage: true});
        setTimeout(()=>{this.setState({loadingPage: false}); }, 0);
    
    }

    componentDidMount(){
        if(this.state.isRender == false){
            this.setRender();
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

    openTelaCestaDeProdutoView = () => {
        return this.props.navigation.navigate('CestaDeProdutoScreen');
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

    typeItemViewList = () => {

        // console.log("======L");
        // console.log(this.state.scrollY);
        // console.log("======");

        this.setState({list: true, grade: false});
        this.setLoadingPage();
        

    }

    typeItemViewGrade = () => {

        // console.log("======G");
        // console.log(this.state.scrollY);
        // console.log("======");

        this.setState({list: false, grade: true});
        this.setLoadingPage();
        
    }

    renderItem = (item) => {

        if(this.state.list == true){
            return(
                <ListProduto
                    
                    openViewProduto = {this.openTelaProduto}
                    onFuncMore      = {this.loadMoreProduto}
                    loadingMore     = {this.state.loadingMore}
                    produtos        = {item}
                />
            );
        }else{


            return (
                <GradeProduto
                    openViewProduto = {this.openTelaProduto}
                    onFuncMore      = {this.loadMoreProduto}
                    loadingMore     = {this.state.loadingMore}
                    produtos        = {item}
                />
            );
        }

        
    }

    handleScroll = (event) => {
        console.log(event.nativeEvent.contentOffset.y);
       
        this.setState({scrollY: event.nativeEvent.contentOffset.y });
    };


    render(){

        const {
            navigation,
        } = this.props;

        const {dataProduto, list, grade, isRender, loadingPage , scrollY} = this.state;

        var routeBack = navigation.getParam('routeBack');

        return(
            <Fragment>

                <Header 
                    leftComponent={<HeadArrowBack navigation={navigation} routeBack={routeBack == null ? "HomeScreen" : routeBack } />} 
                    centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Lista de Produto</Text>}
                    rightComponent={
                        <HeadGrupo>
                            <HeadSearch opressFunc={this.openTelaSearhcView} />
                            <HeadList   opressFunc={this.openTelaCestaDeProdutoView} />
                        </HeadGrupo>
                    }
                    containerStyle={[{
                       
                        justifyContent: 'space-around',
                       
                      }, Theme.backgroundPrimaryColor]}
                />

                {
                    isRender ? 
                    
                    <SubMenu
                        typeItemViewGrade = {this.typeItemViewGrade}
                        typeItemViewList  = {this.typeItemViewList}
                        list              = {list}
                        grade             = {grade}
                    /> : null
                }
                
                {
                    isRender ? 
                    loadingPage ? <CardLoading /> : <Body
                        onScrollFunc = {this.handleScroll}
                        scrollY      = {scrollY}
                        >
                      {
                         this.renderItem(dataProduto)
                      } 
                    </Body> 
                    : <CardLoading />

                }            
                
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

});