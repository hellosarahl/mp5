import {D} from "@/lib/mongo";

import {redirect} from "next/navigation";

export default async function Page({params}){

    const d= await D();
    const l= d.collection("links");
    const f=await l.findOne({alias:params.alias});


    if(!f){
        return <p>NOT FOUND</p>;
    }else{
        redirect(f.url);
    }


}