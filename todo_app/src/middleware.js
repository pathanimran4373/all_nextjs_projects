// middleware is used to authentication or redirect on specefic routes


// 1st exampale

const middlewareFunc =()=>{
    console.log('this is middeleware')
}
export default middlewareFunc


// redirect login page o when access any page

// import { NextResponse } from "next/server";

//  function RedirectLoginPage(request){

//     if(request.nextUrl.pathname != '/contact'){
// return NextResponse.redirect(new URL('/contact', request.url))
//     }

// }

// export default RedirectLoginPage



// ------------------------------------------------------
// redirect login page when access specific page

// import { NextResponse } from "next/server";

// function RedirectLoginPage(request){

//     return NextResponse.redirect(new URL('/login', request.url))
    
//     }
    
//     export default RedirectLoginPage

    // by matcher user can not access about and contact page
    // export const config ={
    //     matcher: ['/about/:path*','/contact/:path*']
    // }
    
    