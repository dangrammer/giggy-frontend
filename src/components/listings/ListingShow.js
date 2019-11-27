import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

const ListingShow = ({history}) => {
  const dispatch = useDispatch()
  const listingShow = useSelector(state => state.listingsReducer.listingShow)
  const currentUser = useSelector(state => state.currentUser)
  const {
    subject, 
    description, 
    city, 
    state, 
    date, 
    end_date, 
    paying, 
    poster, 
    posting_date, 
    zip_code, 
    applicants
  } = listingShow.attributes

  const handleClick = () => {
    console.log('apply')
  }

  const navBack = () => {
    history.goBack() 
  }
  
  return (
    <div>
      {Object.keys(listingShow).length > 0 && Object.keys(currentUser).length > 0 ?
        <>
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
          {poster.id === parseInt(currentUser.id, 10) ?
            'This is your listing' :
              applicants.map(a => a.id).includes(parseInt(currentUser.id, 10)) ? 
                'You\'ve already applied' :
                  <button onClick={handleClick}>Apply for this opportunity</button>
          }
        </> :
          null
      }
      <br/>
      <button onClick={navBack}>Back to listings</button>
    </div>
  )  
}

export default ListingShow
