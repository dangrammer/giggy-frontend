import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import {fetchListings} from '../actions/listingsActions'
import Listings from '../components/listings/Listings'
import ListingShow from '../components/listings/ListingShow'

const ListingsContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => dispatch(fetchListings()))

  return (
    <Switch>
      <Route exact path='/listings' component={Listings}/>
      <Route exact path='/listings/:id' component={ListingShow}/>
    </Switch>
  )
}

export default ListingsContainer
