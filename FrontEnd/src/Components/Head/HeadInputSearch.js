import React from 'react';
import {TouchableOpacity, View, Text, Dimensions, StyleSheet} from 'react-native';
import {Header, SearchBar} from 'react-native-elements';
import {FontAwesome, Ionicons} from '@expo/vector-icons';


//import components
import HeadArrowBack from './HeadArrowBack'

const { width, height } = Dimensions.get('screen');

export default class HeadInputSearch extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            search: '',
            isloading: false,
        };
    }

    
    
    updateSearch = (search) => {
        
        var isloading = search.length > 0 ? true : false;

        this.setState({ search:search, isloading:isloading ,});
    };

   
    render(){

        const {navigation} = this.props;

        const { search, isloading} = this.state;

        var routeBack = navigation.getParam('routeBack');

        console.log(routeBack);
        
        return(
            <Header
                containerStyle={styles.head}  

                leftComponent={
                    <HeadArrowBack navigation={navigation} routeBack={routeBack != null ? routeBack : 'HomeScreen'} />
                }

                centerComponent={
                    <SearchBar
                        showLoading={isloading}
                        searchIcon={<FontAwesome name="search" style={styles.iconSearch}/>}
                        placeholder="Buscar no Mais Econta"
                        placeholderTextColor={"#a2a2a2"}
                        onChangeText={this.updateSearch}
                        value={search}
                        containerStyle={styles.searchBar}
                        inputContainerStyle={styles.inputBar}
                        inputStyle={styles.inputStyle}
                    />
                    
                    }
                
            />
        );
    }
}

const styles = StyleSheet.create({
    icon:{
        color:"#000",
        fontSize:48,
    },
    iconSearch:{
        color:"#a2a2a2",
        fontSize:width * .06,
    },
   
    head:{
        backgroundColor: '#0086ff',
        justifyContent: 'space-around',
    },
    inputBar:{
        backgroundColor:"#fff0",
        
       
    },
    inputStyle:{
        backgroundColor:"#fff0",
        color:"#000",
     
    },
    searchBar:{
        borderTopWidth:0,
        borderBottomWidth:0,

        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",

        backgroundColor:"#FFF",
        height: height * .06,
        marginLeft:35,
        width:"135%",
        borderRadius:5,
    },

    divInput:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:20,
    },
    textInput:{
        marginLeft:8,
        fontSize:15,
        color:"#a2a2a2",
    }

});