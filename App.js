import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Picker, TouchableHighlight, Button } from 'react-native';

console.disableYellowBox = true;
export default class App extends Component {



constructor(props){
    super(props)
    this.state = { click:"",
    clickcentimetros:"",
    unidade: "", 
    firstValue: '',
    secondValue: '',
    thirdValue: 10000,
    sum: 0,
    texto2:'',
    escrever:'',
    mul: 0,
    mul1: 0,
  }

this.escrever = this.escrever.bind(this);
this.click = this.click.bind(this);
this.clickcentimetros = this.clickcentimetros.bind(this);
  }

  calculateSum = () => {
  const { firstValue, secondValue } = this.state;

  this.setState({
    sum: Number(firstValue) * Number(secondValue)
  });
}

calculateMul = () => {
  const { firstValue, secondValue, thirdValue } = this.state;

  this.setState({
    mul: Number(firstValue) * Number(secondValue) * Number(thirdValue)
  });
}

calculateMul1 = () => {
  const { firstValue, secondValue, thirdValue } = this.state;

  this.setState({
    mul1: Number(firstValue) * Number(secondValue) / Number(thirdValue)
  });
}



escrever(t) {
  let s = this.state;  
  s.unidade = t;
  s.texto2 = this.mudarVogais(t);
  this.setState(s);

}

click(x) {
  let s = this.state;
  x = "Metros";
  s.escrever = this.escrever(x)
  
  this.setState(s);
}
clickcentimetros(x) {
  let s = this.state;
    x = "Centímetros";
    s.escrever = this.escrever(x)
    
    this.setState(s);

}


  render() {
    return (
      <View style={styles.container}>


        <Text style={styles.welcome}>Converter medidas m²«»cm²</Text>                        
                          
                            <TextInput style={styles.Inputcm}

                            onChangeText={(thirdValue) => this.setState({thirdValue})}
                            value={this.state.thirdValue}
                            />  

<View style={styles.largura1}>

                            <TextInput style={styles.medida} placeholder="Digite a Largura" 
                            onChangeText={(firstValue) => this.setState({firstValue})}
                            value={this.state.firstValue}
                            /> 
</View>                 

<View style={styles.comprimento1}>           

                            <TextInput style={styles.medida} placeholder="Digite a Comprimento"
                            onChangeText={(secondValue) => this.setState({secondValue})}
                            value={this.state.secondValue}
                            />        
 </View>

                  <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop:10 }} >    

                            <TouchableHighlight onPress={this.calculateMul}>                 

                                     <Text style={styles.calcular}>m² para cm²</Text>

                            </TouchableHighlight>

                   <Text style={{width:10}}>  </Text>

  <View style={{ flexDirection:'row', alignItems: 'center', justifyContent: 'center' }} >    


                            <Text style={styles.resultado}>{`${this.state.mul.toFixed(2)}`}</Text>     

                     <Text style={{width:10}}>  </Text>             

                     <Text style={{width:25, paddingTop:15}}>cm²</Text>

</View>
                      </View>
            

  <View >
 
                            <TextInput style={styles.Inputcm}

                            onChangeText={(thirdValue) => this.setState({thirdValue})}
                            value={this.state.thirdValue}
                            />  
                  <View style={{ alignItems: 'center', justifyContent: 'center' }} >    

                            <TouchableHighlight onPress={this.calculateMul1}>                 

                                     <Text style={styles.calcular}>cm² para m²</Text>

                            </TouchableHighlight>

                   <Text style={{width:10}}>  </Text>

                      
 <View style={{ flexDirection:'row', alignItems: 'center', justifyContent: 'center' }} >  

                            <Text style={styles.resultado}>{`${this.state.mul1.toFixed(4)}`}</Text>     

                     <Text style={{width:10}}>  </Text>             

                     <Text style={{width:25, paddingTop:15}}>m²</Text>

</View>
                      </View>
            </View>





      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:5
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingTop: 20
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  medida:{
    height: 50,
    width: 180,
    borderWidth:1,
    borderColor:"#000000",
    margin:10, 
    padding:10
  },
  calcular:{
    height: 50,
    width: 150,
    borderWidth:1,
    borderColor:"#000000",
    margin:10, 
    padding: 15,
    textAlign: 'center',
    justifyContent: 'center', 
    alignItems: 'center',
     flexDirection:'row'   

  },
  resultado:{
    paddingTop:10,
    fontSize: 18
  
  },
  varios:{
    paddingTop:5,
    fontSize: 16
  },
  largura1:{
    paddingTop:10
  },
  comprimento1:{
    paddingTop:10
  },
  calcular1:{
    
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "center"

  },
  escolha:{
    
    paddingRight: 10
  },
  centimetros:{
    paddingTop:0
  },
  input:{
    width: 1, 
    height:1

  },
  Inputcm: {
    width: 1,
    height: 1
  }
});
