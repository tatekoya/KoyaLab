
import React, {Fragment} from 'react';
import { StyleSheet, Text} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import CounterView from "../components/CounterView";
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<null>;
}

class DetailScreen extends React.Component<Props> {
  render(){
    const {navigation} = this.props;
    const itemId = navigation.getParam('itemId','NO-ID');
    const otherParam = navigation.getParam('otherParam','some defoult value');

    return (
      <Fragment>
        <Container>
          <Container style={styles.body}>
            <Text>itemId:{JSON.stringify(itemId)}</Text>
            <Text>otherParam:{JSON.stringify(otherParam)}</Text>
            
            <CounterView />

            <Container style={styles.body}>
              <Button success style={styles.button} onPress={() => { this.props.navigation.navigate('Home') }}>
                <Text>main page</Text>
              </Button>
              <Button warning style={styles.button} onPress={() => { this.props.navigation.push('Details') }}>
                <Text>details page</Text>
              </Button>
              <Button primary style={styles.button} onPress={() => { this.props.navigation.goBack() }}>
                <Text>go back</Text>
              </Button>
            </Container>

          </Container>
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

export default DetailScreen;
