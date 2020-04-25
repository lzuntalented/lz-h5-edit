import React from 'react';
import PropTypes from 'prop-types';
import AppleLottery from 'react-lottery';

class PictureEdit extends React.Component {
  static propTypes = {
    resetHeight: PropTypes.func.isRequired,
    imgSrc: PropTypes.string,
  }

  static defaultProps = {
    imgSrc: '',
  }

  onLoad = (e) => {
    const { resetHeight } = this.props;
    resetHeight(e.target.height);
  }

  render() {
    const { imgSrc } = this.props;
    return (
      <AppleLottery
        list={list}
        rowCount={3}
        itemStyle={(item, index, isActive) => ({
          background: item.color,
        })}
        validate={(next) => {
          if (lotteryTimes <= 0) {
            alert('No more lottery times! Now give you 5 times.');
            lotteryTimes = 5;
          } else {
            lotteryTimes -= 1;
            setTimeout(() => next(true), 50);
          }
        }}
        onLotteryStart={(complete, state) => {
          setTimeout(() => complete(5), 2000);
        }}
        onLotteryComplete={(index, item) => {
          window.console.log(index, item);
        }}
      />
    );
  }
}

export default PictureEdit;
