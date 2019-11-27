import React from 'react'
import {useSelector} from 'react-redux' //, useDispatch

const ListingShow = ({history}) => {
  // const dispatch = useDispatch()
  const listingShow = useSelector(state => state.listingsReducer.listingShow)
  const currentUser = useSelector(state => state.currentUser)
  const currentUserId = parseInt(currentUser.id, 10)
  const {subject, description, city, state, date, end_date, paying, 
    poster, posting_date, zip_code, applicants} = listingShow.attributes
  const applicantIds = applicants.map(a => a.id)

  const handleClick = () => {
    console.log('apply')
  }

  const navBack = () => {
    history.goBack() 
  }
  
  return (
    <div>
      <h1>{subject}</h1>
      {`Posted on: ${posting_date}`}<br/>  
      {`Posted by: ${poster.username}`}<br/>
      {`${applicants.length} ${applicants.length === 1 ? 'Applicant' : 'Applicants'}`}<br/>
      {paying ? 'Paying' : 'Non-paying'}<br/>
      {date ? end_date ? `Gig date: ${date} to ${end_date}` : `Gig date: ${date}` : null}
      {city && state && zip_code ? `Location: ${city}, ${state} ${zip_code}` : null}<br/>
      <br/>
      {description}<br/>
      <br/>
      {poster.id === currentUserId ?
        '(This is your listing)' :
          applicantIds.includes(currentUserId) ? 
            'You\'ve already applied' :
              <button onClick={handleClick}>Apply for this opportunity</button>
      }
      <br/>
      <br/>
      <button onClick={navBack}>Back to listings</button>
    </div>
  )  
}

export default ListingShow
