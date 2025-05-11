'use server';
import { ContactSchema } from '@/validations/contact';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

type ActionState = {
  success: boolean;
  errors: {
    name?: string[];
    email?: string[];
  };
  serverError?: string;
};

export default async function submitContactForm(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get('name');
  const email = formData.get('email');

  const validationResult = ContactSchema.safeParse({ name, email });
  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors;
    console.log(errors);
    return {
      success: false,
      errors: {
        name: errors.name || [],
        email: errors.email || [],
      },
    };
  }

  const existingRecord = await prisma.contact.findUnique({
    where: { email: email },
  });
  if (existingRecord) {
    return {
      success: false,
      errors: {
        name: [],
        email: ['すでに登録されています'],
      },
    };
  }

  await prisma.contact.create({
    data: { name, email },
  });
  console.log(existingRecord);

  redirect('/contacts/complete');
}
