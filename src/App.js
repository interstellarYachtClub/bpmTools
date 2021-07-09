import logo from './logo.svg';
import BpmTools from './bpmtools.app/BpmTools';
import BpmAbout from './bpmtools.app/BpmAbout';
import BpmInfo from './bpmtools.app/BpmInfo';
import BpmHome from './bpmtools.app/BpmHome';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
<ChakraProvider>
  <BpmHome />
</ChakraProvider>
  );
}

export default App;
