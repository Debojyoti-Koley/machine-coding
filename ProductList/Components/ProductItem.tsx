import { Text, View, StyleSheet } from 'react-native';

export default function ProductItem({ name, price }: { name: string, price: number }) {
    return (
        <View style={styles.container}>
            <Text>Name: {name}</Text>
            <Text>Price: ${price.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})