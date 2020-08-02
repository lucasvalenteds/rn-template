import React from 'react';
import Native from 'react-native';

export const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <Native.StatusBar />
      <Native.SafeAreaView>
        <Native.ScrollView></Native.ScrollView>
      </Native.SafeAreaView>
    </>
  );
};
