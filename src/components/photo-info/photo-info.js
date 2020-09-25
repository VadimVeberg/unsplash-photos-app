import React from 'react';

//styles
import styled from 'styled-components';

const PhotoInfoWrapper = styled.div`
    width: 100%;
    margin-top: 17px;
    padding: 0 7px;

    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;

    @media (max-width: 576px) {
        padding: 0 3px;
     }

    @media (max-width: 576px) {
        margin-top: 8px;
     }
`;

const Author = styled.div`
    flex-grow: 1;

    display: inline-block;

`;
const AuthorLink = styled.a`
    color: ${props => props.theme.black};
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;

    transition: all .1s linear;
    &:hover {
        color: ${props => props.theme.red};
        text-decoration: none;
        font-weight: 600;
    }

    @media (max-width: 576px) {
        font-size: 12px;
     }
`;

const DateAdded = styled.time`
    flex-basis: 100%;

    margin-top: 4px;

    font-size: 12px;
    font-weight: 300;

    color:${props => props.theme.gray};
    @media (max-width: 576px) {
        font-size: 9px;

        margin-top: 2px;
    }
`;

const PhotoInfo = ({renderLikes, authorLink, authorName, dateAdded}) => {
    return (
        <PhotoInfoWrapper>
            <Author>
                <AuthorLink href={authorLink} target="blank" >{authorName}</AuthorLink>
            </Author>
            {renderLikes()}
            <DateAdded>{dateAdded}</DateAdded>
        </PhotoInfoWrapper>
    )
};

export default PhotoInfo;