import { collection, onSnapshot } from '@firebase/firestore'
import React, { useEffect } from 'react'
import db from '../../config/firebase'

const EventsPage = () => {
  useEffect(() => {
    onSnapshot(collection(db, 'events'), (snapshot) => {
      const eventList = snapshot.docs.map((doc) => doc.data())
      console.log('All Events ', eventList)
    })
  }, [])

  return <div>EventsPage</div>
}

export default EventsPage
