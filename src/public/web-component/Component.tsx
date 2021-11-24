import React from 'react';
import PropTypes from 'prop-types';
import s from './Style.scss';

interface IWixconfig {
  data: Record<string, any>;
  viewMode: 'Site' | 'Editor' | 'Preview';
  instance: string;
  compId: string;
  pages: { id: string; url: string }[];
}

export class MyComponent extends React.Component {
  static propTypes: { wixconfig: PropTypes.Validator<string> };
  state: IWixconfig;

  constructor(props: any) {
    super(props);
    this.state = JSON.parse(props.wixconfig);
  }
  render() {
    return (
      <>
        <h1 className={s.title}>AppAthon 2021.. Here we go</h1>
        <label className={s.message}>
          My message:{' '}
          {this.state.data.message || 'open settings panel => design tab'}
        </label>
      </>
    );
  }
}

MyComponent.propTypes = {
  wixconfig: PropTypes.string.isRequired,
};
