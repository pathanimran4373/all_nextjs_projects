// create routes to make api use GET and POST method


// get data in data from db.json file
import { data } from "@/database/db";
import { NextResponse } from "next/server";


// retrive data by GET method
export function GET(){
    const getData = data;
    return NextResponse.json(getData,{status:200})
}


// store data by using post method
export async function POST(request){
    // get data from api in request parameter
    const payload = await request.json()
    // console.log(payload.name)
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"required filed not found",success:false},{status:404})

    }
    return NextResponse.json({result:"new user created",success:true},{status:201})
}