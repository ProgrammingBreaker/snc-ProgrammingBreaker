import { PrismaClient } from "@prisma/client";
import { Person } from "@/utils/common/person";

const prisma = new PrismaClient();

export const getPersonFromDB = async (person: Person) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        name: person,
      },
    });

    if (!user) {
      throw new Error(`${person} not found`);
    }

    return user;
  } catch (error) {
    console.error(`Error fetching person from DB`);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
