import Link from 'next/link'
import React from 'react'

export default function ServicePage() {
    const data = [
        {id: 1, service: 'service 1'},
        {id: 2, service: 'service 2'},
        {id: 3, service: 'service 3'},
    ]
  return (
    <div className='text-3xl font-bold'>
        <h1>ServicePage</h1>
        <div>
            {
                data.map((d) => <Link href={`/services/${d.id}`} key={d.id}><div>{d.service}</div></Link>)
            }
        </div>
    
    
    </div>
  )
}
