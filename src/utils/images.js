const images = [];

for (let index = 1; index <= 35; index++) {
	images.push({ id: index, src: `../assets/img${index}`, alt: `Image ${index}` });
}

function imageLoader() {
	return images;
}

export default imageLoader;
