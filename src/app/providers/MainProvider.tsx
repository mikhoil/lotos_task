import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { queryClient } from '../../shared/lib/react-query';

export class MainProvider extends React.Component<React.PropsWithChildren> {
  render(): React.ReactNode {
    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{this.props.children}</BrowserRouter>
      </QueryClientProvider>
    );
  }
}
