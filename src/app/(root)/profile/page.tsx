import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getEventsByUser } from '@/lib/actions/event.actions'
import { getOrdersByUser } from '@/lib/actions/order.actions'
import { IOrder } from '@/lib/database/models/order.model'
import { SearchParamProps } from '@/types'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const ProfilePage = async ({searchParams}:SearchParamProps) => {
  const { sessionClaims } = auth()
  const userId = sessionClaims?.userId as string;

  const ordersPage = Number(searchParams?.ordersPage) || 1
  const eventsPage = Number(searchParams?.eventsPage) || 1

  const orders = await getOrdersByUser({userId, page: ordersPage})

  const orderedEvents = orders?.data.map((order: IOrder)=> order.event) || []
  const organizedEvents = await getEventsByUser({userId,page: eventsPage})

  
  

  return (
    <>
      {/* my tickets */}
      <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 '>
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className='h3-bold text-center sm:text-left'>My Tickets</h3>
          <Button asChild className='button hidden sm:flex' size={'lg'}>
            <Link href={'/#events'}>Explore More Events</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection
            data={orderedEvents}
            emptyTitle="No Events Ticket purchased yet"
            emptyStateSubtext="No worries - plenty of exiting events to explore!"
            collectionType="My_Tickets"
            limit={3}
            page={ordersPage}
            urlParamName='ordersPage'
            totalPages={orders?.totalPages}
          />
      </section>
      {/* event organized */}
      <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 '>
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className='h3-bold text-center sm:text-left'>Events organized</h3>
          <Button asChild className='button hidden sm:flex' size={"lg"}>
            <Link href={'/events/create'}>Create new Event</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection
            data={organizedEvents?.data}
            emptyTitle="No Events have been created yet"
            emptyStateSubtext="Go create some now"
            collectionType="Events_Organized"
            limit={6}
            page={eventsPage}
            urlParamName='eventsPage'
            totalPages={orderedEvents?.totalPages}
          />
      </section>
    </>
  )
}

export default ProfilePage