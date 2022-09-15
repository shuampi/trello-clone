import React from 'react';
import { AppContainer, ColumnContainer, ColumnTitle, CardContainer } from './styles';


export function App() {
  return (
   <AppContainer>
      <ColumnContainer>
        <ColumnTitle>TODO:</ColumnTitle>
        <CardContainer>FirstItem</CardContainer>
        <CardContainer>SecondItem</CardContainer>
        <CardContainer>ThirdItem</CardContainer>
      </ColumnContainer>
   </AppContainer>
  );
}


