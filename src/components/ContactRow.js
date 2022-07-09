import ContactAvatar from './ContactAvatar';
import { TrashIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const ContactRow = ({
  contact,
  showActiveUser,
  checkedContactIdList,
  setCheckedContactIDList,
  handleShow,
  // setIsMultiDelete,
  setDeleteContactId,
}) => {
  const [ clicked, setClicked] = useState(false)
  
  return (
    <tr key={contact.id}className='one'onClick={() => {setClicked(previousState => !previousState)}}>
      <td className='align-middle text-center' >
        <input
          title='Select Contact'
          type='checkbox'
          checked={clicked}
          value={checkedContactIdList.includes(contact.id)} 
          onChange={() => {
            if (checkedContactIdList.includes(contact.id)) {
              setCheckedContactIDList(
                checkedContactIdList.filter((item) => item !== contact.id)
              );
            } else {
              setCheckedContactIDList([...checkedContactIdList, contact.id]);
            }
          }}
          
        />
      </td>
      <td onClick={() => showActiveUser(contact.id)}>
        <div className='contact d-flex'>
          <div className='contact-avatar m-2'>
            <ContactAvatar
              name={contact.firstname + ' ' + contact.lastName}
              className='list-avatar'
            />
          </div>
          <div className='contact-info d-flex flex-column justify-content-center m-2'>
            <div className='contact-info-name truncate-string'>
              <p className='m-0 truncate-string'>
                {contact.firstname} {contact.lastName}
              </p>
            </div>
            <div className='contact-info-email'>
              <p className='m-0'>
                <span className='text-secondary truncate-string'>
                  {contact.email}
                </span>
              </p>
            </div>
          </div>
        </div>
      </td>
      <td className='align-middle' onClick={() => showActiveUser(contact.id)}>
        <div className='company-name d-flex align-items-center m-auto'>
          <p className='m-0 truncate-string'>{contact.company}</p>
        </div>
      </td>
      <td className='align-middle text-center' title='Delete Contact'>
        <TrashIcon
          className='trash-icon'
          onClick={() => {
            handleShow();
            // setIsMultiDelete(false);
            setDeleteContactId(contact.id);
          }}
        />
      </td>
    </tr>
  );
};

export default ContactRow;