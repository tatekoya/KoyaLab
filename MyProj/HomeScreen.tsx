
import React, { Fragment } from 'react';

import { StyleSheet, Text, RefreshControl, } from 'react-native';

import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <Fragment>
        <Container style={styles.body}>
          <Button
            warning
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Details', {
                itemId: 100,
                otherParam: 'anything you want here',
              });
            }}
          >
            <Text>details page</Text>
          </Button>
        </Container>
      </Fragment>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  button: {
    paddingLeft: 30,
    paddingRight: 30,
    margin: 10,
  },
});

export default HomeScreen;
