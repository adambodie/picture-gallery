import Layout from '../../src/components/myLayout.js';
import fetch from 'isomorphic-unfetch';

const Post = props => (
    <Layout>
        <div className="row modal-body" style={{background: 'black'}}>
            <div className="col-sm-6">
                <img src={`https://s3-us-west-2.amazonaws.com/picture-gallery.bodiewebdesign.com/assets/${props.item.image}`} alt={props.item.title} className="img-fluid"/>
            </div>
            <div className="modal-description col-sm-6">
                <div className="modal-title">
                    <h2>{props.item.title}</h2>
                    <p>{props.item.description}</p>
                </div>
                <div className="modal-info">
                    <p>Week of: {props.item.week}</p>
                    <p>Location: {props.item.location}, {props.item.state}</p>
                </div>
            </div>
        </div>
    </Layout>
);

Post.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://s3-us-west-2.amazonaws.com/picture-gallery.bodiewebdesign.com/assets/data/pictures.json`);
    const picture = await res.json();
    const item = picture[id];
    return { item };
};

export default Post;