import {FC, FormEvent, useState} from 'react'
import {IProduct} from '../../../interface/product'

interface IList {
  products: IProduct[]
}

const List: FC<IList> = ({products}) => {
  // const [file, setFile] = useState('')
  // const [urlFile, setUrlFile] = useState('')
  //
  // if (!products.length) {
  //   return <Heading as={'h2'} size={'lg'} textAlign={'center'} marginTop={'30px'} color={'red'}>
  //     No Products
  //   </Heading>
  // }

  const [file, setFile] = useState<File>()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return

    try {
      const data = new FormData()
      data.set('file', file)

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

      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <input type="submit" value="Upload" />
      </form>
    </>
  )
}

export default List