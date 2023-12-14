import { AllItemsInFolderResponse } from "@/interfaces/vimeo.interface";

const {
  VIMEO_API_URL,
  VIMEO_USER_ID,
  VIMEO_ACCESS_TOKEN,
  VIMEO_LEERJAREN_PROJECT_ID,
} = process.env;

export async function GET() {
  const res = await fetch(
    `${VIMEO_API_URL}/users/${VIMEO_USER_ID}/projects/${VIMEO_LEERJAREN_PROJECT_ID}/items?fields=folder.name,folder.uri,folder.metadata.connections.ancestor_path,folder.metadata.connections.videos`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
      },
    }
  );

  const data: AllItemsInFolderResponse = await res.json();

  return Response.json(data);
}
