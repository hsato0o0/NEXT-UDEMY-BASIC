import { prisma } from './prisma';

export async function getContacts(): Promise<
  {
    id: string;
    name: string;
    email: string;
  }[]
> {
  return await prisma.contact.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function getContact(id: string): Promise<{
  name: string;
  email: string;
}> {
  return await prisma.contact.findFirst({
    select: { name: true, email: true },
  });
}
