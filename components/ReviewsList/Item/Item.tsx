import {FC, useState} from 'react'
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Flex, Heading
} from '@chakra-ui/react'
import UpdateReview from './UpdateReview/UpdateReview'
import {useRouter} from 'next/navigation'
import {IReview} from '../../../interface/review'
import {deleteReview} from '../../../async/review'

interface IItem {
  review: IReview
}

const Item: FC<IItem> = ({review}) => {
  const [isEdit, setIsEdit] = useState(false)
  const router = useRouter()

  const cancelEdit = (isCancel: boolean) => {
    setIsEdit(isCancel)
  }

  return (
    <Container marginTop={'20px'} marginBottom={'20px'}>
      {isEdit ?
        <UpdateReview cancelEdit={cancelEdit} review={review}/>
        :
        <Card>
          <CardHeader>
            <Flex gap="2" alignItems="center">
              <Avatar name={review.nameReview}/>
              <Heading size="sm">{review.nameReview}</Heading>
            </Flex>
          </CardHeader>
          <Divider color={'lightgray'}/>
          <CardBody>
            {review.descReview}
          </CardBody>
          <CardFooter justify={'space-between'}>
            <Button
              colorScheme="red" variant="outline"
              onClick={() => deleteReview(review.id).finally(router.refresh)}
            >Delete</Button>
            <Button
              onClick={() => setIsEdit(true)}
              colorScheme="blue"
              variant="outline"
            >Edit</Button>
          </CardFooter>
        </Card>
      }
    </Container>
  )
}

export default Item