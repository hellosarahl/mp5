import {D} from "@/lib/mongo";

export async function POST(r){
    const{url,alias}=await r.json();

    try {new URL(url);}
    catch {return Response.json({error:"URL does not exist"})}

    const d=await D();
    const l=d.collection("links");


    if(await l.findOne({alias:alias})){
        return Response.json({error:"The alias is taken"})

    }
    await l.insertOne({url,alias})


    return Response.json({ok:true});


}