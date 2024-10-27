import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/styles';

interface PriorityModalProps {
    visible: boolean;
    onClose: () => void;
    onSelectPriority: (priority: string) => void;
  }

const PriorityModal: React.FC<PriorityModalProps> = ({ visible, onClose, onSelectPriority }) => {
    const priorities = [
        { label: 'High', color: colors.highPriority},
        { label: 'Medium', color: colors.mediumPriority },
        { label: 'Low', color: colors.lowPriority },
        { label: 'Unimportant', color: colors.unimportantPriority },
    ];

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    {priorities.map((priority) => (
                        <TouchableOpacity
                            key={priority.label}
                            style={styles.priorityItem}
                            onPress={() => {
                                onSelectPriority(priority.label);
                                onClose();
                            }}
                        >
                            <Ionicons name="bookmark-outline" size={24} color={priority.color} />
                            <Text style={[styles.priorityText, { color: priority.color }]}>{priority.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    priorityItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    priorityText: {
        marginLeft: 10,
        fontSize: 16,
    },
});

export default PriorityModal;