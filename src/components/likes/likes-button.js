import React, { useContext } from 'react';

import UserContext from '../../contexts/userContext';
import LikeActionsContext from '../../contexts/likeActionsContext';

import styled from 'styled-components';

const LikesIconSvg = styled.svg`
    width: 23px;
    height: 23px;

    cursor: pointer;

    margin-left: 11px;

    fill: ${props => props.isLiked ? props.theme.red : props.theme.black};

    @media(max-width: 576px) {
        width: 19px;
        height: 19px;
    }
`;

const LikesButton = ({isLiked, photoId}) => {
    const { isLogged } = useContext(UserContext);
    const { likePhoto, unLikePhoto } = useContext(LikeActionsContext);

    const likeAction = (id) => {
        if (isLogged && isLiked) {
            unLikePhoto(id);
        } else if (isLogged && !isLiked) {
            likePhoto(id);
        }
    };

    return (
        <LikesIconSvg version="1.1" id="Capa_1"  x="0px" y="0px"
            viewBox="0 0 512 512" 
            isLiked={isLiked}
            onClick={() => likeAction(photoId)}>
            <g>
                <path d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                C512,93.417,453.532,30,376,30z"/>
            </g>
        </LikesIconSvg>
    );
};

export default LikesButton;