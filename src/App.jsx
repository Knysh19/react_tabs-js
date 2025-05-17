import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { Tabs } from './components/Tabs/Tabs';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
 const [ value, setValue ] = useState(1);

  return (
    <div className="section">
      <h1 className="title">Selected tab is Tab {value}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            <li className={value === 1 ? 'is-active' : ''} data-cy="Tab">
              <a href="#tab-1" data-cy="TabLink" onClick={() => setValue(1)}>
                Tab 1
              </a>
            </li>

            <li className={value === 2 ? 'is-active' : ''} data-cy="Tab">
              <a href="#tab-2" data-cy="TabLink" onClick={() => setValue(2)}>
                Tab 2
              </a>
            </li>

            <li className={value === 3 ? 'is-active' : ''} data-cy="Tab">
              <a href="#tab-3" data-cy="TabLink" onClick={() => setValue(3)}>
                Tab 3
              </a>
            </li>
          </ul>
        </div>

        <Tabs value={value} />
      </div>
    </div>
  );
};
