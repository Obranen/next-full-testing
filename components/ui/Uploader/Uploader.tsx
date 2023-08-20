import {FC, useEffect} from 'react'
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
            h="300px"
            border={isDragging ? '2px dotted orange' : '2px dotted teal'}
            borderRadius={'6px'}
            marginTop={'20px'}
            marginBottom={'20px'}
          >
            <Button
              onClick={onImageUpload}
              colorScheme={isDragging ? 'orange' : 'teal'}
              variant="outline"
            >
              {isDragging ? 'Click or Drop here' : 'Upload space'}
            </Button>
          </Center>

          <Center marginBottom={'20px'}>
            <Button colorScheme="red" variant="solid" onClick={onImageRemoveAll}> Remove all images</Button>
          </Center>

          <SimpleGrid columns={3} spacing={5} marginBottom={'20px'}>
            {imageList.map((image, index) => (
              <div key={index} style={{position: 'relative', width: '100%', height: '120px', marginBottom: '20px'}}>
                {image.dataURL && image.file?.name &&
                  <Image src={image.dataURL} alt={image.file?.name} fill/>}
                <Flex flex={0} justify={'space-between'} style={{marginTop: '124px'}}>
                  <Button size={'xs'} onClick={() => onImageUpdate(index)} colorScheme="blue"
                          variant="outline">Update</Button>
                  <Button size={'xs'} onClick={() => onImageRemove(index)} colorScheme="red"
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