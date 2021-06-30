import logo from './logo.svg';
import BpmTools from './bpmtools.app/BpmTools';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
<ChakraProvider>
  <BpmTools />
</ChakraProvider>
  );
}

export default App;
