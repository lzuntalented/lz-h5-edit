import React from 'react';
import PropTypes from 'prop-types';
import Music from '../../utils/music';

export default class MusicComponent extends React.Component {
    static propTypes = {
      src: PropTypes.string,
    }

    static defaultProps = {
      src: '',
    }

    constructor(props) {
      super(props);
      this.musicHandler = new Music();
    }

    componentWillReceiveProps(nextProps) {
      const { src } = this.props;
      if (nextProps.src !== src) {
        this.musicHandler.setSrc(nextProps.src);
      }
    }

    render() {
      return (
        <div />
      );
    }
}
