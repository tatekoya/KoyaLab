
import React, { Fragment, Component } from 'react';
import { View, StyleSheet, Text, RefreshControl, } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Counter from '../containers/Counter';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<null>;
}

class HomeScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <Fragment>
        <Container style={styles.body}>
          <Text>遷移するテストボタン</Text>
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
            <Counter />
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
