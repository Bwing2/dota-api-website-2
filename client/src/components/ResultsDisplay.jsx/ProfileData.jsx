export default function ProfileData({ profile }) {
  return (
    <div>
      <h2>Steam Profile</h2>
      <p>Profile URL: {profile.profile.profileurl}</p>
      <img src={profile.profile.avatarfull} alt={profile.profile.personaname} />
      <p>Steam Username: {profile.profile.personaname}</p>
      <p>Rank Distribution: {profile.rank_tier} Percentile</p>
      <p>
        Current Dota Plus Subscription: {profile.profile.plus ? "Yes" : "No"}
      </p>
    </div>
  );
}
