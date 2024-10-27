import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';

interface TaskItemProps {
  task: { text: string; completed: boolean };
  index: number;
  toggleTaskCompletion: (index: number) => void;
  deleteTask: (index: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, toggleTaskCompletion, deleteTask }) => {
  return (
    <View style={styles.taskCard}>
      <View style={styles.taskHeader}>
        <Text style={styles.taskHeaderText}>In Progress (1 Task)</Text>
        <TouchableOpacity onPress={() => deleteTask(index)}>
          <Text style={styles.taskHeaderText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskInfo}>
        <Checkbox
          status={task.completed ? 'checked' : 'unchecked'}
          onPress={() => toggleTaskCompletion(index)}
          color="#1b3b36"
        />
        <View>
          <Text style={task.completed ? styles.taxtTextcomplete : styles.taskText}>{task.text}</Text>
          <Text style={styles.taskTime}>Today At 16:45</Text>
        </View>
        <View style={styles.priorityBadge}>
          <Text style={styles.priorityText}>High</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskCard: {
    borderColor: '#1b3b36',
    borderRadius: 5,
    marginVertical: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 100,
    shadowRadius: 4,
    elevation: 5,
  },
  taskHeader: {
    backgroundColor: '#1b3b36', // Dark green background
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskHeaderText: {
    color: '#fff', // White text color
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    color: '#1b3b36', // White text color
    fontSize: 14,
  },
  taxtTextcomplete: {
    color: '#1b3b36', // White text color
    fontSize: 14,
    textDecorationLine: 'line-through'
  },
  taskTime: {
    color: '#888', // Grey color for time
    fontSize: 12,
    marginLeft: 8,
  },
  priorityBadge: {
    backgroundColor: '#00695c', // Teal color for priority badge
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  priorityText: {
    color: '#fff', // White text color
    fontSize: 12,
  },
});

export default TaskItem;