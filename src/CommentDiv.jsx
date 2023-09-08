export default function CommentDiv({details}) {
    const {id , email , name} = details
    return(
        <div style={{border:'2px solid orange', borderRadius:20 , padding:20 , margin:20 }} >
            <h3>Comment Id : {id} </h3>
            <p>Name : {name} </p>
            <p>Email Id : {email} </p>
        </div>
    )
}