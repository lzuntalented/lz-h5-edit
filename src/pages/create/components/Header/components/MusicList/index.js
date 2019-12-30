import React from 'react';
import {
  Row, Col, Icon, Button,
} from 'antd';
// import { getPictureList } from '../../../../services/create';
import Music from '../../../../../../utils/music';

const defaultList = [
  {
    name: 'John Dreamer - Rise',
    url: 'http://www.lzuntalented.cn/assets/music/rise.mp3',
  },
  {
    name: '告白之夜',
    url: 'http://www.lzuntalented.cn/assets/music/sweet.mp3',
  },
  {
    name: 'Jingle Bells(圣诞)',
    url: 'http://www.lzuntalented.cn/assets/music/chirmis.m4a',
  },
  {
    name: '大哥 - 迷人的危险 (女生烟嗓版)',
    url: 'http://www.lzuntalented.cn/assets/music/mirendeweixian.mp3',
  },
  {
    name: '兔子牙 - 大田後生仔 (MV版片段)',
    url: 'http://www.lzuntalented.cn/assets/music/datianhoushengzai.mp3',
  },
  {
    name: '兔子牙 - 悬溺 (片段)',
    url: 'http://www.lzuntalented.cn/assets/music/xuanni.mp3',
  },
  {
    name: '婚礼进行曲',
    url: 'http://www.lzuntalented.cn/assets/music/hljinxingqu.mp3',
  },
];

export default class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [...defaultList],
      play: false,
    };
    this.musicHandler = new Music();
  }

  componentDidMount() {
    this.refresh();
  }

  onPlay = obj => () => {
    this.setState({ play: obj });
    this.musicHandler.setSrc(obj.url);
  }

  onStop = () => {
    this.setState({ play: false });
    this.musicHandler.pause();
  }

  onItemClick = obj => () => {
    this.onStop();
    const { onSelect } = this.props;
    onSelect(obj.url);
  }

  refresh() {
    // 暂不提供后端输出
    // getPictureList().then((res) => {
    //   this.setState({ list: [...defaultList].concat(res) });
    // });
  }


  render() {
    const { list, play } = this.state;
    return (
      <Row className="music-list">
        {
            list.map(it => (
              <Col span={12} key={it.url} className="item">
                <Row type="flex" justify="space-between">
                  <Col>
                    {it.name}
                  </Col>
                  <Col>
                    {
                      play && play.url === it.url ? <Icon type="pause-circle" onClick={this.onStop} /> : <Icon type="play-circle" onClick={this.onPlay(it)} />
                    }
                    <Button type="primary" size="small" onClick={this.onItemClick(it)}>使用</Button>
                  </Col>
                </Row>
              </Col>
            ))
        }
      </Row>
    );
  }
}
