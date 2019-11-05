import React, { Component } from 'react'
import Layout from '../src/components/myLayout'
import Jumbotron from '../src/components/Jumbotron'
import Pictures from '../src/components/Pictures'
import '../src/styles/pictures.scss'
import ReactPaginate from 'react-paginate'
import fetch from 'isomorphic-unfetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const linkName = 'https://s3-us-west-2.amazonaws.com/picture-gallery.bodiewebdesign.com';

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
        return(
            <Layout>
                <Jumbotron />
                <div className="container">
                    <div className="row">
                        <Pictures pictures={pictures} offset={offset} />
                    </div>
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
    const res = await fetch(`${linkName}/assets/data/pictures.json`);
    const data = await res.json();
    const perPage = 15;
    return {
        pictures: data.map(entry => entry),
        pageCount: Math.ceil(data.length / perPage)
    };
};

export default Index;