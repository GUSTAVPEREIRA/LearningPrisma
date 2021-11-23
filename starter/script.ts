import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  let result = await prisma.user.findMany();
  console.log(result);

  await prisma.user.update({
    data: {
      name: "Não é o usuário de teste"
    },
    where: {
      id: 4
    }
  })

  result = await prisma.user.findMany();
  console.log(result);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
