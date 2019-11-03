import React from 'react';
import Layout from '../src/components/myLayout';
import Link from 'next/link'

const Index = props => (
    <Layout>
        <div className="jumbotron container">
			<h1>Picture Gallery</h1>
			<p>For Four Years, I created a photo gallery of pictures I took which I featured on my front page as "Picture of the Week."  It was a fun project that kept me looking at my portfolio site.  But reaching the Four Year mark, I felt it was necessary to pull the plug and make my portfolio site focused solely on my projects.  With that, I moved the photo gallery to its own page.  Here are the photos from my Picture of the Week gallery.</p>
		</div>
        <div className="row">
            {props.pictures.map((picture, index) => (
                <div key={index} className="col-md-4">
                    <div className="photo">
                        <Link href="/p/[index]" as={`/p/${index}`}>
                            <img src={`https://s3-us-west-2.amazonaws.com/picture-gallery.bodiewebdesign.com/assets/${picture.image}`} alt={picture.alt} className="img-fluid"/>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </Layout>
    
  );
  
Index.getInitialProps = async function() {
    const res = await fetch('https://s3-us-west-2.amazonaws.com/picture-gallery.bodiewebdesign.com/assets/data/pictures.json');
    const data = await res.json();

    return {
        pictures: data.map(entry => entry),
    };
};

  export default Index;