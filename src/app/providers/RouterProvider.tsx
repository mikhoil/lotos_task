import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UseParamsPersonPageHOC } from '../../pages/person/ui';
import { SearchPage } from '../../pages/search';

export class RouterProvider extends React.Component {
  render(): React.ReactNode {
    return (
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path=":person" element={<UseParamsPersonPageHOC />} />
      </Routes>
    );
  }
}
