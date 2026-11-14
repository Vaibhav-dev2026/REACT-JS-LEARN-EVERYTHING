function Users({name,isOnline}){
    return(
        <div>
            <h3>{name}</h3>
            <p>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
        </div>
    )
}
export default Users;