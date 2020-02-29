import React,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Rating} from 'react-native-elements';


import Theme from '../../Style';

export default class ItemAvaliacao extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){

        const {pessoa, rating} = this.props;

        return(
            <Fragment>
                <View style={styles.container}>
                                            
                    <View style={styles.containerRating}>
                        <Rating
                            imageSize={18}
                            readonly
                            ratingCount={5}
                            startingValue={rating}
                            onFinishRating={this.ratingCompleted}
                            style={{}}
                        />
                    </View>

                    <View style={styles.containerText}>
                        <Text style={[styles.text, Theme.PrimaryColor]}>{pessoa} Pessoas</Text>
                    </View>


                </View>

            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"row",
        alignItems:"center",
    },

    containerRating:{
        marginRight:10,
    },

    containerText:{

    },
    text:{
        fontSize:13,
    }

});