'use client'

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";


const CheckoutPage = () => {
  const router = useSearchParams()
  const route = useRouter()
  const success = router.get('success')
  const canceled = router.get('canceled')
  
  if(!success && !canceled){
    route.push('/')
  }

  return (
    <div className=" bg-dotted-pattern bg-">
      {/* create a success page */}
      {success && (
        <div className="flex items-center justify-center h-[80vh]">
          <div>
            <div className="flex flex-col items-center space-y-2 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h1 className="text-4xl font-bold">Thank You !</h1>
              <p>Thank you for your purchase.</p>
              <Link
                href={'/'}
                className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span className="text-sm font-medium">
                  Home
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
      {
        canceled && (
          <div className="flex items-center justify-center h-[80vh]">
            <div>
              <div className="flex flex-col items-center space-y-2 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500 w-28 h-28" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                
                <h1 className="text-4xl font-bold">Cancelled</h1>
                <p>Your order has been cancelled.</p>
                
                <Link
                  href={'/'}
                  className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>

                  <span className="text-sm font-medium">
                    Home
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default CheckoutPage;