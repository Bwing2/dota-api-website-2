import axios from "axios";

// Converts SteamID64 to SteamID3, without brackets and only numbers
// Reference used https://gist.github.com/bcahue/4eae86ae1d10364bb66d
export async function playerIdSearch(accountId) {
  if (!accountId) {
    return [];
  }
  // Uses regular expression to find any digit 0-9 \d + all occurences in string g for global.
  // Returns array matching one or more digits in accountId string using join method with empty string.
  let num = accountId.match(/\d+/g).join("");
  let steamId64 = 76561197960265728n;
  let steamCalc = BigInt(num) - steamId64;
  let convertedId = steamCalc.toString();

  try {
    const response = await axios.get(
      `https://api.opendota.com/api/players/${convertedId}/matches`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
