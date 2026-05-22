import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Counter() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const renderCount = useRef(0);
    renderCount.current += 1;
    const updateCount2 = () => {
        setTimeout(() => {
            setCount2(count2 + 1);
        }, 1000);
    }
    const updateCount3 = () => {
        setTimeout(() => {
            setCount3(prev => prev + 1);
        }, 1000);
    }
    return (
        <View style={styles.container}>
            <View>
                <Text>{count1}</Text>
                <Button title={'Increment by 1'} onPress={() => setCount1(count1 + 1)} />
            </View>
            <View>
                <Text>{count2}</Text>
                <Button title={'Increment by 1'} onPress={updateCount2} />
            </View>
            <View>
                <Text>{count3}</Text>
                <Button title={'Increment by 1'} onPress={updateCount3} />
            </View>
            <Text>Render Count: {renderCount.current}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "80%",
        width: "80%",
    }
})