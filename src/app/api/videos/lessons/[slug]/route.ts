import { AllItemsInFolderResponse } from "@/interfaces/vimeo.interface";

const {
  VIMEO_API_URL,
  VIMEO_USER_ID,
  VIMEO_ACCESS_TOKEN,
  VIMEO_LEERJAREN_PROJECT_ID,
} = process.env;

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  // fetch all lessons folders first
  const allItemsInFolderResult = await fetch(
    `${VIMEO_API_URL}/users/${VIMEO_USER_ID}/projects/${VIMEO_LEERJAREN_PROJECT_ID}/items?fields=folder.name,folder.uri,folder.metadata.connections.ancestor_path,folder.metadata.connections.videos`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
      },
    }
  );

  const allItemsInFolderData: AllItemsInFolderResponse =
    await allItemsInFolderResult.json();

  // then filter for the folder that contains the lesson slug
  const filteredFolder = allItemsInFolderData.data.filter((item) => {
    // unslugify the slug
    const folderName = slug.replace("-", " ");
    return (
      item.folder.name.toLocaleLowerCase() === folderName.toLocaleLowerCase()
    );
  })[0];

  // fetch all videos in folder
  const videosResult = await fetch(
    `${VIMEO_API_URL}/${filteredFolder.folder.metadata.connections.videos.uri}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
      },
    }
  );

  const videosData = await videosResult.json();

  return Response.json(videosData);
}
