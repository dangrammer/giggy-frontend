import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import DashboardNavBar from '../components/dashboard/DashboardNavBar'
import MyListings from '../components/dashboard/MyListings'
import EditListing from '../components/dashboard/EditListing'
import DeleteListing from '../components/dashboard/DeleteListing'
import NewListingForm from '../components/dashboard/NewListingForm'
import Conversations from '../components/dashboard/Conversations'
import ProfileShow from '../components/profiles/ProfileShow'
import EditProfile from '../components/dashboard/EditProfile'
import DeleteAccount from '../components/dashboard/DeleteAccount'
import {fetchCategories} from '../actions/categoryActions'
import {profileShow} from '../actions/profileActions'
import {fetchConversations} from '../actions/conversationActions'

const Dashboard = () => {
  const dispatch = useDispatch()
  const currentUserId = useSelector(state => state.currentUserReducer.currentUser.id)

  useEffect(() => dispatch(fetchCategories()), [dispatch]) 
  useEffect(() => dispatch(profileShow(currentUserId)), [dispatch, currentUserId])
  useEffect(() => dispatch(fetchConversations()), [dispatch]) 

  return (
    <>
      <h1>Dashboard</h1>
      <DashboardNavBar/>
      <Switch>
        <Route exact path='/dashboard/listings' component={MyListings}/>
        <Route exact path='/dashboard/listings/edit' component={EditListing}/>
        <Route exact path='/dashboard/listings/delete' component={DeleteListing}/>
        <Route exact path='/dashboard/listings/new' component={NewListingForm}/>
        <Route exact path='/dashboard/conversations' component={Conversations}/>
        <Route exact path='/dashboard/profile' component={ProfileShow}/>
        <Route exact path='/dashboard/profile/edit' component={EditProfile}/>
        <Route exact path='/dashboard/profile/delete' component={DeleteAccount}/>
        <Redirect to='/dashboard/listings'/>
      </Switch>
    </>
  )
}

export default Dashboard
