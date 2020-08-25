import React from 'react';
import * as dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../../common/components/SectionHeader';
import Vote from '../../common/components/Vote';
import Share from '../../common/components/Share';
import { Link } from 'react-router-dom';
class Detail extends React.Component {
  handleClick = () => {
    console.log('faq');
  };

  renderCategories = () => {
    const { categories } = this.props;

    if (categories) {
      return categories.map((cat) => {
        return (
          <Link
            key={cat._id}
            to={`/knowledge-base/category/details/${cat._id}`}
          >
            <div className='tags sidebar-list'>
              <ul>
                <li className='s'>
                  <h6>
                    <i className={`icon-${cat.icon}`}></i>
                    {cat.title}
                  </h6>
                  <div className='cat-description'>
                    <p>{cat.description}</p>
                    <p>
                      There are
                      <span>
                        {' '}
                        {cat.numOfArticles} articles in this category
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Link>
        );
      });
    }
    return;
  };

  getUserDetails = () => {
    const { articleDetail } = this.props;
    const { createdUser } = articleDetail;
    const { details } = createdUser;
    const authorDetails = details;
    return authorDetails;
  };

  renderReaction = () => {
    const { articleDetail } = this.props;

    if (
      !articleDetail ||
      (articleDetail.reactionChoices &&
        articleDetail.reactionChoices.length === 0)
    ) {
      return null;
    } else
      return (
        <span>
          {' '}
          <img
            className='reaction'
            src={this.props.articleDetail.reactionChoices}
            alt='a'
          />
        </span>
      );
  };
  leftSide = () => {
    return (
      <Col md={2}>
        <div className='post-details'>
          <div>
            <div>
              <img
                className='round-img'
                alt={this.getUserDetails().fullName}
                src={this.getUserDetails().avatar}
                width='40'
                height='40'
              />
            </div>
            authored by <p>{this.getUserDetails().fullName}</p>
          </div>
          <div>
            created at{' '}
            <p>
              {dayjs(this.props.articleDetail.createdDate).format(
                'D MMM, YYYY h:mm A'
              )}
            </p>
          </div>
          <div>
            Modified
            <p>
              <time>
                {dayjs(this.props.articleDetail.modifiedDate).format(
                  'D MMM, YYYY h:mm A'
                )}
              </time>
            </p>
          </div>
          <div className='vote-bar'>
            votes
            <p>
              <span>
                <i className='icon-like'></i>16
              </span>
              <span>
                <i className='icon-dislike'></i>2
              </span>
            </p>
          </div>
          <div>
            share
            <Share />
          </div>
        </div>
      </Col>
    );
  };

  render() {
    return (
      <Container className='knowledge-base'>
        <SectionHeader icon='flag' title='Creating your first workspace' />

        <Row>
          {this.leftSide()}
          <Col md={7}>
            <div className='kbase-detail kbase-lists'>
              <Row>
                <Col md='9'>
                  <h4>{this.props.articleDetail.title}</h4>
                </Col>
              </Row>

              <hr />
              <div className='content'>
                <p>{this.props.articleDetail.summary}</p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: this.props.articleDetail.content
                  }}
                />
                <span>{this.renderReaction()}</span>
              </div>
            </div>
            <Vote />
          </Col>
          <Col md={3}>
            <div className='tags sidebar-list'>
              <h6>Categories</h6>
              {this.renderCategories()}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

Detail.propTypes = {
  kbTopic: PropTypes.object
};

export default Detail;
