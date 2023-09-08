import { useEffect, useState } from "react"
import CommentDiv from "./CommentDiv";

export default function Comment() {
    const [comment , setComment]=useState([]);
    useEffect(()=>{
        const fetchComment =async ()=>{
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/comments')
                const data = await res.json();
                setComment(data)
            } catch (error) {
                console.error("Error" , error)
            }
        }
        fetchComment()
    },[])
    return(
        <div>
            <h2>Total Comment : {comment.length} </h2>
            {
                comment.map(details => <CommentDiv details={details}></CommentDiv>)
            }
        </div>
    )
}