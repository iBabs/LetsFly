import {Row, Col} from'react-bootstrap'
import goods from '../data/goods.json'
import GoodsCard from '../components/GoodsCard';

const Store = () => {
    return (
        <div>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className='g-3'>
                {goods.map(item=>(
                    <Col>
                    <GoodsCard {...item} key={item.id} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Store;