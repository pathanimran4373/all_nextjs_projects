// create routes to get information of specific person


import { data } from "@/database/db";
import { NextResponse } from "next/server";

export function GET(request,content){
// const getData = data;
// console.log(getData,content.params.id)
// console.log(data)
const getUniqueData = data.filter((item)=> item.id == content.params.id)
return NextResponse.json(getUniqueData.length==0?{result:"no data found",sucess:false}:{result:getUniqueData[0],sucess:true},{status:200})
}

export async function PUT(request,content){
const payload = await request.json();
const userId = content.params.id;
payload.id =userId
// console.log(payload)
if (!payload.id || !payload.name || !payload.age || !payload.email) {
    return NextResponse.json({result:"sorry data not found",sucess:false},{status:400})
} 
return NextResponse.json({result:payload,sucess:true},{status:200})
}