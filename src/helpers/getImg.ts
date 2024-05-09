
export const getImg = async (newCountry: string) => {


    const url = `https://pixabay.com/api/?key=43752561-8a4b33ad9ab479224378d13f5&q=wonder+${newCountry}&image_type=photo`;


    const response = await fetch(url);

    const responseData = await response.json();

    console.log(responseData);

    const responseImg = responseData.hits[1].largeImageURL


    return (
        responseImg
    )
}
