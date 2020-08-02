import React from 'react';
import Native from 'react-native';

export const App: React.FC = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Native.StatusBar />
      <Native.SafeAreaView>
        <Native.ScrollView></Native.ScrollView>
      </Native.SafeAreaView>
    </React.Fragment>
  );
};
