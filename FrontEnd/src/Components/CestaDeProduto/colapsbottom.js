import React, {Fragment, PureComponent } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Collapsible from 'react-native-collapsible';
import {Button} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
import Theme from '../../Style';

export default class ColapsBottom extends PureComponent {

  constructor(props){
    super(props);
  
    this.state = {
        collapsed: true,
    };
  }

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  
  render() {

    const {collapsed} = this.state;
    
    return (
      <Fragment>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ paddingTop: 0 }}>
                
                <TouchableOpacity onPress={this.toggleExpanded}>
                    <View style={styles.header}>
                        <Ionicons 
                            name={ collapsed ? "ios-arrow-up" : "ios-arrow-down" }
                            style={[
                               
                                Theme.iconSizeX2,
                            ]}
                        />
                    
                    </View>
                </TouchableOpacity>

                <View style={{flexDirection:"column", padding:2}}>
                    
                    <View style={{
                            flexDirection:"row",
                            paddingLeft:20,
                            paddingRight:20,
                            justifyContent:"space-between"}}
                    > 
                        <Text>
                            Frete
                        </Text>
                        <Text>
                            R$ 213,61
                        </Text>
                    </View>

                    <View style={{
                            flexDirection:"row",
                            paddingLeft:20,
                            paddingRight:20,
                            justifyContent:"space-between"}}
                    > 
                        <Text style={{fontSize:16, fontWeight:"bold"}}>
                            Total do Pedido
                        </Text>
                        <Text style={{fontSize:16, fontWeight:"bold"}}>
                            R$ 14.206,09
                        </Text>
                    </View>
                    
                </View>

                <Collapsible collapsed={this.state.collapsed} align="center">
                    <View style={styles.content}>

                        <View style={{
                                flexDirection:"row",
                                paddingLeft:20,
                                paddingRight:20,
                                justifyContent:"space-between"}}
                        > 
                            <Text>
                                Boleto
                            </Text>
                            <Text>
                                R$ 14.026,27
                            </Text>
                        </View>
                        <View style={{
                                flexDirection:"row",
                                paddingLeft:20,
                                paddingRight:20,
                                justifyContent:"space-between"}}
                        > 
                            <Text>
                                Cartao de Credito
                            </Text>
                            <Text>
                                R$ 13.00,27
                            </Text>
                        </View>
                    
                    </View>
                </Collapsible>

                <View style={{marginBottom:10, paddingLeft:10, paddingRight:10}}>
                    <Button
                        title="Finaliza Pedido"
                        type="outline"
                        onPress={()=>{alert("Finaliza Pedido!");}}

                    />
                </View>

                
                </ScrollView>
            </View>
        </Fragment>            
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
      
  },
  
  header: {
    flexDirection:"row",
    alignSelf:"center",
    backgroundColor: '#FFF',
    padding: 1,
  },
 
  content: {
    flexDirection:"column",
    padding: 20,
    backgroundColor: '#fff',
  },
  
  
});