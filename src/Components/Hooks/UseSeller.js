
import { useEffect, useState } from "react"

const UseSeller=(email)=>{


    const [isSeller,setIsSeller]=useState(false);
    useEffect(()=>{
        if(email){
            fetch(`https://b612-used-products-resale-server-side-muhib95.vercel.app/users/seller/${email}`)
            .then(res=>res.json())
            .then(data=>setIsSeller(data.isSeller))

        }

    },[email])

    return [isSeller]



}
export default UseSeller;