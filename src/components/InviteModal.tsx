import React, { useState } from 'react';
import Modal from 'react-modal';
import { validateEmail } from '../utils';
import { ReactComponent as CloseIcon } from '../assets/svgs/close.svg';
import { ReactComponent as TwitterIcon } from '../assets/svgs/twitter.svg';
import { ReactComponent as CopyLinkIcon } from '../assets/svgs/copyLink.svg';
import { ReactComponent as FacebookIcon } from '../assets/svgs/facebook.svg';

const customStyles: { content: React.CSSProperties } = {
  content: {
    zIndex: 1,
    top: '50%',
    padding: 0,
    left: '50%',
    width: '83.3rem',
    height: '57.8rem',
    borderRadius: '2.4rem',
    backgroundColor: '#fff',
    transform: 'translate(-50%, -50%)',
  },
};

export default function InviteModal({ showModal, closeModal }: ModalProps) {
  const [emails, setEmails] = useState('');

  function handleInvitations(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const emailsArray = emails.split(',');
    if (emailsArray.length) {
      const emailsAreValid = emailsArray.every(validateEmail);

      if (emailsAreValid) {
        console.log('Valid!');
      } else {
        console.log('Failed!');
      }
    }
  }

  return (
    <Modal isOpen={showModal} style={customStyles} onRequestClose={closeModal}>
      <div className='modal invite-modal'>
        <div className='modal-header'>
          <div className='modal-header-placeholder'>{null}</div>
          <div className='modal-header-title'>Invite</div>
          <button className='modal-header-close'>
            <CloseIcon />
          </button>
        </div>
        <div className='modal-content'>
          <p className='modal-content-title'>
            <span>Your friends can also join in on the fun.</span>
            <br />
            <span>This is your next challenge.</span>
          </p>
          <form onSubmit={handleInvitations} className='invite-modal__form'>
            <div className='invite-modal__email-input'>
              <input
                multiple
                required
                type='email'
                value={emails}
                name='opponent'
                placeholder='Invite your friends by mail'
                onChange={e => setEmails(e.target.value)}
              />
            </div>
            <button className='primary' type='submit'>
              Send Invite
            </button>
          </form>
          <div className='divider'></div>
          <div className='invite-modal__footer'>
            <p className='invite-modal__footer-text'>
              More ways to invite friends
            </p>
            <div className='invite-modal__footer-actions'>
              <div className='invite-modal__footer-copy-link'>
                <button className='invite-modal__footer-button invite-modal__footer-copy'>
                  <CopyLinkIcon className='invite-modal__footer-button-icon' />
                  Copy Link
                </button>
                <p className='invite-modal__footer-copy-text'>
                  https://playrematch.com/hsgjdhcu
                </p>
              </div>
              <button className='invite-modal__footer-button invite-modal__footer-facebook'>
                <FacebookIcon className='invite-modal__footer-button-icon' />
                Share on Facebook
              </button>
              <button className='invite-modal__footer-button invite-modal__footer-twitter'>
                <TwitterIcon className='invite-modal__footer-button-icon' />
                Tweet on Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
