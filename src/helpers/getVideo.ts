export const getVideo = async () => {

    const videoURL = `https://pixabay.com/api/videos/?key=43752561-8a4b33ad9ab479224378d13f5&q=peru&per_page=10`

    const response = await fetch(videoURL);

    const video = await response.json();

    const videoFinded = video.hits[5].videos.large.url;
    /* console.log(video.hits[0].videos.large.url); */

    return (
        videoFinded
    )
}
