import {FC, useState} from 'react'
import {Controller, SubmitHandler, useForm, useFormState} from 'react-hook-form'
import {Button, Card, CardFooter, CardHeader, FormControl, FormErrorMessage, FormLabel, Input} from '@chakra-ui/react'
import {useRouter} from 'next/navigation'
import {IReviewState} from '../../../../../interface/schema/review'
import {updateReview} from '../../../../../async/review'

interface IUpdateForm {
  review: IReviewState
  cancelEdit: (isCancel: boolean) => void
}

const UpdateForm: FC<IUpdateForm> = ({review, cancelEdit}) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const {handleSubmit, control, resetField} = useForm<IReviewState>({
    defaultValues: {nameReview: `${review.nameReview}`, descReview: `${review.descReview}`}
  })
  const {errors} = useFormState({control})
  const onSubmit: SubmitHandler<IReviewState> = async (data) => {
    setIsLoading(true)
    await updateReview({
      id: review.id,
      nameReview: data.nameReview,
      descReview: data.descReview
    }).finally(() => {
      setIsLoading(false)
      router.refresh()
    })

    resetField('nameReview')
    resetField('descReview')
    cancelEdit(false)
  }

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)} style={{marginBottom: '20px'}}>
          <CardHeader>
            <Controller
              control={control}
              name="nameReview"
              rules={{required: 'Заполните поле'}}
              render={({field}) => (
                <FormControl isInvalid={!!errors.nameReview?.message} marginTop={'20px'}>
                  <FormLabel>Author</FormLabel>
                  <Input
                    type="text"
                    value={field.value}
                    onChange={(e) => field.onChange(e)}
                  />
                  <FormErrorMessage>{errors.nameReview?.message}</FormErrorMessage>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="descReview"
              rules={{required: 'Заполните поле'}}
              render={({field}) => (
                <FormControl isInvalid={!!errors.descReview?.message} marginTop={'20px'}>
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    value={field.value}
                    onChange={(e) => field.onChange(e)}
                  />
                  <FormErrorMessage>{errors.descReview?.message}</FormErrorMessage>
                </FormControl>
              )}
            />
          </CardHeader>
          <CardFooter justify={'space-between'}>
            <Button onClick={() => cancelEdit(false)} colorScheme="green" variant="outline">Cancel</Button>
            <Button
              disabled={isLoading}
              type="submit"
              colorScheme="teal"
              variant="solid"
              loadingText="Loading..."
              isLoading={isLoading}
            >
              Save
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  )
}


export default UpdateForm