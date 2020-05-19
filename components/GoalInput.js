import React, { useState } from 'react';
import { View, TextInput, StyleSheet,Button } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const changeGoalHandler = enteredText => {
        console.log("enteredtext"+enteredText);
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Enter goal"
                onChangeText={changeGoalHandler}
                value={enteredGoal} />


            <Button
                style={styles.buttonContainer}
                title="Add"
                onPress={() => props.onAddGoal(enteredGoal)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    input: {
        width: '80%',
        borderBottomWidth: 1,

    },
});
export default GoalInput;