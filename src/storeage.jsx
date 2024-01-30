import { useState } from "react";
function useStorage(stri) {
    const [state,setstate]=useState(stri)
    function setter(newval) {
        setstate(newval)  
    }
    return [state,setter]
}
export default useStorage;