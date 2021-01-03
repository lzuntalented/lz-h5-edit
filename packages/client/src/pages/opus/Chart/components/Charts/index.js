import React, { useEffect, useRef, useState } from 'react';
import echarts from 'echarts/lib/echarts';
import { Radio } from 'antd';
import dayjs from 'dayjs';
import { getList } from '../../../../../services/log';

// 引入柱状图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
// require('echarts/lib/component/axis');

const timeOptions = [
  {
    key: '1',
    text: '今日',
  },
  {
    key: '2',
    text: '近7日',
  },
  {
    key: '3',
    text: '近30天',
  },
];

export default function Charts(props) {
  const { id } = props;
  const ref = useRef(null);
  const [state, setState] = useState({
    time: '1',
    list: [],
  });
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(ref.current);

    getList({
      opus_id: +id,
      time: state.time,
    }).then((res) => {
      const formatStr = state.time === '1' ? 'HH:mm' : 'YYYY-MM-DD';
      const tooltipTpl = state.time === '1' ? '{b0}<br />PV : {c0}' : '{b0}<br />PV : {c0}';
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          formatter: tooltipTpl,
        },
        xAxis: {
          name: '时间',
          type: 'category',
          data: res.map(it => dayjs(it.time).format(formatStr)),
        },
        yAxis: {
          name: 'PV',
          type: 'value',
        },
        series: [{
          data: res.map(it => it.value),
          type: 'line',
          lineStyle: {
            color: '#1593ff',
          },
          itemStyle: {
            borderColor: '#1593ff',
          },
        }],
      });
    });
  }, [state.time]);

  const onTimeChange = (e) => {
    setState({
      ...state,
      time: e.target.value,
    });
  };

  return (
    <div>
      <Radio.Group onChange={onTimeChange} value={state.time} buttonStyle="solid">
        {
          timeOptions.map(it => <Radio.Button key={it.key} value={it.key}>{it.text}</Radio.Button>)
        }
      </Radio.Group>
      <div ref={ref} style={{ width: '100%', height: 500 }} />
    </div>
  );
}
