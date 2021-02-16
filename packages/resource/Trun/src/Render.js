import React, {
  useRef, useState, useCallback, useEffect,
} from 'react';
import { message, Modal } from 'antd';
import PropTypes from 'prop-types';
import './index.scss';

function EditComp(props) {
  const {
    getRequestHandler,
  } = props;
  const list = (new Array(8).fill(1)).map((it, index) => ({
    name: props[`prizeName${index + 1}`],
    src: props[`prizePic${index + 1}`],
    per: props[`prizePercent${index + 1}`],
    tip: props[`prizeTip${index + 1}`],
  }));

  const ref = useRef(0);
  const [cls, setCls] = useState('');
  const [cur, setCur] = useState(0);
  const stop = useRef(-1);
  // const [cur, setCur] = useState(0);
  const cacheCount = useRef(0);
  const [loading, setLoading] = useState(false);
  const timeHandler = useRef(null);
  const prize = useRef(0);

  const onClick = () => {
    if (loading) return;
    setLoading(true);

    if (getRequestHandler) {
      getRequestHandler(1, 2).then((res) => {
        if (res >= 0) {
          setTimeout(() => {
            stop.current = 360 - (22.5 + 45 * (res));
            prize.current = res;
          }, 1000 * 3);
        }
        // console.log(res);
        // message.success(res || '操作成功');
      }).catch(() => {
        message.error('操作失败，请重试');
      });

      timeHandler.current = setInterval(() => {
        if (stop.current > -1) {
          if (Math.abs(cacheCount.current - stop.current) < 5) {
            cacheCount.current = 0;
            stop.current = -1;
            setLoading(false);
            window.clearInterval(timeHandler.current);
            // 延时一秒弹出
            setTimeout(() => {
              Modal.success({
                title: list[prize.current].tip,
                onOk() {
                  setCur(0);
                },
              });
            }, 1000);
            return;
          }
        }
        const ret = cacheCount.current + 3;
        if (ret > 360) {
          cacheCount.current = 360 - ret;
        } else {
          cacheCount.current = ret;
        }
        setCur(cacheCount.current);
      }, 1000 / 60);
    }

    // setTimeout(() => {
    //   stop.current = 360 - (22.5 + 45 * (1));
    //   prize.current = 1;
    //   // window.clearInterval(timeHandler.current);
    // }, 1000 * 3);
  };

  useEffect(() => () => {
    if (timeHandler?.current) {
      window.clearInterval(timeHandler.current);
    }
  }, []);

  const style = {
    transform: `rotate(${cur}deg)`,
  };

  return (
    <div
      className="resource-trun"
      style={{
        minWidth: 270,
        position: 'relative',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          marginBottom: -18,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <img width="32" src="http://show.lzuntalented.cn/server/static/pic/1611678657000-h50mprlrzf2i-70993dc3-593c-4bcd-9618-45c76160d991.png" alt="" />
      </div>
      <div style={{ position: 'relative' }}>
        <div
          ref={ref}
          className={cls}
          style={{
            position: 'relative',
            padding: 16,
            ...style,
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <img width="100%" src="http://show.lzuntalented.cn/server/static/pic/1611676558000-mgwsqzi6i0qc-2ef53ea9-19e1-46c8-b1d3-24e2b3443525.png" alt="" />
          </div>
          <div
            style={{
              position: 'relative',
              zIndex: 1,
            }}
          >
            <img width="100%" src="http://show.lzuntalented.cn/server/static/pic/1611676294000-ldx8vj7kmqdh-4d8687b7-c7d7-4f47-b3c6-a68ed18569f9.png" alt="" />
            {
            list.map((it, index) => (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  left: '50%',
                  bottom: '50%',
                  width: '40%',
                  height: '50%',
                  textAlign: 'center',
                  transformOrigin: '50% 100%',
                  transform: `translateX(-50%) rotate(${22.5 + 45 * index}deg)`,
                  paddingTop: 16,
                }}
              >
                <div style={{ marginBottom: 12 }}>
                  {
                  it.name
                }
                </div>
                <img width="25%" src={it.src} alt="" />
              </div>
            ))
          }
          </div>
        </div>
        {!cls && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '30%',
            height: '30%',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            zIndex: 1,
          }}
          onClick={onClick}
        >
          <img width="100%" src="http://show.lzuntalented.cn/server/static/pic/1611678900000-0tj4fen6ymao-251530e8-d038-40b8-b8da-a889217997a4.png" alt="" />
        </div>
        )}
      </div>
    </div>
  );
}

EditComp.prototype.propTypes = {
};

EditComp.prototype.defaultProps = {
};

export default EditComp;
