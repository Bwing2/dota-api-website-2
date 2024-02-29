export default function ProfileData({ profile }) {
  const getTense = (number) => {
    let tenses = ["st", "nd", "rd", "th"];
    let lastDigit = number % 10;
    let specificCase = number % 100;

    if (specificCase >= 11 && specificCase <= 13) {
      return tenses[3];
    }

    if (lastDigit === 1) {
      return tenses[0];
    } else if (lastDigit === 2) {
      return tenses[1];
    } else if (lastDigit === 3) {
      return tenses[2];
    } else {
      return tenses[3];
    }
  };

  return (
    <div className="profile-div">
      <a
        href={profile.profile.profileurl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>{profile.profile.personaname} Steam Profile</h2>
      </a>
      <div className="profile-description-div">
        <div>
          <img
            src={profile.profile.avatarfull}
            alt={profile.profile.personaname}
            className="steam-pic"
          />
        </div>
        <div className="profile-text">
          <p>
            Rank Distribution: {profile.rank_tier}
            {getTense(profile.rank_tier)} Percentile
          </p>
          <p>
            Current Dota Plus Subscription:{" "}
            {profile.profile.plus ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
}
