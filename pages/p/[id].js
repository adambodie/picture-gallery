import Layout from '../../src/components/myLayout.js'
import Picture from '../../src/components/Picture.js'
import '../../src/styles/picture.scss'
import fetch from 'isomorphic-unfetch'

const Post = props => (
    <Layout>
        <div className="container-fluid">
            <Picture item={props.item} />
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