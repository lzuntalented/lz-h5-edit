import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import LazyImage from './lazyImage';

export default class ImageList extends React.Component {
  static propTypes = {
    defaultPicture: PropTypes.array.isRequired,
    fetchPicture: PropTypes.func.isRequired,
    onAddPicture: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    const { defaultPicture = [] } = props;
    this.state = {
      list: [...defaultPicture],
    };
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    const { defaultPicture = [], fetchPicture } = this.props;
    if (fetchPicture) {
      fetchPicture().then((res) => {
        this.setState({ list: [...defaultPicture].concat(res) });
      });
    }
  }

  render() {
    const { onAddPicture } = this.props;
    const { list } = this.state;
    return (
      <Row type="flex" className="image-list" justify="space-around">
        {
            list.map(it => (
              <Col key={it} className="item" onClick={onAddPicture(it)}>
                <LazyImage width="95%" src={it} alt="" />
              </Col>
            ))
        }
        <i className="i" />
        <i className="i" />
        <i className="i" />
        <i className="i" />
      </Row>
    );
  }
}
