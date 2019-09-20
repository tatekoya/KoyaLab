// 現在の数字を表示するコンポーネント
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'native-base';
import * as React from 'react';
import { addCount } from "../actions/Count";
import { AppState } from "../Reducer";

const CounterView = () => {
    const state = useSelector((state: AppState) => state);
    const dispatch = useDispatch();

    return (
        <View>
            <Text style={styles.countText}>
                {state.counter.value || 0}
            </Text>
            <Button
                onPress={() => {
                    dispatch(addCount(1));
                }}
            >
                <Text>increment</Text>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    countText: {
        fontSize: 90,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        color: 'black',
    },
});

export default CounterView;