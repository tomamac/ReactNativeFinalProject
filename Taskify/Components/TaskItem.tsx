import { Card, CheckBox } from '@rneui/base';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface Task {
    text: string;
    completed: boolean;
}

interface TaskItemProps {
    task: Task;
    index: number;
    toggleTaskCompletion: (index: number) => void;
    deleteTask: (index: number) => void;
}

const TaskItem = ({ task, index, toggleTaskCompletion, deleteTask }: TaskItemProps): React.JSX.Element => {
    return (
        <>
            <Card.Title>CARD WITH DIVIDER</Card.Title>
            <View style={styles.taskItem}>
                <CheckBox
                    checked={task.completed}
                    onPress={() => toggleTaskCompletion(index)}
                />
                <Text style={task.completed ? styles.completedTask : styles.task}>
                    {task.text}
                </Text>
                <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() => deleteTask(index)} />
                </View>
            </View>
            <Card.Divider />
        </>
    );
};

const styles = StyleSheet.create({
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    task: {
        fontSize: 18,
    },
    completedTask: {
        fontSize: 18,
        textDecorationLine: 'line-through',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 5,
    },
    dangerButton: {
        backgroundColor: 'rgba(214, 61, 57, 1)',
        height: 40,
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
    },
});

export default TaskItem;