import React, { Component } from 'react'
import Layout from '../src/components/myLayout'
import Jumbotron from '../src/components/Jumbotron'
import '../src/styles/pictures.scss'
import Link from 'next/link'
import ReactPaginate from 'react-paginate'
import fetch from 'isomorphic-unfetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

class Index extends Component {
    constructor(props) {
		super(props);
		this.state = {
			offset: 0
		};
	}
    handlePageClick = (data) => {
		let selected = data.selected;
		let offset = Math.ceil(selected * 15);
		this.setState({offset: offset});
	};
    render() {
        const { pictures, pageCount } = this.props;
        const { offset } = this.state;
        const linkName = 'https://s3-us-west-2.amazonaws.com/picture-gallery.bodiewebdesign.com';
        return(
        <Layout>
        <Jumbotron />
        <div className="row">
            {pictures.map((picture, index) => {
                if (index >= offset && index < offset + 15) {
                    return (
                        <div key={index} className="col-md-4">
                        <div className="photo">
                        <Link href="/p/[index]" as={`/p/${index}`}>
                            <img src={`${linkName}/assets/img/${picture.image}.jpg`} alt={picture.alt} className="img-fluid"/>
                        </Link>
                    </div>
                </div>
                )
                
            }
        })}
        </div>
        <ReactPaginate 
				previousLabel={<FontAwesomeIcon icon={faAngleDoubleLeft} size="lg" />}
				nextLabel={<FontAwesomeIcon icon={faAngleDoubleRight} size="lg" />}
				breakClassName={"break-me"}
				pageCount={pageCount}
				marginPagesDisplayed={8}
				pageRangeDisplayed={1}
				onPageChange={this.handlePageClick}
				containerClassName={"pagination"}
				subContainerClassName={"pages pagination"}
				activeClassName={"active"} 
			/>
    </Layout>
        )
    }
}

Index.getInitialProps = async function() {
    const res = await fetch('https://s3-us-west-2.amazonaws.com/picture-gallery.bodiewebdesign.com/assets/data/pictures.json');
    const data = await res.json();
    const perPage = 15;
    return {
        pictures: data.map(entry => entry),
        pageCount: Math.ceil(data.length / perPage)
    };
};

export default Index;


/*
<div className="photo-overlay">
		<h2>{item.title}</h2>
		<p>{item.description}</p>
		<p>Week of: {item.week}</p>
		<p>Location: {item.location}, {item.state}</p>
	</div>
*/