import ContactAvatar from './ContactAvatar';
import { TrashIcon } from '@heroicons/react/outline';


const ContactRow = ({
  contact,
  showActiveUser,
  checkedContactIdList,
  setCheckedContactIDList,
  handleShow,
  setIsMultiDelete,
  setDeleteContactId,
}) => {
  return (
    <tr key={contact.id}>
      <td className='align-middle text-center'>
        <input
          title='Select Contact'
          type='checkbox'
          checked={checkedContactIdList.includes(contact.id)}
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
              name={contact.fname + ' ' + contact.lname}
              className='list-avatar'
            />
          </div>
          <div className='contact-info d-flex flex-column justify-content-center m-2'>
            <div className='contact-info-name truncate-string'>
              <p className='m-0 truncate-string'>
                {contact.fname} {contact.lname}
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
            setIsMultiDelete(false);
            setDeleteContactId(contact.id);
          }}
        />
      </td>
    </tr>
  );
};

export default ContactRow;