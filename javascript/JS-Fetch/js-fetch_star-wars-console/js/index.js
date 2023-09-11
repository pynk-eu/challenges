console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  console.log("response:", response);
  try {
    if (!response.ok) {
      console.log("Bad request");
    } else {
      const data = await response.json();
      console.log("data:", data);
      const r2ds = data["results"].filter(
        (element) => element["name"] === "R2-D2"
      );
      console.log(r2ds[0]["eye_color"]);
    }
  } catch (error) {
    console.error("Bad Error");
  }
}

fetchData();
