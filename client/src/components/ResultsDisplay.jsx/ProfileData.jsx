export default function ProfileData({ profile }) {
  return (
    <div className="profile-div">
      <h2>Steam Profile</h2>
      <p>
        Profile URL:{" "}
        <a
          href={profile.profile.profileurl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.profile.profileurl}
        </a>
      </p>
      <div className="profile-description-div">
        <div>
          <img
            src={profile.profile.avatarfull}
            alt={profile.profile.personaname}
            className="steam-pic"
          />
        </div>
        <div className="profile-text">
          <p>Steam Username: {profile.profile.personaname}</p>
          <p>Rank Distribution: {profile.rank_tier} Percentile</p>
          <p>
            Current Dota Plus Subscription:{" "}
            {profile.profile.plus ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
}
