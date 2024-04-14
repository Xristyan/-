export async function getMuseums() {
  try {
    const response = await fetch("http://localhost:8080/museum", {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("There is problem wit museums fetching");
    }
    // console.log(await response.json());
    return await response.json();
  } catch (error) {
    console.log("inCAttch", error);
  }
}
