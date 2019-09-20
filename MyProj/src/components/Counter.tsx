// Viewだけを管理する
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import * as React from 'react';

export interface CounterProps {
    value?: number;
    addCount?: (val: number) => void;
    reset?: () => void;
}

const Counter: React.SFC<CounterProps> = (props: CounterProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.countText}>{props.value || 0}</Text>
            <View style={styles.buttons}>
                <Button
                    style={styles.button}
                    onPress={() => {
                        if (props.addCount) props.addCount(1);
                    }}
                >
                    <Text>increment</Text>
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        if (props.reset) props.reset();
                    }}
                >
                    <Text>reset</Text>
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    countText: {
        flex: 0.2,
        fontSize: 90,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        color: 'black',
    },
    buttons: {
        flex: 0.2,
        flexDirection: 'row',
    },
    button: {
        paddingLeft: 30,
        paddingRight: 30,
        margin: 10,
    },
});

export default Counter;