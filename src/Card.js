import React from 'react';


const Card = ({id, name, email}) => {
    //const {id, name, email} = props; - destructor, varianta mai lunga la ce e in functie
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-hover'>
            <img alt='robots' src={`https://robohash.org/${id}?size=80x80`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;