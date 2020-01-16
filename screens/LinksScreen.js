import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    getProductsFromFunkoAPI(data)
  };

  function getProductsFromFunkoAPI(data) {
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

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
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
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}