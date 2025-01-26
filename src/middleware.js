import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const dummyData = {
        role: 'user',
        email: 'abc@gmail.com'
    }
     let isAdmin = dummyData.role == 'admin'
     let isServicePage = request.nextUrl.pathname.startsWith('/services')
     console.log(isServicePage);
     if(isServicePage && !isAdmin)
        return NextResponse.redirect(new URL('/login', request.url))
     
  return NextResponse.next()
}
 