import React, {Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';


//import component
import ComentProduto from '../ComentarioProduto';

export default class CardComent extends PureComponent{

    constructor(props){
        super(props);
    }

    render(){

        const {data, opressFunc, loadingComent} = this.props;

        return(
            <Fragment>
                <View style={styles.container} > 


                    <View style={styles.containerComentario}>

                        {
                            data.map((item,index)=>{
                                return <ComentProduto 
                                        key  = {index}
                                        data = {item}
                                        />
                            })
                        }

                    </View>
                                    

                    <View style={styles.containerButton} >

                        <Button
                            onPress={opressFunc}
                            containerStyle={styles.button}
                            title="Ver Mais"
                            type="outline"
                            loading={loadingComent}
                        />

                    </View>

                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        padding:10,
        borderRadius:8,
        marginTop:21,
        backgroundColor:"#fff",
    },

    containerComentario:{

    },

    containerButton:{
        width:"100%",
        flexDirection:"column",
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
    },

    button:{
        width:"100%",
    }
});