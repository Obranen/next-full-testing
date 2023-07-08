import {FC, useState} from 'react'
import {IReview} from '../../../app/reviews/page'
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Flex
} from '@chakra-ui/react'

interface IItem {
  review: IReview
}

const Item: FC<IItem> = ({review}) => {
  const [isEdit, setIsEdit] = useState(false)

  const cancelEdit = (isCancel: boolean) => {
    setIsEdit(isCancel)
  }

  return (
    <Container marginTop={'20px'} marginBottom={'20px'}>
      {isEdit ?
        // <UpdatePost cancelEdit={cancelEdit} post={post}/>
        <></>
        :
        <Card>
          <CardHeader>
            <Flex gap="2" alignItems="center">
              <Avatar name={review.nameReview}/>
            </Flex>
          </CardHeader>
          <Divider color={'lightgray'}/>
          <CardBody>
            {review.descReview}
          </CardBody>
          <CardFooter justify={'space-between'}>
            <Button
              colorScheme="red" variant="outline"
              // onClick={() => deletePostMutation.mutate(post.id)}
            >Delete</Button>
            <Button
              // onClick={() => setIsEdit(true)}
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