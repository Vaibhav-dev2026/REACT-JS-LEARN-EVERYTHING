import React from "react";

function ProfileCard({ profile }) {
  return (
    <div style={{border:"1px solid #ccc", padding:"10px", marginTop:"10px"}}>
      <h3>Profile Preview:</h3>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>
    </div>
  );
}

export default ProfileCard;

