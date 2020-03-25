import React from 'react';
import LzDesign from '@lz/design';

export default function () {
  return <LzDesign onPublish={data => console.log('publish', data)} />;
}
