import { PrismaClient } from "@prisma/client"

//the global declaration of prisma, so it can over anywhere in our code
declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
//if we re in dev then create the prisma client
// we re doin it coz the next js 13 hot reloading can cause the bunch of this prisma client created and gives us the warning.
//so by this way we assing this to global prisma client which will not affect the hot reloading 
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client
