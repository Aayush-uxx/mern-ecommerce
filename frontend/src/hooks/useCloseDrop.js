import { useEffect,useRef } from "react";
const useClickOutside = (close)=>{
    const ref = useRef(null);
    useEffect(()=>{
        const handleOnClick = (e)=>{
            if(ref.current && !ref.current.contains(e.target)){
                onclose();
            }
        }
        document.addEventListener("mousedown",handleOnClick);
        return ()=>{document.removeEventListener("mousedown",handleOnClick),[onclose]};       
    });return ref;
}
export default useClickOutside;