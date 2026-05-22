import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SignInPage() {
    const [input, setInput] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState({ name: false, email: false, password: false });
    const isValidName = (name: string) => {
        const onlyLetters = /^[A-Z a-z ]*$/;
        return name.trim() !== '' && onlyLetters.test(name);
    }
    const isValidEmail = (email: string) => {
        const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email.trim() !== '' && emailCheck.test(email);
    }
    const isValidPassword = (password: string) => {
        return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[@$!%*?&]/.test(password);
    }
    const cleanInput = (inpObj) => {
        const clean = {
            name: inpObj.name.trim(),
            email: inpObj.email.trim(),
            password: inpObj.password.trim(),
        }
        return clean;
    }
    const handleNameInput = (text: string) => {
        setInput(prev => ({ ...prev, name: text }));
        setError(prev => ({ ...prev, name: text.length > 0 && !isValidName(text) }));
    }
    const handleEmailInput = (emailText: string) => {
        setInput(prev => ({ ...prev, email: emailText }));
        setError(prev => ({ ...prev, email: emailText.length > 0 && !isValidEmail(emailText) }));
    }
    const handlePasswordInput = (passwordText: string) => {
        setInput(prev => ({ ...prev, password: passwordText }));
        setError(prev => ({ ...prev, password: passwordText.length > 0 && !isValidPassword(passwordText) }));
    }
    const handleSubmit = () => {
        const cleanedInput = cleanInput(input);
        console.log(cleanedInput);
        setInput({ name: '', email: '', password: '' });
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder='name' value={input.name} onChangeText={text => handleNameInput(text)} />
                {error.name && <Text style={{ color: 'red' }}> Only letters are allowed</Text>}
                <TextInput placeholder='email' value={input.email} onChangeText={text => handleEmailInput(text)} />
                {error.email && <Text style={{ color: 'red' }}> Invalid email format</Text>}
                <TextInput placeholder='password' value={input.password} onChangeText={text => handlePasswordInput(text)} />
                {error.password && <Text style={{ color: 'red' }}> Password must be at least 8 characters long and include uppercase, lowercase, digit, and special character</Text>}
                <Button title='Submit' onPress={handleSubmit} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "80%",
        width: "80%",
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
    inputContainer: {
        width: '80%',
        height: '80%',
        flexDirection: 'column',
    }
})