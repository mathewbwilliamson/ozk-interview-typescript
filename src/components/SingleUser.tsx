import React from 'react';

interface SingleUserProps {
    singleUser: {
        location: {
            street: string,
            city: string,
            state: string,
            postcode: string
        },
        name: {
            first: string,
            last: string
        },
        picture: {
            large: string,
            alt: string
        }
    }
}

const SingleUser = ({singleUser}: SingleUserProps) => {
    const {location} = singleUser;

    return (
        <div className="User_wrapper">
            <div className="User_container">
                <h3 className="User_name">{singleUser.name.first} {singleUser.name.last}</h3>
                <img src={singleUser.picture.large} alt={singleUser.picture.alt} />
                <div className="User_location">
                    <p>{location.street}</p>
                    <p>{location.city}, {location.state} {location.postcode}</p>
                </div>
            </div>
        </div>
    );
}

export default SingleUser;
