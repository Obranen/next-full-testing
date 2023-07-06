import {prisma} from '../../prisma/db'
import {Context} from '@/app/api/graphql/route'
// prisma.reviews.findMany()
export const resolvers = {
  Query: {
    getReview: async (context: Context) => await context.prisma.reviews.findMany()
  },
  Mutation: {
    addReview: async (_: any, {nameReview, descReview}: any) => {
      const newReview = await prisma.reviews.create({
        data: {
          nameReview: nameReview,
          descReview: descReview
        }
      })
      return newReview
    },

    removeReview: async (_: any, {id}: any) => {
      await prisma.reviews.delete({
        where: {id: id},
      })
      return null
    },
    editReview: async (_: any, {id, nameReview, descReview}: any) => {
      await prisma.reviews.update({
        where: {
          id: id
        },
        data: {
          descReview,
          nameReview
        },
      })
      return null
    }
  }
}