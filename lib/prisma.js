import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
    return new PrismaClient()
}
const globalThis = global;
globalThis.prismaGlobal = globalThis.prismaGlobal || undefined;

const prisma = globalThis.prsimaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prsimaGlobal = prisma
