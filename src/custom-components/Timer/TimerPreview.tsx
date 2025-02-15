import React from 'react'
import { useDropComponent } from '~hooks/useDropComponent'
import { useInteractive } from '~hooks/useInteractive'
import { Box } from '@chakra-ui/react'
import Timer from '../../dependencies/custom-components/Timer'


const TimerPreview: React.FC<IPreviewProps> = ({ component }) => {
  
  const { drop, isOver } = useDropComponent(component.id, [])
  const { props, ref } = useInteractive(component, true)

  let boxProps: any = {}

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <Box as={'span'} pos="relative" ref={drop(ref)} {...boxProps}>
      <Timer ref={drop(ref)} {...props}/>
    </Box>
  )
}

export default TimerPreview
