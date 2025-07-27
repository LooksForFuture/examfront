const { exec } = require("child_process");
const dotenv = require("dotenv");

dotenv.config();

const username = process.env.REACT_APP_API_USERNAME;
const password = process.env.REACT_APP_API_PASSWORD;
const domain = process.env.REACT_APP_BACKEND_BASE_URL;

async function getJwtToken() {
  const fetch = (await import("node-fetch")).default;
  const response = await fetch(`${domain}/api/token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Login failed!");
  }

  const data = await response.json();
  return data.access;
}

async function generateTypes() {
  try {
    const token = await getJwtToken();
    const REACT_APP_BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
    const curlCommand = `
            curl -H "Authorization: Bearer ${token}" \
            ${REACT_APP_BACKEND_BASE_URL}/api/swagger/?format=openapi \
            -o swagger.json && \
            npx openapi-typescript-codegen \
            --input ./swagger.json \
            --output ./src/types \
            --request ./src/request.ts
        `;

    exec(curlCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(stderr);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

generateTypes();
