function TeamCard({name,role,image,isOnline}){
    return(
        <div style={{
            border:"5px solid #ddd",
            padding:"15px",
            width:"200px",
            borderRadius:"10px",
            justifyContent:"center",
            alignItems:"center",
            display:"flex",
            flexDirection:"column",
            gap:"16px"



        }}>
            <img src={image} alt={name} width="100%" />

            <h3>{name}</h3>
            <p>{role}</p>

            <p>
                Status:{isOnline ? "🟢 Online" : "🔴 Offline"}
            </p>
        </div>
    );
}

export default TeamCard

