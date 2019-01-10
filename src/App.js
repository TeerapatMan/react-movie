import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import favorite from './img/favorite.png';

import { Col, Row, Avatar  } from 'antd';
import { Cards, H1, } from './components/card'
import { connect } from 'react-redux';

class App extends Component {
  
  state = {
    data: []
  }
  componentDidMount = () => {
    fetch('http://www.mocky.io/v2/5c3724b83000009d001f6253')
    .then(res => res.json())
    .then((response) => {
      this.props.DataMovive(response.movies) //ค่าจะถูกส่งไปใน function DataMovive
    })
  }
  
  render() {

    console.log(this.props.movie) 

    return (
      <div className="App-bg">
      <Row gutter={8}>
      { 
        this.props.movie.map(Item => (
          <Col span={6}>
            <div className="cardiner">
              <Cards>
                <H1 className="name">{ Item.name }</H1>
                <H1 className="released">{ Item.released }</H1>
                <img alt="picMovie" src={ Item.image } className="cover" />
                <H1 className="rated"><Avatar src={favorite} className="avatar"></Avatar>{ " "+ Item.rated + " " }<span className="span"> / 10 </span></H1>
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

const mapStateToProps = state => ({
  movie: state.cktype //movie == this.props.movie

})

const mapDispatchToProps = dispatch => ({
  DataMovive(res) {
    dispatch({
      type: "API",
      data: res
    })
  }
})


export default connect ( //สามารถส่งได้ 2 ตัว และสามารถเชื่อมต่อกับredux ได้ 
  mapStateToProps,
  mapDispatchToProps,
  )(App);
