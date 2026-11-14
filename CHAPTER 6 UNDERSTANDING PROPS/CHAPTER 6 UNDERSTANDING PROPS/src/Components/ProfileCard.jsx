// CHILD

function ProfileCard({name,role,location}){
    return(
        <div style={{border:"1px solid black",margin:"50px",padding:"50px" }}>
            <h2>name</h2>
            <p>Role:{role}</p>
            <p>Location:{location}</p>
        </div>
    )
};
export default ProfileCard;
