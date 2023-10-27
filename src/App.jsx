import { AppWrapper } from "./AppStyle"
import { Title } from "./components/Style-components/Title"
import { Flex } from "./components/Style-components/Flex"
import { Console } from "./components/Style-components/Console"
import { Button } from "./components/Style-components/Button"


const App = () => {
  return (
    <AppWrapper>
      <Flex justify={'center'}>
        <Title color={'green'}>Console cmd 2023. IT-BRAINS</Title>
      </Flex>
      <Flex direction={'column'}>
        <Console />
        <Button outline brColor={'green'} color={'green'} align={'flex-end'}>Send</Button>
      </Flex>
    </AppWrapper>
  )
}

export default App