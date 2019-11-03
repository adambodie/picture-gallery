import '../../src/styles/picture.scss'


const Picture = ({item}) => (
    <div className="row" style={{background: 'black'}}>
        <div className="col-sm-6">
            <div className="photo">
                <img src={`/assets/img/${item.image}.jpg`} alt={item.title} className="img-fluid"/>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="description">
                <div className="title">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
                <div className="info">
                    <p>Week of: {item.week}</p>
                    <p>Location: {item.location}, {item.state}</p>
                </div>
            </div>
        </div>
    </div>
);

export default Picture;