import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import cio from 'cheerio-without-node-native';

class ModalExample extends Component {
  state = {
    ppgUserID: '',
    modalVisible: false,
    ppg_array: []
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  submitPIDtoPPG(pid) {
    return fetch('https://www.poppriceguide.com/guide/trackerupdates.php', {
    method: 'POST',
    headers: {
      'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
      'origin': 'https://www.poppriceguide.com',
      'x-requested-with': 'XMLHttpRequest',
      'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
      'accept': "*/*",
      'cache-control': 'no-cache',
      'accept-encoding': "gzip, deflate, br",
      'accept-language': "en-US,en;q=0.9" 
    },
    body: 'cType=addcollitem&cUserID='.concat(this.state.ppgUserID).concat('&cItemID=').concat(pid).concat('&cName=&cReplace=N&cPurchaseDate=&cPurchasePrice=0.00&cPurchasedFrom=&cPkgCondition=2&cNotes='),
  }).then((response) => {
      console.log('Submitted')
    })
    .catch((error) => {
      console.error(error);
    });
  }

  async fetchFromPPG(productName) {
        const searchUrl = 'https://www.poppriceguide.com/guide/searchresults.php?search='.concat(productName);
        const response = await fetch(searchUrl);   // fetch page
        var products = [];

        if (response.ok) {

            const htmlString = await response.text();

            const $ = cio.load(htmlString, {
              normalizeWhitespace: true,
              xmlMode: true
          });

            let pids = $('div .itemrow'); 
            $(pids).each(function(i, pid){
                let product = {
                  productId: $(pid).attr('id').replace('i', ''),
                  productName: $(pid).find('div .itemname').text(),
                  productValue: $(pid).find('div .itemvalue').text(),
                  productImage: $(pid).find('div .col-50').find('a').children().attr('src')
                };

                products.push(product);

                // console.log($(pid).attr('id'));
                // console.log($(pid).find('div .itemname').text())
                // console.log($(pid).find('div .itemvalue').text());
                // console.log($(pid).find('div .col-50').find('a').children().attr('src'));
            });
        }

        const ppgUserID = this.props.navigation.getParam('ppgUserID', '');

        console.log(ppgUserID);

        this.setState({
          ppg_array: products,
          ppgUserID: ppgUserID
        });

        this.setModalVisible(true);
    }

    createCards() {
      const product_array = this.props.navigation.getParam('product_array', '[]');
      let cards = [];
               {
                   product_array.map((u, i) => {
                    cards.push (
                        <Card
                            title={u.title} 
                            key={i} >
                            <View style={styles.cardContents}>
                                <Image
                                    style={{width: 180, height: 130}}
                                    source={{ uri: 'https://funko.com'.concat(u.imageUrl) }}
                                />
                                <Button
                                    buttonStyle={{borderRadius: 0}}
                                    title='Select' 
                                    onPress={() => {
                                        console.log(u.title.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, " ").replace(/glows/gi, 'glow').replace('R&M', ' ').replace('2 Pack', '').replace(/-/g, '').concat(' ', u.boxNumber));
                                        this.fetchFromPPG(u.title.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, " ").replace(/glows/gi, 'glow').replace('R&M', ' ').replace('2 Pack', '').replace(/-/g, '').concat(' ', u.boxNumber));
                                    }}
                                />
                            </View>
                        </Card>
                    );
                    })
               }
          return cards;
    }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            this.setModalVisible(!this.state.modalVisible);
            if (this.state.ppg_array.length > 0) {
              return (
                <Text style={{fontSize: 25}}>Choose one of the following: </Text>
              )
            } else {
              return (
                <Text style={{fontSize: 25}}>No result found. Try again or enter product manually.</Text>
              )
            }
          }}>
          <ScrollView style={styles.modal}>
              <Text style={{fontSize: 25}}>PPG Results </Text>
            <View>
               {
                   this.state.ppg_array.map((u, i) => {
                    return (
                        <Card
                            title={u.productName} 
                            key={i} >
                            <View style={styles.cardContents}>
                                <Image
                                    style={{width: 180, height: 130}}
                                    source={{ uri: u.productImage }}
                                />
                                <Button
                                    buttonStyle={{borderRadius: 0}}
                                    title='Add to PPG collection' 
                                    onPress={() => {
                                        this.submitPIDtoPPG(u.productId);
                                        alert(`Adding product ${u.productName} to collection with PID: ${u.productId}`)
                                    }}
                                />
                            </View>
                        </Card>
                    );
                    })
               }

               <View style={styles.closeModalbtn}>
                 <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text style={styles.modalClose}>Close</Text>
                  </TouchableHighlight>
              </View>
            </View>
          </ScrollView>
        </Modal>

        {/* <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight> */}
        <ScrollView>
          {this.createCards()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        flexDirection: 'column'
    },
    closeModalbtn: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalClose: {
      fontSize: 30
    },
    cardContents: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ModalExample;