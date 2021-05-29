import React from 'react';
import {useOutlet} from 'reconnect.js';
import {Menu, Dropdown} from 'antd';

function SortMenu(props) {
  const [options] = useOutlet('sortOptions');
  const {sort, updateSort} = props;

  return (
    <>
      <label style={{margin: '0px 10px'}}>排序</label>
      <Dropdown
        overlay={
          <Menu>
            {options.map((option) => {
              return (
                <Menu.Item
                  key={option.name}
                  onClick={() => {
                    updateSort(option.name);
                  }}>
                  {option.display}
                </Menu.Item>
              );
            })}
          </Menu>
        }>
        <div>{sort || '---'}</div>
      </Dropdown>
    </>
  );
}

export default SortMenu;
