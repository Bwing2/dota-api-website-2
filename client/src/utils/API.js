import axios from "axios";

// Converts SteamID64 to SteamID3, without brackets and only numbers
// Reference used https://gist.github.com/bcahue/4eae86ae1d10364bb66d
export function convertedSteamId(accountId) {
  if (!accountId) {
    return;
  }

  // Uses regular expression to find any digit 0-9 \d + all occurences in string g for global.
  // Returns array matching one or more digits in accountId string using join method with empty string.
  let num = accountId.match(/\d+/g).join("");
  let steamId64 = 76561197960265728n;
  let steamCalc = BigInt(num) - steamId64;
  return steamCalc.toString();
}

export async function playerProfileSearch(accountId) {
  let convertedId = convertedSteamId(accountId);

  try {
    const response = await axios.get(
      `https://api.opendota.com/api/players/${convertedId}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function playerIdSearch(accountId) {
  let convertedId = convertedSteamId(accountId);

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

export async function fetchHeroes() {
  try {
    const response = await axios.get(
      `https://raw.githubusercontent.com/odota/dotaconstants/master/build/heroes.json`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMatch(match_id) {
  try {
    const response = await axios.get(
      `https://api.opendota.com/api/matches/${match_id}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
