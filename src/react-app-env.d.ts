/// <reference types="react-scripts" />;
declare module 'prettier/standalone'
declare module 'coloreact'
declare module 'browser-nativefs'

type ComponentType =
  | 'Accordion'
  | 'AccordionItem'
  | 'AccordionButton'
  | 'AccordionPanel'
  | 'AccordionIcon'
  | 'Alert'
  | 'AlertIcon'
  | 'AlertTitle'
  | 'AlertDescription'
  | 'AspectRatio'
  | 'AvatarBadge'
  | 'AvatarGroup'
  | 'Avatar'
  | 'Badge'
  | 'Box'
  | 'Breadcrumb'
  | 'BreadcrumbItem'
  | 'BreadcrumbLink'
  | 'Button'
  | 'Card'
  | 'Center'
  | 'Checkbox'
  | 'CircularProgress'
  | 'CloseButton'
  | 'Code'
  | 'Container'
  | 'Date'
  | 'DataProvider'
  | 'Divider'
  | 'Editable'
  | 'Flex'
  | 'FormControl'
  | 'FormLabel'
  | 'FormHelperText'
  | 'FormErrorMessage'
  | 'Grid'
  | 'GridItem'
  | 'Heading'
  | 'Icon'
  | 'IconButton'
  | 'Image'
  | 'Input'
  | 'UploadFile'
  | 'InputGroup'
  | 'InputLeftAddon'
  | 'InputRightAddon'
  | 'InputLeftElement'
  | 'InputRightElement'
  | 'Link'
  | 'List'
  | 'ListItem'
  | 'ListIcon'
  | 'Media'
  | 'Menu'
  | 'NumberInput'
  | 'Progress'
  | 'Radio'
  | 'RadioGroup'
  | 'Select'
  | 'SimpleGrid'
  | 'Spinner'
  | 'Stack'
  | 'Switch'
  | 'Tab'
  | 'Table'
  | 'Tabs'
  | 'TabList'
  | 'TabPanel'
  | 'TabPanels'
  | 'Tag'
  | 'Text'
  | 'Textarea'
  | 'Timer'

type MetaComponentType =
  | 'FormControlMeta'
  | 'AccordionMeta'
  | 'ListMeta'
  | 'AlertMeta'
  | 'CardMeta'
  | 'InputGroupMeta'
  | 'UploadFileMeta'
  | 'BreadcrumbMeta'

interface IComponent {
  children: string[]
  type: ComponentType
  parent: string
  id: string
  props: any
  rootParentType?: ComponentType
  componentName?: string
}

interface IComponents {
  [name: string]: IComponent
}

interface IPreviewProps {
  component: IComponent
}

interface IDataType {
  type: String,
  multiple: boolean,
  ref: boolean,
}

interface IWarning {
  pageId: String,
  pageName: String,
  component: IComponent,
  message: strring,
}

interface ComponentItemProps {
  id: string
  label: string
  type: ComponentType
  isMoved?: boolean
  isChild?: boolean
  isMeta?: boolean
  soon?: boolean
  rootParentType?: ComponentType
}
