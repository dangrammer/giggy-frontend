import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {profileShow} from '../../actions/profileActions'
import {createApplication} from '../../actions/applicationActions'


const ListingShow = ({history}) => {
  const dispatch = useDispatch()
  const listingShow = useSelector(state => state.listingReducer.listingShow)
  const currentUser = useSelector(state => state.currentUserReducer.currentUser)
  const currentUserId = parseInt(currentUser.id, 10)
  const {subject, description, city, state, date, end_date, paying, 
    poster, posting_date, zip_code, applicants, category_id} = listingShow.attributes
  const categories = useSelector(state => state.categoryReducer.categories)
  const findCategory = categories.find(category => parseInt(category.id, 10) === category_id)
  const categoryName = findCategory.attributes.name
  const applicantIds = applicants.map(a => a.id)
  
  const applyToListing = () => {
    dispatch(createApplication(listingShow.id, currentUser.id))
  }
  
  const viewProfile = () => {
    dispatch(profileShow(poster.id, history)) 
  }
 
  const navBack = () => {
    history.goBack() 
  }

  const editListing = () => {
    history.push('/dashboard/listings/edit')
  }

  const deleteConfirm = () => {
    history.push('/dashboard/listings/delete')
  }
  
  return (
    <div className='listing-show'>
      <h1>{subject}</h1>
      Posted on: {posting_date}<br/>  
      Posted by: <span className='profile-link' onClick={viewProfile}>@{poster.username}</span><br/>
      Posting Category: {categoryName}<br/>
      {`${applicants.length} ${applicants.length === 1 ? 'Applicant' : 'Applicants'}`}<br/>
      {paying ? 'Paying' : 'Non-paying'}<br/>
      {date ? end_date ? `Gig date: ${date} to ${end_date}` : `Gig date: ${date}` : null}<br/>
      {city && state && zip_code ? `Location: ${city}, ${state} ${zip_code}` : null}<br/>
      <br/>
      {description}<br/>
      <br/>
      <br/>
      {poster.id === currentUserId ?
        <>
          <button className='btn' onClick={editListing}>Edit Listing</button>
          <br/>
          <br/>
          <button className='btn' onClick={deleteConfirm}>Delete Listing</button>
          <br/>
        </> :
          applicantIds.includes(currentUserId) ? 
            <strong>You've applied!</strong> :
              <button className='btn' onClick={applyToListing}>Apply for this opportunity</button>
      }
      <br/>
      <br/>
      <button className='btn' onClick={navBack}>Back</button>
    </div>
  )  
}

export default ListingShow
