import Prismic from "@prismicio/client";

const apiEndpoint = process.env.PRISMIC_API_ENDPOINT ?? "";
// const accessToken = process.env.PRISMIC_ACCESS_TOKEN; // This is where you would add your access token for a Private repository

export const Client = Prismic.client(apiEndpoint);
