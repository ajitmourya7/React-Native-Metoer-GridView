/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, ListView} from 'react-native';
import Meteor, { withTracker, MeteorListView } from 'react-native-meteor';

/*Meteor.connect('ws://103.250.153.107:3003/websocket');*/ //do this only once

Meteor.connect('ws://192.168.0.18:3000/websocket');

class App extends Component<{}> {

  constructor(){
    super();

  }

  // renderRow(todo) {
  //   return (
  //       <View style={styles.card}>
  //       <Image source={{uri: todo.productInfo.images[0]}} style={styles.cardImage} />
  //       </View>
  //   )
  // }


  /* for row push*/
/*<View key={i.toString()+j} style={styles.btn}>
<Image  source={{uri:settingsdata[i+j].productInfo.images[0]}} style={styles.frames}/>
</View>*/

  data(settingsdata,todosReady){
    let rows = [];
    if (todosReady) {
      console.log(settingsdata);
      console.log(settingsdata[0].productInfo.images[0]);

      for (let i = 0; i<=(settingsdata.length/2);i++){
        let row = [];
        for (let j = 0; j<2; j++){
          row.push(

                <Image key={i.toString()+j} source={{uri:settingsdata[i+j].productInfo.images[0]}} style={styles.frames}/>


              )
        }
        rows.push( <View key={i+1000} style={styles.row}>{row}</View>)
      }

      console.log(rows)
    }

    return(
        <View style={styles.container}>
          {todosReady && <ScrollView style={styles.numbers}>{rows}</ScrollView>}
        </View>
    )

  }


  render() {

    const { settings, todosReady } = this.props;

    /*let rows = [];
    for (let i = 0; i<=(settings.length/2);i++){
      let row = [];
      for (let j = 0; j<2; j++){
        row.push(<Image source={settings[i].productInfo.images[0]} style={styles.btn}/>)
      }
      rows.push( <View key={i} style={styles.row}>{row}</View>)
    }
*/
    return (
        <View style={styles.container}>
          {/*<Text>{settings.name}</Text>*/}
          {/*{!todosReady && <Text>Not ready</Text>}*/}
          {/*<ScrollView>*/}
            {/*<MeteorListView*/}
                {/*collection="df_products"*/}
                {/*renderRow={this.renderRow}*/}
            {/*/>*/}
          {/*</ScrollView>*/}


          {this.data(settings,todosReady)}


          {/*{rows}*/}

        </View>
    );
  }
}

export default withTracker(params => {
  const handle = Meteor.subscribe('products');
  Meteor.subscribe('products');
  return {
    todosReady: handle.ready(),
    settings: Meteor.collection('df_products').find({})
  };
})(App);

// class Orders extends Component {
//   render() {
//     const { pendingOrders, todosReady } = this.props;
//
//     if (todosReady){
//     console.log(pendingOrders);
//     }
//
//     return (
//       <View>
//         {todosReady && <Text>HEy i am Online now</Text>}
//       </View>
//     )
//
//   }
// }
//
// export default withTracker(params => {
//   const handle = Meteor.subscribe('products');
//   return {
//     todosReady: handle.ready(),
//     pendingOrders: Meteor.collection('df_products').find({}),
//   };
// })(Orders);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  box: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'black',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  elementsDATA: {
    flex: 1,
    color: 'white',
    padding: 10,
    textAlign: 'center'
  },
  card: {
    borderWidth: 3,
    borderRadius: 3,
    borderColor: '#000',
    width: 300,
    height: 300,
    padding: 10
  },
  cardImage: {
    height: 260,
  },
  textLeft: {
    position: 'absolute',
    left:0,
    top:0
  },
  textRight: {
    position: 'absolute',
    right: 0,
    top: 0
  },
  calculationText:{
    fontSize: 24,
    color: 'black'
  },
  resultText:{
    fontSize: 30,
    color: 'black'
  },
  white: {
    color: 'white'
  },
  btn: {
    flex: 1,
    height: 300,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 10
  },
  btnText: {
    fontSize: 30,
    color: 'white'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 1
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#636363',
    alignItems: 'stretch'
  },
  frames: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200
  }
});
