const axios = require("axios");
const fs = require("fs");

async function callSoap() {
  const url = "https://impl-services1.wd108.myworkday.com/ccx/service/assistnow/Recruiting/v44.0";   // SOAP URL
  const username = "AssistlyISU@assistnow";
  const password = "@Assistly@123!!";

  // Read XML file
  const xmlBody = fs.readFileSync("recruitbody.xml", "utf8");

  try {
    const response = await axios.post(url, xmlBody, {
      auth: { username, password },        // Basic Auth
      headers: {
        "Content-Type": "text/xml;charset=UTF-8",
        "SOAPAction": ""
      }
    });

    console.log("SOAP Response:");
    console.log(response.data);

  } catch (error) {
    console.error("SOAP Error:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

callSoap();
