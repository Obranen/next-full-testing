import {FC, useState} from 'react'
import {IProduct} from '../../../interface/product'
import ImageUploading, {ImageListType} from 'react-images-uploading'
import Image from 'next/image'

interface IList {
  products: IProduct[]
}

const List: FC<IList> = ({products}) => {

  // if (!products.length) {
  //   return <Heading as={'h2'} size={'lg'} textAlign={'center'} marginTop={'30px'} color={'red'}>
  //     No Products
  //   </Heading>
  // }

  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  const sendData = async () => {
    try {
      const data = new FormData()
      // @ts-ignore
      data.set('file', images[0].file)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      })
      if (!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      console.error(e)
    }
  }

  return (
    <>
      {/*<SimpleGrid columns={5} spacing={3}>*/}
      {/*  {products.map((product: IProduct) =>*/}
      {/*    <Item key={product.id} product={product}/>*/}
      {/*  )}*/}
      {/*</SimpleGrid>*/}

      <ImageUploading
        // multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
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
            {/*// write your building UI*/}
            <div className="upload__image-wrapper">
              <div {...dragProps} style={{width: '500px', height: '300px', border: '1px dotted #000'}}>
                <button
                  style={isDragging ? {color: 'red'} : undefined}
                  onClick={onImageUpload}
                >
                  {isDragging ? 'Click or Drop here' : 'Upload space'}
                </button>
              </div>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  {image.dataURL && <Image src={image.dataURL} alt="" width={200} height={200}/>}
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                    <button onClick={sendData}>add</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </ImageUploading>
    </>
  )
}

export default List