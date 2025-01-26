import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div className='w-full'>
        <div className='grid grid-cols-12'>
            <div className='col-span-3'>
                Dashboard

            </div>
            <div className='col-span-9'>
                {children}

            </div>
        </div>
    </div>
  )
}
