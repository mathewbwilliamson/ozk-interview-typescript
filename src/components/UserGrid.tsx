import React, {useEffect, useState} from 'react';
import SingleUser from './SingleUser'

interface PersonType {
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

const UserGrid: React.FC = () => {
    const [data, setData] = useState<any>({ data: [] });
    const [isLoaded, setIsLoaded] = useState({isLoaded: false});
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        fetch('https://randomuser.me/api/?inc=name,location,picture&results=10')
            .then(res => res.json())
            .then(resData => {
                setData(resData);
                setIsLoaded({isLoaded: true});
            });
    }, []);

    if (!isLoaded) {
        return <div>...Loading</div>;
    }

    const singleUserMap = data && data.results && data.results.length > 0 && data.results
        .filter((person:PersonType, idx:number) => {
            const fullName = `${person.name.first} ${person.name.last}`;
            return fullName.includes(filterValue.toLowerCase()) && idx < 9;
        })
        .map((person:PersonType, idx:number) => <SingleUser singleUser={person} key={idx} />);

    return (
        <div>
            <input
                type="text"
                value={String(filterValue)}
                onChange={(e) => setFilterValue(String(e.target.value))}
                placeholder={"Type here to filter by name"}
            />
            <div className="UserGrid_container">
                {singleUserMap}
            </div>
        </div>
    );
}

export default UserGrid;