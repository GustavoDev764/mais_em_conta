import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

//importação de components
import TabItem from './tabitem';

//importa json
import { categoria } from '../../utils/categoriaImages';

export default class Tabs extends React.Component{

    constructor(props){
        super(props);
    }

    renderTabItem(item, index){
       
        return <TabItem 
                    key    = {index}
                    title  = {item.title}
                    image  = {item.image}
                    link   = {item.link}
                    params = {item.params}
                /> ;
    }

    render(){

       

        return(
            <View style={styles.container}>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}
                > 
                    {
                       categoria.map((item, index)=>{
                            return this.renderTabItem(item, index);
                       })
                    }   
                        
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        padding:10,
        marginBottom:-13,
    },
    scrollView:{

    }

});