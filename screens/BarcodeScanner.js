import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

export default class BarcodeScanner extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  getProductsFromFunkoAPI(data) {
    return fetch('https://www.funko.com/api/search/fields', {
      method: 'POST',
      headers: {
        'user-agent': "Popspedia/28 CFNetwork/978.0.7 Darwin/18.7.0",
        'content-type': "application/json",
        'accept': "*/*",
        'cache-control': 'no-cache',
        'accept-encoding': "gzip, deflate, br",
        'accept-language': "en-US"
      },
      body: JSON.stringify({
        'upc': data
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        this.props.navigation.navigate('ModalExample', {
          product_array: responseJson.hits
        })
        // if (responseJson.total > 1)
        // {
        //   console.log("More than one product")
        // }
        // else {
        //   console.log("Found product")
        //   var productName = responseJson.hits[0].title
        //   console.log(productName)
        //   alert(`Found ${productName} `);
        // }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button
            title={'Tap to Scan Again'}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    // console.log(data)
    // console.log(parseInt(data, 10))
    this.getProductsFromFunkoAPI(parseInt(data, 10))
  };
}