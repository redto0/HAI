async function getData() {
    const url = "https://f2d0-141-215-206-98.ngrok-free.app/hello";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const outputDiv = document.getElementById('output');
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }