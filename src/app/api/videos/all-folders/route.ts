import { AllUserFolderResponse } from "@/interfaces/vimeo.interface";

const { VIMEO_API_URL, VIMEO_USER_ID, VIMEO_ACCESS_TOKEN } = process.env;

export async function GET() {
  const res = await fetch(
    `${VIMEO_API_URL}/users/${VIMEO_USER_ID}/projects?fields=uri,name,metadata.connections.ancestor_path,metadata.connections.videos`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
      },
    }
  );

  const data: AllUserFolderResponse = await res.json();

  return Response.json(data);
}
