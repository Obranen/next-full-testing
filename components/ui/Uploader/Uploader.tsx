import {FC} from 'react'
import Image from 'next/image'
import ImageUploading, {ImageListType} from 'react-images-uploading'
import {Button, Center, Flex, SimpleGrid} from '@chakra-ui/react'

interface IUploader {
  multiple?: boolean
  maxQuantityImages?: number
  onChange: (imageList: ImageListType) => void
  images: any[]
}

const Uploader: FC<IUploader> = ({multiple = false, maxQuantityImages = 5, onChange, images}) => {
  return (
    <ImageUploading
      multiple={multiple}
      value={images}
      onChange={onChange}
      maxNumber={maxQuantityImages}
    >
      {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
        <>
          <Center
            {...dragProps}
            style={isDragging ? {borderColor: 'orange'} : undefined}
            h="300px"
            border={'2px dotted teal'}
            borderRadius={'6px'}
            marginTop={'20px'}
            marginBottom={'20px'}
          >
            <Button
              style={isDragging ? {color: 'orange'} : undefined}
              onClick={onImageUpload}
              colorScheme="teal"
              variant="outline"
            >
              {isDragging ? 'Click or Drop here' : 'Upload space'}
            </Button>
          </Center>

          <Center marginBottom={'20px'}>
            <Button colorScheme="teal" variant="solid" onClick={onImageRemoveAll}> Remove all images</Button>
          </Center>

          <SimpleGrid columns={3} spacing={5} marginBottom={'20px'}>
            {imageList.map((image, index) => (
              <div key={index} style={{position: 'relative', width: '100%', height: '120px', marginBottom: '20px'}}>
                {image.dataURL && image.file?.name &&
                  <Image src={image.dataURL} alt={image.file?.name} fill/>}
                <Flex flex={0} justify={'space-between'} style={{marginTop: '124px'}}>
                  <Button size={'xs'} onClick={() => onImageUpdate(index)} colorScheme="teal"
                          variant="outline">Update</Button>
                  <Button size={'xs'} onClick={() => onImageRemove(index)} colorScheme="teal"
                          variant="outline">Remove</Button>
                </Flex>
              </div>
            ))}
          </SimpleGrid>
        </>
      )}
    </ImageUploading>
  )
}

export default Uploader