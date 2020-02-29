import React, {Fragment, PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

import Theme from '../../Style';

export default class SubMenu extends PureComponent {

    constructor(props){
        super(props);
    }


    render(){

        const {
            typeItemViewGrade,
            typeItemViewList,
            list,
            grade,

        } = this.props;

        return(
            <Fragment>
                    <View  style={[styles.container, Theme.backgroundSecondaryColor]} > 

                        <View style={styles.containerTypeView} >
                            <TouchableOpacity
                                onPress={typeItemViewList}
                                style={[{
                                    borderRadius:3,
                                    padding: 0,

                                }, list ? styles.selecte : null ]}
                            >
                                
                                <Icon 
                                    name="list"
                                    iconStyle = {[Theme.iconSizeX2, Theme.colorWhite]} 
                                />


                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={typeItemViewGrade}
                                style={[{

                                    borderRadius:3,
                                    padding: 2,

                                }, grade ? styles.selecte : null]}
                            >
                                <Icon 
                                    name="grid-on"
                                    iconStyle = {[Theme.iconSizeX1, Theme.colorWhite]} 
                                />
                            </TouchableOpacity>
                            
                            
                        </View>
                                      

                        <TouchableOpacity onPress={()=>{alert("oi");}} style={{
                                flexDirection:"row",
                                alignItems:"center",
                                
                                padding:2,
                            }}
                        >
                            <Text style={[{
                                    marginRight:10,
                                    fontSize:18,
                                    
                                }, Theme.colorWhite]}
                            >
                                Filtros
                            </Text>
                            <Icon 
                                name="filter-list"
                                iconStyle = {[Theme.iconSizeX2, Theme.colorWhite]} 
                            />
                        </TouchableOpacity>

                    
                    
                    </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    selecte:{
        borderBottomWidth:2,
        borderBottomColor: Theme.colorWhite.color,
    },

    container:{
        height:40,
        width:"100%",
        marginTop:-.257,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:2,
    },

    containerTypeView: {
        paddingLeft:10,
        width:"50%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    }
});

