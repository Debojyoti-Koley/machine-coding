import { StyleSheet, Text, View, TextInput, FlatList, SafeAreaView } from 'react-native';
import { useState } from 'react';
import ProductItem from './Components/ProductItem';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const data = [
    { id: 1, name: 'MacBook Pro', price: 1299 },
    { id: 2, name: 'iPhone 15', price: 999 },
    { id: 3, name: 'AirPods Pro', price: 249 },
    { id: 4, name: 'iPad Air', price: 599 },
    { id: 5, name: 'Apple Watch', price: 399 },
    { id: 6, name: 'Samsung Galaxy', price: 899 },
    { id: 7, name: 'Sony Headphones', price: 349 },
    { id: 8, name: 'Dell XPS', price: 1199 },
    { id: 9, name: 'LG Monitor', price: 449 },
    { id: 10, name: 'Logitech Mouse', price: 79 }
  ]
  const handleSearchQuery = (queryString: string) => {
    setSearchQuery(queryString);
    const item = data.filter((i) => i.name.includes(queryString));
    console.log(item);
  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput placeholder="Search" onChangeText={handleSearchQuery} value={searchQuery} />
      <FlatList
        data={data}
        renderItem={({ item }) => <ProductItem name={item.name} price={item.price} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
