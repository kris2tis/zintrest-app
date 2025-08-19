export async function convertImgeUrltoFilename(imageUrl) {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    const fileName = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);
    const file = new File([blob], fileName, { type: blob.type });

    return file;
  } catch (err) {
    console.error("Error convertig link to file", err);
  }
}