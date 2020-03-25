import React from 'react';
import { createMap } from '../../utils/map';

export default class MapContainer extends React.Component {
    containerRef = React.createRef()

    componentDidMount() {
      const { current } = this.containerRef;
      if (current) {
        createMap().then((BMap) => {
          // 创建地图实例
          const map = new BMap.Map(current);
          this.mapHandler = map;
          this.centerPoint();
        //   初始化地图，设置中心点坐标和地图级别
        });
      }
    }

    componentDidUpdate(prevProps) {
    //   console.log(prevProps, this.props);
      if (prevProps.address !== this.props.address) {
        this.centerPoint();
      }
    }

    centerPoint() {
      if (this.mapHandler) {
        const myGeo = new window.BMap.Geocoder();
        const map = this.mapHandler;
        myGeo.getPoint(this.props.address, (point) => {
          if (point) {
            map.centerAndZoom(point, 16);
            map.clearOverlays();
            map.addOverlay(new window.BMap.Marker(point));
          }
        });
      }
    }


    render() {
      return (
        <div
          ref={this.containerRef}
          style={{
            width: '100%', height: '100%', position: 'absolute', pointerEvents: 'none',
          }}
        />
      );
    }
}
