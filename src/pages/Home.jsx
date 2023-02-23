import React, {useState, useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container, Row, Col } from 'react-bootstrap'
import mainImg from '../assets/images/main3-img.png'
import Services from '../services/Services'
import ProductsList from '../components/ListBox/ProductsList'
import '../styles/home.css';
import products from '../assets/data/products'
import Clock from '../components/ListBox/Clock'
import counterImg from '../assets/images/counter-timer-img.png'

const Home = () => {

    const [trendingProducts, setTrendingProducts] = useState([])
    const [bestSaleProducts, setBestSaleProducts] = useState([])
    const [wirelessProducts, setWirelessProducts] = useState([])
    const [popularProducts, setPopularProducts] = useState([])
    
    const year = new Date().getFullYear()

    useEffect(() => {
        const filteredTrendingProducts = products.filter(item=>item.category === 'chair')

        const filteredBestSalesProducts = products.filter(item=>item.category === 'sofa')

        const filteredWirelessProducts = products.filter(item=>item.category === 'wireless')

        const filteredPopularProducts = products.filter(item=>item.category === 'watch')

       setTrendingProducts(filteredTrendingProducts)
       setBestSaleProducts(filteredBestSalesProducts)
       setWirelessProducts(filteredWirelessProducts)
       setPopularProducts(filteredPopularProducts)
    },[])
  return <Helmet title={'Home'}>
    <section className='nav_section'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                <div className='nav_content'>
                 <p className='nav_subtitle'>Trending Products on {year}</p>
                 <h2>Make Your Interior with Modren Designs</h2>
                 <p>We deliver inspired designs that are timeless, with careful consideration to aesthetics 
                    as well as function. We believe that is why our clients keep coming back – 
                    project after project and year after year.</p>
                    < motion.button whileTap={{scale: 1.2}} className='buy_btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
                </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className='main_img'>
                      <img src={mainImg} alt='' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <Services />
    <section className='trending_products'>
      <Container>
        <Row>
            <Col lg='23' className='text-center'>
               <h2 className='section_title'>Newly Launched Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
        </Row>
      </Container>
    </section>

    <section className='best_sales'>
        <Container>
        <Row>
            <Col lg='23' className='text-center'>
               <h2 className='section_title'>Best Sales</h2>
            </Col>
            <ProductsList data={bestSaleProducts} />
        </Row>
        </Container>
    </section>
    <section className='timer_counter'>
     <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className='clock_top-content'>
           <h4>Limited Stock Available</h4>
           <h3>Quality Armchair</h3>
          </div>
          <Clock />
          <motion.button whileTap={{scale: 1.2}} className='buy_btn store_btn'><Link to='/shop'>Visit Store</Link></motion.button>
        </Col>
        <Col lg='6' md='6' className='text-end'>
        <img src={counterImg} alt='' />
        </Col>
      </Row>
     </Container>
    </section>
    <section className='new_arrivals'>
      <Container>
        <Row>
        <Col lg='23' className='text-center mb-5'>
               <h2 className='section_title'>New Arrivals</h2>
            </Col>
            <ProductsList data={wirelessProducts} />
        </Row>
      </Container>
    </section>
    <section className='popular_category'>
    <Container>
        <Row>
        <Col lg='23' className='text-center mb-5'>
               <h2 className='section_title'>Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home