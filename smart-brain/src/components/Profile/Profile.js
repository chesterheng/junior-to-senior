import React, { useState } from 'react'
import './Profile.css'

const Profile = ({ isProfileOpen, toggleModal, loadUser, user }) => {
  const { id, name, entries, joined, age, pet } = user
  const [profile, setProfile] = useState({ name, age, pet })
  const onFormChange = ({ target: { name, value } }) => {
    switch(name) {
      case 'user-name':
        setProfile({ ...profile, name: value })
        break
      case 'user-age':
        setProfile({ ...profile, age: value })
        break
      case 'user-pet':
        setProfile({ ...profile, pet: value })
        break     
      default:
        return
    }
  }

  const onProfileUpdate = data => {
    fetch(`http://localhost:3000/profile/${id}`, {
      method: 'put',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': window.sessionStorage.getItem('token')
      },
      body: JSON.stringify({ formInput: data })
    }).then(resp => {
      // status 304 means response was cached browser
      if(resp.status === 200 || resp.status === 304) {
        toggleModal()
        loadUser({ ...profile, data })
      }
    }).catch(console.log)
  }

  return (
    <div className="profile-modal">
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80 w-80">
          <img
            src="http://tachyons.io/img/logo.jpg"
            className="h3 w3 dib" alt="avatar" />
          <h1>{profile.name}</h1>
          <h4>{`Image Submitted: ${entries}`}</h4>
          <p>{`Member since: ${new Date(joined).toLocaleDateString()}`}</p>
          <hr />
          <label className="mt2 fw6" htmlFor="user-name">Name:</label>
          <input
            className="pa2 ba w-100"
            placeholder={name}
            type="text"
            name="user-name"
            id="name"
            onChange={onFormChange}
          />
          <label className="mt2 fw6" htmlFor="user-age">Age:</label>
          <input
            className="pa2 ba w-100"
            placeholder={age}
            type="text"
            name="user-age"
            id="age"
            onChange={onFormChange}
          />
          <label className="mt2 fw6" htmlFor="user-pet">Pet:</label>
          <input
            className="pa2 ba w-100"
            placeholder={pet}
            type="text"
            name="user-pet"
            id="pet"
            onChange={onFormChange}
          />
          <div 
            className="mt4" 
            style={{ 
              display: 'flex',
              justifyContent: 'space-evenly'
            }}
          >
            <button className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20' onClick={() => onProfileUpdate(profile)}>Save</button>
            <button className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20' onClick={toggleModal}>Cancel</button>
          </div>
        </main>
        <div 
          className='modal-close' 
          onClick={toggleModal}
        >
          &times;
        </div>
      </article>
    </div>
  )
}

export default Profile
