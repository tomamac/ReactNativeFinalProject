import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../styles/styles';


type FilterModalProps = {
    visible: boolean;
    onClose: () => void;
  };

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose }) => {
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);
  const [groupBy, setGroupBy] = useState<string>('None');
  const [sortBy, setSortBy] = useState<string>('None');

  const priorities = [
    { label: 'High Priority', color: '#ff0000' },
    { label: 'Medium', color: '#ffa500' },
    { label: 'Low', color: '#0000ff' },
    { label: 'Unimportant', color: '#808080' },
  ];

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Filter</Text>

          <TouchableOpacity style={styles.option} onPress={() => setSelectedPriority('All')}>
            <FontAwesome name="folder" size={20} color="#000" />
            <Text style={styles.optionText}>All</Text>
            <FontAwesome name={selectedPriority === 'All' ? 'dot-circle-o' : 'circle-o'} size={20} color="#000" />
          </TouchableOpacity>

          {priorities.map((priority, index) => (
            <TouchableOpacity key={index} style={styles.option} onPress={() => setSelectedPriority(priority.label)}>
              <FontAwesome name="bookmark" size={20} color={priority.color} />
              <Text style={styles.optionText}>{priority.label}</Text>
              <FontAwesome name={selectedPriority === priority.label ? 'check-square-o' : 'square-o'} size={20} color="#000" />
            </TouchableOpacity>
          ))}

          <View style={styles.separator} />

          <Text style={styles.subTitle}>Group by</Text>
          <View style={styles.buttonGroup}>
            {['None', 'Date', 'Priority', 'Tag'].map((option) => (
              <TouchableOpacity key={option} style={[styles.groupButton, groupBy === option && styles.selectedButton]} onPress={() => setGroupBy(option)}>
                <Text style={styles.buttonText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.subTitle}>Sort by</Text>
          <View style={styles.buttonGroup}>
            {['None', 'Date', 'Priority', 'Tag'].map((option) => (
              <TouchableOpacity key={option} style={[styles.groupButton, sortBy === option && styles.selectedButton]} onPress={() => setSortBy(option)}>
                <Text style={styles.buttonText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.footer}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.footerText}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.footerText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#cfe3e0',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  groupButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.taskify50,
  },
  selectedButton: {
    backgroundColor: colors.taskify75,
  },
  buttonText: {
    color: colors.taskify100,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.taskify100,
  },
});

export default FilterModal;