import React from 'react'
import Link from 'next/link'


const Pictures = ({ pictures, offset }) => (
    pictures.map((picture, index) => {
        if (index >= offset && index < offset + 15) {
            return (
                <div key={index} className="col-md-4">
                    <div className="view view-animation">
                        <img src={`/assets/img/${picture.image}.jpg`} alt={picture.alt} className="img-fluid"/>
                        <div className="mask">  
                            <h2>{picture.title}</h2>
                            <p><em>{picture.description}</em></p>
                            <Link href="/p/[index]" as={`/p/${index}`}><p className="info">Open</p></Link>  
                        </div>
                    </div>
                </div>
            )
        }
    })
)

export default Pictures;
/*
<div className="photo-overlay">
		<h2>{item.title}</h2>
		<p>{item.description}</p>
		<p>Week of: {item.week}</p>
		<p>Location: {item.location}, {item.state}</p>
	</div>
*/