import React, { useState, useEffect } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import axios from 'axios';
import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {

  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/everything?q=Crypto&from=2021-11-21&sortBy=popularity&apiKey=96d7d0ca87d4476fbcdaca55c30924ed`)
      .then(function (response) {
        console.log(response.data.articles);
        setNewsData(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);



  return (
    <>
      {newsData.length == 0 ? (<Loader />) : (<>
        <Row gutter={[24, 24]}>
          {newsData.map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card">
                <a href={news.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Title className="news-title" level={4}>{news.title}</Title>
                    <img src={demoImage} alt="" />
                  </div>
                  <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                  <div className="provider-container">
                    <div>
                      <Text className="provider-name">{news.author}</Text>
                    </div>
                  </div>
                </a>
              </Card>
            </Col>
          ))}
        </Row></>)}
    </>
  );
};

export default News;