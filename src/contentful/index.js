/** @format */

import * as contentful from "contentful";

export const client = contentful.createClient({
  space: "i3qnbw8u1zsv",
  accessToken: process.env.REACT_APP_CMS_ID,
});
