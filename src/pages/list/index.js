import React from 'react';
import Card from './components/Card';

import './index.scss';
import {
  CLICK_TYPE_DEFAULT, CLICK_TYPE_EDIT, CLICK_TYPE_PREVIEW, getLocalCardList,
} from './config';
import { getList } from '../../services/create';
import { translateShowDataFromStore } from '../../utils';
import { LOCALSTORAGE_PREVIEW_CHACHE, LOCALSTORAGE_PREVIEW_NAMESPACE } from '../../core/constants';
import LzLocalStorage from '../../utils/LocalStorage';

export default class List extends React.Component {
  mLzLocalStorage = new LzLocalStorage(LOCALSTORAGE_PREVIEW_NAMESPACE);

  state = {
    list: getLocalCardList(),
  }

  componentDidMount() {
    this.getCardList();
  }


  getCardList = () => {
    const { list } = this.state;
    const result = [];
    getList().then((res) => {
      res.forEach(({ id, content }) => {
        const obj = JSON.parse(content);
        result.push({
          id,
          origin: obj,
          content: translateShowDataFromStore(obj),
        });
      });
      this.setState({ list: result.concat(list) });
    });
  }

  clickCallback = (type, data) => () => {
    if (type === CLICK_TYPE_DEFAULT) {
      window.location.hash = '/create';
    } else if (type === CLICK_TYPE_EDIT) {
      const { list } = this.state;
      const obj = list.find(it => it.id === data);
      if (obj) {
        this.mLzLocalStorage.set(LOCALSTORAGE_PREVIEW_CHACHE, JSON.stringify(obj.origin));
      }
      window.location.hash = `/edit/${data}`;
    } else if (type === CLICK_TYPE_PREVIEW) {
      const { list } = this.state;
      const obj = list.find(it => it.id === data);
      if (obj) {
        this.mLzLocalStorage.set(LOCALSTORAGE_PREVIEW_CHACHE, JSON.stringify(obj.origin));
      }
      window.location.hash = `/preview/${data}`;
    }
  };

  render() {
    const { list } = this.state;
    return (
      <div className="page-list">
        <ul>
          <Card defaultType onClick={this.clickCallback} />
          {
            list.map(it => <Card key={it.id} onClick={this.clickCallback} data={it} />)
        }
        </ul>
      </div>
    );
  }
}

// const clickCallback = (type, data) => () => {
//   if (type === CLICK_TYPE_DEFAULT) {
//     window.location.hash = '/create';
//   } else if (type === CLICK_TYPE_EDIT) {
//     window.location.hash = `/edit/${data}`;
//   } else if (type === CLICK_TYPE_PREVIEW) {
//     // getPerviewImage();
//     window.location.hash = `/preview/${data}`;
//   }
// };

// function getCardList(list, setList) {
//   getList().then((res) => {
//     res.forEach(({ id, content }) => {
//       list.push({
//         id,
//         content: translateShowDataFromStore(JSON.parse(content)),
//       });
//     });
//     setList(list);
//   });
// }

// export default () => {
//   const [list, setList] = React.useState(getLocalCardList());
//   React.useEffect(() => {
//     getCardList(list, setList);
//   }, []);
//   console.log(list);
//   return (
//     <div className="page-list">
//       <ul>
//         <Card defaultType onClick={clickCallback} />
//         {
//             list.map(it => <Card key={it.id} onClick={clickCallback} data={it} />)
//         }
//       </ul>
//     </div>
//   );
// };
