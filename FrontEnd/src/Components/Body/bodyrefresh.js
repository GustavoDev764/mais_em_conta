import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView, RefreshControl} from 'react-native';

export default class BodyRefresh extends React.Component{

    constructor(props){
        super(props);

        
    }

   

    render(){

        

        const {onRefreshFunc, refreshing} = this.props;

        return(
            <SafeAreaView style={styles.safeAreaView}>
                    <ScrollView 
                        style={styles.scrollView}
                        showsVerticalScrollIndicator={false}
                        refreshControl={
                            <RefreshControl colors={["#0D0EFF","#0086FF", "#0CBBE8","#0DFFEF"]} refreshing={refreshing} onRefresh={onRefreshFunc} />
                          }
                    >
                        <View style={styles.view}>

                            {this.props.children}
                        
                        </View>
                    </ScrollView>
           </SafeAreaView>           
        );
    }
}

const styles = StyleSheet.create({

    safeAreaView:{
        flex:1,
    },

    scrollView:{
        backgroundColor: '#ececec'
    },

    view:{
        marginTop:10,
        marginBottom:10,
        padding:2,
    }



});
