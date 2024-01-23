// import { useState,useEffect } from "react";
// const useFetch=(url)=>{
//     const [data,setData]=useState(null);
//     const [isPending, setIsPending]=useState(true); 
//     const [error, setError]=useState(null);
//     useEffect(()=>{
//         setTimeout(() => {
//           fetch(url)
//             .then(res=>{
//               // console.log(res);
//               if (!res.ok){
//                 throw Error('could not fetch data for that resource')
//               }
//               return res.json();
//             })
//             .then(data=>{
//               setData(data);
//               setIsPending(false);
//               setError(null);
//             })
//             .catch(err=>{
//               // console.log(err.message);
//               setError(err.message);
//               setIsPending(false);
//             })
//         }, 1000);
//     },[url])
//     return {data,isPending, error};
// }
// export default useFetch;


import { useState,useEffect } from "react";
const useFetch=(url)=>{
  const [data,setData]=useState(null);
  const [isPending, setIsPending]=useState(true); 
  const [error, setError]=useState(null);
  useEffect(()=>{
      const abortCont= new AbortController();
        setTimeout(() => {
          fetch(url, {signal:abortCont.signal})
            .then(res=>{
              // console.log(res);
              if (!res.ok){
                throw Error('could not fetch data for that resource')
              }
              return res.json();
            })
            .then(data=>{
              setData(data);
              setIsPending(false);
              setError(null);
            })
            .catch(err=>{
              // console.log(err.message);
              if (err.name==="AbortError"){
                console.log("Fetch Aborted");
              }
              else{
                setError(err.message);
                setIsPending(false);
              }
            })
        }, 500);

        // return ()=>console.log("cleanup");
        return ()=>abortCont.abort();
    },[url])
    return {data,isPending, error};
}
export default useFetch;