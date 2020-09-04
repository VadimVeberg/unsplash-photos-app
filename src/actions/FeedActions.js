export const GET_LAST_PHOTOS_REQUEST = 'GET_LAST_PHOTOS_REQUEST';
export const GET_LAST_PHOTOS_SUCCESS = 'GET_LAST_PHOTOS_SUCCESS';


// unsplash.photos.listPhotos(2, 15, "latest")
//             .then(toJson)
//             .then(json => {
//             console.log(json)
//             });
            
export const getLastPhotos = () => {
    return dispatch => {
        dispatch({
            type: GET_LAST_PHOTOS_REQUEST,
        });
        
    };
};