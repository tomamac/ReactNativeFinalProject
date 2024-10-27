import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { styles } from '../styles/styles';

interface TaskItemProps {
  task: { text: string; completed: boolean };
  index: number;
  toggleTaskCompletion: (index: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, toggleTaskCompletion }) => {
  return (
    <View style={styles.taskCard}>
      <View style={styles.taskHeader}>
        <Text style={styles.taskHeaderText}>In Progress (1 Task)</Text>
        <TouchableOpacity>
          <Text style={styles.taskHeaderText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskInfo}>
        <Checkbox
          status={task.completed ? 'checked' : 'unchecked'}
          onPress={() => toggleTaskCompletion(index)}
          color="#fff"
        />
        <View>
          <Text style={styles.taskText}>{task.text}</Text>
          <Text style={styles.taskTime}>Today At 16:45</Text>
        </View>
        <View style={styles.priorityBadge}>
          <Text style={styles.priorityText}>High</Text>
        </View>
      </View>
    </View>
  );
};

export default TaskItem;