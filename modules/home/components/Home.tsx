import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
import { Topic } from '../../types';
import Banner from './Banner';
type Props = {};

class Home extends React.Component<Props> {
  render() {
    return <Banner />;
  }
}

export default Home;
