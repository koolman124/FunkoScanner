import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native'
import {
  TextInput,
  Button,
  Modal,
  Portal,
  Provider,
  Card,
  Title,
  Paragraph
} from 'react-native-paper'

export default class HomeScreen extends React.Component {
  state = {
    ppgUserID: '',
    visible: false
  }

  _showModal = () => this.setState({ visible: true })
  _hideModal = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state
    return (
      <Provider>
        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <View style={styles.welcomeContainer}>
              <Image
                source={require('../assets/images/fnkoscannerlogo.png')}
                style={styles.welcomeImage}
              />
            </View>

            <View style={styles.getStartedContainer}>
              <Text style={styles.developmentModeText}>
                Welcome to the FunkoScanner app.
              </Text>
              <Text style={styles.developmentModeText}>
                Enter your User ID on PPG to get started.
              </Text>
              <Text onPress={this._showModal} style={styles.helpLinkText}>
                How to get your User ID on PPG
              </Text>
            </View>

            <View style={styles.getStartedContainer}>
              <TextInput
                label="PPG User ID"
                mode="outlined"
                style={{ width: '90%' }}
                value={this.state.user}
                onChangeText={(ppgUserID) => this.setState({ ppgUserID })}
              />
            </View>

            <View style={styles.getStartedContainer}>
              <Button
                mode="contained"
                onPress={() => {
                  if (this.state.ppgUserID != '') {
                    this.props.navigation.navigate('Scan', {
                      ppgUserID: this.state.ppgUserID
                    })
                  } else {
                    Alert.alert('Enter User ID please.')
                  }
                }}
              >
                Submit
              </Button>
            </View>

            <View style={styles.getStartedContainer}>
              <Text style={styles.noteText}>
                NOTE: If you enter your User ID incorrectly, the app will not be
                able to add items to your collection. The app is unable to
                confirm if you entered your User ID correctly.
              </Text>
            </View>

            <Portal>
              <Modal visible={visible} onDismiss={this._hideModal}>
                <Card>
                  <Card.Title
                    title="Instructions"
                    subtitle="Must be done on a computer or where you can view page source"
                  />
                  <Card.Content>
                    <Title>Step 1</Title>
                    <Paragraph>
                      Login to your Poppriceguide account on the site.
                    </Paragraph>
                    <Image source={require('../assets/images/step1.png')} />
                    <Title>Step 2</Title>
                    <Paragraph>
                      Once logged in, you should be redirected to the account
                      page. If it doesn't redirect, click the profile text in
                      the header bar.{' '}
                    </Paragraph>
                    <Image source={require('../assets/images/step2.png')} />
                    <Paragraph>
                      Here is where you will right click on the page and click
                      view source. Ctrl + U may work as well.
                    </Paragraph>
                    <Title>Step 3</Title>
                    <Paragraph>
                      On the page source, you will look for your User ID. Ctrl +
                      F on the page and search for "wpum_user_id". This should
                      lead you to where it is located on the page source. On
                      that same line, there will be value="random numbers".
                      These random numbers is your User ID.
                    </Paragraph>
                    <Image source={require('../assets/images/step3.png')} />
                  </Card.Content>
                  <Card.Actions>
                    <Button onPress={this._hideModal}>Ok</Button>
                  </Card.Actions>
                </Card>
              </Modal>
            </Portal>
          </ScrollView>
        </View>
      </Provider>
    )
  }
}

HomeScreen.navigationOptions = {
  header: () => false
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  noteText: {
    marginBottom: 20,
    color: 'red',
    fontSize: 15,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: 'center',
    padding: 5,
    marginHorizontal: 20
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
})
