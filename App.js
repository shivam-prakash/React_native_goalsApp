import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);


  const addGoalHandler = (goalItem) => {
    console.log(goalItem);
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalItem }]);
  }
  const deleteGoal = ((goalId) => {
    console.log("goalid"+goalId);
    setCourseGoals(currentGoals => {
     return currentGoals.filter(goal => goal.id !== goalId);
    });
  });
  return (

    <View style={styles.screen}>

      < GoalInput onAddGoal={addGoalHandler} />


      <FlatList data={courseGoals} keyExtractor={(item,index)=>item.id} renderItem={itemData => 
        <GoalItem title={itemData.item.value} pressHandler={() =>{console.log(itemData.item.key); deleteGoal(itemData.item.id)}} />
      }
      />
    </View>
  );

}
const styles = StyleSheet.create({
  screen: {
    padding: 50

  },


});


