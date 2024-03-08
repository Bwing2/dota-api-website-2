import steamId from "../../assets/images/steam-id.jpg";
import steamUrl from "../../assets/images/steam-url.jpg";
import matchId from "../../assets/images/match-id.jpg";

export const questionAnswer = [
  {
    question: "How does the search functionality work?",
    answer:
      "Users can search for steam profiles/matches using a steam ID. Filter options can be checked to search for a specific match. Users can also search by match ID to find stats for a match.",
  },
  {
    question: "How do I find a user's steam ID?",
    answer:
      "Steam user ID's can be found by navigating to a user's steam profile, and their ID will be on the top left. Clicking on it will copy the link.",
    image: steamId,
  },
  {
    question: "What if they have a custom steam ID?",
    answer: (
      <>
        {"There are third party websites such as "}
        <a
          href="https://www.steamidfinder.com/"
          className="about-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          steamidfinder.com
        </a>
        {
          " that will convert a user's customURL into a profile id. Use the profile link to search steam users."
        }
      </>
    ),
    image: steamUrl,
  },
  {
    question: "How do I find a match ID?",
    answer:
      "Match ID's can be found at the post-game screen, or from the match history.",
    image: matchId,
  },
];
