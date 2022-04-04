import { useEffect, useState } from "react"
const useReviews = () =>{
const [Reviews, SetReviews] = useState([])
console.log(Reviews);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data => SetReviews(data));
    },[])

    return [Reviews, SetReviews];
}

export default useReviews;