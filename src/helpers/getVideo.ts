
export const getVideo = async (/* newCountry:string */) => {

    const url = `https://api.pexels.com/videos/search?query=peru&size=medium&per_page=10`;

    const response = await fetch(url,{headers: {Authorization: 'SeEsFUXe7t1gK7YwXgfhf4qtMbqqsFDM5nVmZh1liPQkQ7gWEOUfp1hD',}}) 

    const responseData = await response.json();

    console.log(responseData);

    return (
        'https://www.youtube.com/watch?v=9bZkp7q19f0'
    )
}
