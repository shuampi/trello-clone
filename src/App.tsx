import {Column} from './Column';
import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem';


export function App() {
  return (
   <AppContainer>
      <Column text="TODO:"/>
      <AddNewItem toggleButtonText="+ Add another list"
      onAdd={console.log}
      />
   </AppContainer>
  );
}


