import { useEffect } from 'react';
import { Phonebook } from '../../components/ContactsForm/ContactsForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { Wrapper, Title, Subtitle } from './ContactsPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selector';
import { fetchContacts } from 'redux/contacts/operations';

export const App = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Phonebook />
      <Subtitle>Contacts</Subtitle>
      {contactList.length > 0 && <Filter />}
      {contactList.length > 0 && <ContactList />}
    </Wrapper>
  );
};
