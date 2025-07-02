const { exec } = require("child_process");
const { promisify } = require("util");
const https = require("https");
const dotenv = require("dotenv");

dotenv.config();

const username = process.env.REACT_APP_API_USERNAME;
const password = process.env.REACT_APP_API_PASSWORD;
const domain = process.env.REACT_APP_DOMAIN;
const execPromise = promisify(exec); // تبدیل exec به تابع promise

async function getJwtToken() {
  const fetch = (await import("node-fetch")).default;

  // ایجاد یک agent برای نادیده گرفتن SSL
  const agent = new https.Agent({
    rejectUnauthorized: false, // نادیده گرفتن اعتبارسنجی SSL
  });

  const response = await fetch(`${domain}/api/token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
    agent, // استفاده از agent نادیده گرفتن SSL
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
    const REACT_APP_DOMAIN = process.env.REACT_APP_DOMAIN;

    // نادیده گرفتن SSL با استفاده از -k در curl
    const curlCommand = `
      curl -k -H "Authorization: Bearer ${token}" \
      ${REACT_APP_DOMAIN}/api/swagger/?format=openapi \
      -o swagger.json && \
      npx openapi-typescript-codegen \
      --input ./swagger.json \
      --output ./src/types \
      --request ./src/request.ts
    `;

    // اجرای دستور curl
    const { stdout, stderr } = await execPromise(curlCommand);

    if (stderr) {
      console.error(`Error: ${stderr}`);
    } else {
      console.log(`stdout: ${stdout}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

generateTypes();
