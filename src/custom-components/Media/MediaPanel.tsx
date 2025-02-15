import React, { memo } from 'react'
import { 
  Button,
  Input, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton, 
  useDisclosure,
} from '@chakra-ui/react'
import { useForm } from '~hooks/useForm'
import FormControl from '~components/inspector/controls/FormControl'
import usePropsSelector from '~hooks/usePropsSelector'
import Medias from '~components/medias/Medias'


const MediaPanel = () => {

  const { setValueFromEvent, setValue } = useForm()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const src = usePropsSelector('src')
  const alt = usePropsSelector('alt')
  const htmlHeight = usePropsSelector('htmlHeight')
  const htmlWidth = usePropsSelector('htmlWidth')

  return (
    <>
       <FormControl label="Source" htmlFor="src">
        <Input
          placeholder="Media URL"
          value={src || ''}
          size="sm"
          name="src"
          onChange={setValueFromEvent}
          onBlur={setValueFromEvent}
        />
        <Button size={'xs'} onClick={onOpen}>...</Button>
      </FormControl>
      <FormControl label="Alt" htmlFor="alt">
        <Input
          value={alt || ''}
          size="sm"
          name="alt"
          onChange={setValueFromEvent}
        />
      </FormControl>
      <FormControl label="Html height" htmlFor="htmlHeight">
        <Input
          value={htmlHeight || ''}
          size="sm"
          name="htmlHeight"
          onChange={setValueFromEvent}
        />
      </FormControl>

      <FormControl label="Html width" htmlFor="htmlWidth">
        <Input
          value={htmlWidth || ''}
          size="sm"
          name="htmlWidth"
          onChange={setValueFromEvent}
        />
      </FormControl>


      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW={'60vw'} maxH={'90vh'} overflowY={'scroll'}>
          <ModalCloseButton />
          <ModalBody display={'flex'} flexDirection={'column'}>
          <Medias setMediaSrc={setValue} mediaPanelClose={onClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
      
    </>
  )
}

export default memo(MediaPanel)
