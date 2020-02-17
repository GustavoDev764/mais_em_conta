import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Theme from '../../Style';


let scrollYPos = 0;


export default class Body extends React.Component{

    constructor(props){
        super(props);
    }


    scrollTo = (scrollYPosY) => {
        this.scroller.scrollTo({x: 0, y: scrollYPos});
    };

    render(){

        const {onScrollFunc, scrollY} = this.props;

        
        
        return(
            <SafeAreaView style={styles.safeAreaView}>
                    <ScrollView 

                        onMomentumScrollEnd={onScrollFunc} 
                        
                        contentOffset={{x:0, y:150}}

                        style={[Theme.backgroundSexto]} 
                        showsVerticalScrollIndicator={true}

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
        backgroundColor: 'red'
    },

    view:{
        marginTop:10,
        marginBottom:10,
        padding:2,
    }



});
