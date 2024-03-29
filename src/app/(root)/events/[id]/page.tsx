import CheckoutButton from '@/components/shared/CheckoutButton'
import Collection from '@/components/shared/Collection'
import { getAllEvents, getEventById, getRelatedEventsByCategory } from '@/lib/actions/event.actions'
import { formatDateTime } from '@/lib/utils'
import { SearchParamProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const EventDetails = async ({params:{id}}: SearchParamProps) => {
    const event = await getEventById(id)
    
    const events = await getAllEvents({
        query: '',
        category:'',
        page:1,
        limit:3
    })
    const shuffledEvents = shuffleArray(events?.data);


    // Function to shuffle an array using Fisher-Yates algorithm
    function shuffleArray(array:any) {
        if (!array) return []; // Handle the case when the array is undefined or null

        const shuffledArray = [...array];

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        return shuffledArray;
    }
    
    
    return (
        <>
        <section className='flex justify-center bg-primary-50 bg-dotted-pattern bg-contain'>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
                <Image src={event.imageUrl} alt='hero image' width={1000} height={1000} className='w-full'/>
                <div className="flex w-full flex-col gap-8 p-5 md:p-10">
                    <div className="flex flex-col ga6'">
                        <h2 className='h2-bold'>{event.title}</h2>
                        <div className="flex flex-col gap-3 sm:flex-col sm:items-center">
                            <div className="flex gap-3">
                                <p className='p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700'>{event.isFree ? 'FREE' : `$${event.price}`}</p>
                                {/* <p className='p-medium-16 rounded-full bg-gray-500/10 px-4 py-2.5'>{event.category?.name}</p> */}
                            </div>
                            <p className='p-medium-18 ml-2 mt-2 sm:mt-0'>
                                by{' '}
                                <span className='text-gray-500'>{event.organizer.firstName} {event.organizer.lastName}</span>
                            </p>
                        </div>
                    </div>
                    {/* CHECKOUT BTN */}
                    <CheckoutButton 
                        event={event}
                    />

                    <div className="flex flex-col gap-5">
                        <div className="flex gap-2 md:gap-3">
                            <Image src={'/assets/icons/calendar.svg'} alt="calender" width={32} height={32}/>
                            <div className=' p-medium-16 lg:p-regular-20 flex gap-1 flex-wrap items-center'>
                                <p>{formatDateTime(event.startDateTime).dateOnly} - {formatDateTime(event.startDateTime).timeOnly}</p> - 
                                <p>{formatDateTime(event.endDateTime).dateOnly} - {formatDateTime(event.endDateTime).timeOnly}</p>
                            </div>
                        </div>
                        <div className="p-regular-20 flex items-center gap-3">
                            <Image src={'/assets/icons/location-grey.svg'} alt="location" width={32} height={32}/>
                            <p className='p-medium-16 lg:p-regular-20'>{event.location}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className='p-bold-20 text-gray-500'>{"WhatYou'll Learn:"}</p>
                        <p className='p-medium-16 lg:p-regular-18'>
                            {event.description}
                        </p>
                        <p className='p-medium-16 lg:p-regular-18 truncate text-primary-500 underline'>
                            {event.url}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* event from same organizer */}
        <section className='wrapper my-8 flex flex-col gap-8 md:gap-12 relative'>
            <h2 className="h2-bold">Related Events</h2>
            <Collection
                data={shuffledEvents}
                emptyTitle="No Events Found"
                emptyStateSubtext="Come back later"
                collectionType="All_Events"
                limit={6}
                page={1}
                // totalPages={shuffledEvents?.totalPages}
            />
        </section>
        </>

    )
}

export default EventDetails