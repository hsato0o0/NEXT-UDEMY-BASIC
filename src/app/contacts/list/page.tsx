import { getContacts, getContact } from '@/lib/contacts';
export default async function ListPage() {
  const contacts = await getContacts();
  const firstContact = await getContact('1');

  return (
    <div>
      複数
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              {contact.name} : {contact.email}
            </li>
          );
        })}
      </ul>
      1件
      <div>{firstContact ? firstContact.name : ''}</div>
    </div>
  );
}
