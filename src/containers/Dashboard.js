import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import DashboardNavBar from '../components/dashboard/DashboardNavBar'
import NewListingForm from '../components/dashboard/NewListingForm'
import ProfileShow from '../components/profiles/ProfileShow'
import EditProfile from '../components/dashboard/EditProfile'
import DeleteAccount from '../components/dashboard/DeleteAccount'
import {fetchCategories} from '../actions/categoryActions'
import {profileShow} from '../actions/profileActions'

const Dashboard = () => {
  const dispatch = useDispatch()
  const currentUserId = useSelector(state => state.currentUserReducer.currentUser.id)

  useEffect(() => dispatch(fetchCategories()), [dispatch]) 
  useEffect(() => dispatch(profileShow(currentUserId)), [dispatch, currentUserId])

  return (
    <>
      <h1>Dashboard</h1>
      <DashboardNavBar/>
      <Switch>
        <Route exact path='/dashboard/newListing' component={NewListingForm}/>
        <Route exact path='/dashboard/myProfile' component={ProfileShow}/>
        <Route exact path='/dashboard/myProfile/edit' component={EditProfile}/>
        <Route exact path='/dashboard/myProfile/deleteAccount' component={DeleteAccount}/>
      </Switch>
    </>
  )
}

export default Dashboard
