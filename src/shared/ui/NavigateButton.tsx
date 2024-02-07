import React, { ButtonHTMLAttributes } from 'react';

export class NavigateButton extends React.Component<
  React.PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> {
  render(): React.ReactNode {
    const { className } = this.props;
    return (
      <button
        {...this.props}
        className={`bg-[#48a3e5cc] font-medium disabled:bg-[#d5dff3] disabled:text-black px-3 py-2 rounded-2xl hover:bg-[#303077] hover:text-white active:scale-95 ${className}`}
      >
        {this.props.children}
      </button>
    );
  }
}
