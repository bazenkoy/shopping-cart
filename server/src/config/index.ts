import "dotenv/config";

const CLIENT_URL = process.env.CLIENT_URL as string;
const PORT = process.env.PORT as string;

export { CLIENT_URL, PORT };
