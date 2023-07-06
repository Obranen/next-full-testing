import {ApolloServer} from '@apollo/server'
import {startServerAndCreateNextHandler} from '@as-integrations/next'
import {resolvers} from '@/apolloServer/resolvers'
import {typeDefs} from '@/apolloServer/typeDefs'
import {PrismaClient} from '@prisma/client'
import {prisma} from '../../../../prisma/db'

export type Context = {
  prisma: PrismaClient
}

const apolloServer = new ApolloServer<Context>({
  resolvers,
  typeDefs
})

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({req, res, prisma})
})