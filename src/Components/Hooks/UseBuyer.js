
import { useEffect, useState } from "react"

const UseBuyer=(email)=>{


    const [isBuyer,setIsBuyer]=useState(false);
    const [isBuyerLoading,setBuyerLoading]=useState(true);
    console.log(isBuyer);
    useEffect(()=>{
        if(email){
            fetch(`https://b612-used-products-resale-server-side-muhib95.vercel.app/users/buyer/${email}`)
            .then(res=>res.json())
            .then(data=>setIsBuyer(data.isBuyer))
            setBuyerLoading(false);
        }

    },[email])

    return [isBuyer,isBuyerLoading]



}
export default UseBuyer;