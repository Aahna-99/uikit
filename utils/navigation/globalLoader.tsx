import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

const GlobalLoader = ({ loading }) => (
  <Modal transparent={true} visible={loading}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <ActivityIndicator size="large" color="black" />
    </View>
  </Modal>
);

export default GlobalLoader;