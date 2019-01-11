import React, { Component } from 'react';
import '../../App.css';
import 'antd/dist/antd.css';

import { Col, Row,  } from 'antd';
import { Cards, } from '../../components/styleds/card.js';

import { connect } from 'react-redux';

import { Link  } from 'react-router-dom';

class detailHome extends Component {

  state = {
    data: []
  }

//   .filter(item => item.id === detailId)
  
  render() {
    console.log(this.props.movies)

    return (
      <div className="App-bg">
      <Row gutter={16}>
      { 
        this.props.movies.filter(Idmovie => (
          <Col span={6}>
            <div className="cardiner">
              <Cards>
              <div><Link to="/" className="link-detail">HOME</Link></div>
                <img alt="picMovie" src={ Idmovie } className="cover" />
              </Cards>
            </div>
          </Col>
        )
        ) 
      }
      </Row>
      </div>
      
    );
  }
}

// const mapStateToProps = state => ({
//     dataid: state.cktype //movie == this.props.movie
// })
const mapStateToProps = state => ({
    movies: state.cktype,//movie == this.props.movie
  })



export default connect ( //สามารถส่งได้ 2 ตัว และสามารถเชื่อมต่อกับredux ได้ 
  mapStateToProps,
  null,
  )(detailHome);
