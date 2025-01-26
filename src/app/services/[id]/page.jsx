import React from 'react'

export default async function ServiceDetails({params}) {
    const data = [
        {id: 1, service: 'service 1'},
        {id: 2, service: 'service 2'},
        {id: 3, service: 'service 3'},
    ]
    const id = (await params).id 
    const singleData = data.find((d) => d.id == id)
    if(singleData){
        return (
            <div className='mt-6'>
                <h1 className='font-bold text-2xl'>ServiceDetails</h1>
                 <p>Service Number : {id}</p>
                 <p className='mt-3'>{singleData.service}</p>
            </div>
          )
    }
    else{
        return <p>No data found</p>
    }
  
}
