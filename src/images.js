export default async function getImages(section){
  const response = await fetch(`images/${section}.json`);
  return response.json();
}