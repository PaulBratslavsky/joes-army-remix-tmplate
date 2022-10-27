export function getImageThumbnail(item) {
  if (item.data.attributes.formats === null) return item.data.attributes.url;
  else return item.data.attributes.formats.thumbnail.url;
}