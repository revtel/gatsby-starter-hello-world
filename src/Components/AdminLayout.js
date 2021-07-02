import React from 'react';
import styled from 'styled-components';
import {Layout, Button} from 'antd';
import {navigate} from 'gatsby';
import {useOutlet} from 'reconnect.js';
import {withLoginRequired} from './LoginRequired';

const SiteInfo = {
  icon: '/images/revicon_512.png',
  title: 'RevtelTech',
  subtitle: 'Subtitle',
};

const Routes = [
  {name: '首頁', path: '/admin'},
  {name: '商品', path: '/admin/products'},
  {name: '商品(inline)', path: '/admin/products-table'},
  {name: '文章', path: '/admin/articles'},
  {name: '圖片', path: '/admin/images'},
  {name: '設定', path: '/admin/settings'},
];

function AdminLayout(props) {
  const {children, location} = props;
  const [actions] = useOutlet('actions');
  const [dimension] = useOutlet('dimension');
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const mobile = !dimension.rwd || dimension.rwd === 'mobile';

  const getMenuProps = (path) => {
    return {
      selected: path === location.pathname,
      onClick: () => navigate(path),
    };
  };

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [location]);

  const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    transition: 200,
    left: 0,
  };

  if (mobile) {
    siderStyle.left = showMobileMenu ? 0 : -200;
  }

  return (
    <Layout>
      <Layout style={{marginLeft: mobile ? 0 : 200, backgroundColor: 'white'}}>
        {children}
      </Layout>

      <Layout.Sider theme="light" style={siderStyle}>
        <AppHeader
          style={{marginBottom: 40, cursor: 'pointer'}}
          onClick={() => navigate('/')}
        />

        {Routes.map(({name, path}) => (
          <MenuItem key={path} {...getMenuProps(path)}>
            {name}
          </MenuItem>
        ))}

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            padding: 30,
            width: 200,
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Button
            type="text"
            onClick={async () => {
              await actions.logout();
              navigate('/');
            }}
            style={{
              width: '100%',
              boxShadow:
                '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
              marginBottom: 10,
            }}>
            登出
          </Button>
        </div>
      </Layout.Sider>

      {mobile && (
        <MobileMainMenu
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
          }}>
          選單
        </MobileMainMenu>
      )}
    </Layout>
  );
}

function AppHeader(props) {
  const {style = {}, onClick} = props;

  return (
    <AppHeaderWrapper style={style} onClick={onClick}>
      <figure>
        <img src={SiteInfo.icon} alt="site icon" />
      </figure>

      <div className="content">
        <p>{SiteInfo.title}</p>
        <p style={{color: '#ccc'}}>{SiteInfo.subtitle}</p>
      </div>
    </AppHeaderWrapper>
  );
}

const AppHeaderWrapper = styled.header`
  background-color: white;
  display: flex;
  align-items: center;
  & > figure {
    padding: 10px;
    margin: 0px;
    & > img {
      width: 50px;
      height: 50px;
      object-fit: contain;
    }
  }
  & > .content {
    padding: 8px;
    & p {
      padding: 0;
      margin: 0;
    }
  }
`;

function MenuItem(props) {
  const {selected, onClick} = props;
  return (
    <MenuItemWrapper selected={selected} onClick={onClick}>
      {props.children}
    </MenuItemWrapper>
  );
}

const MenuItemWrapper = styled.button`
  margin: 10px;
  width: 180px;
  border: none;
  background-color: ${(props) =>
    props.selected ? 'rgba(225,129,53,0.10)' : 'transparent'};
  color: ${(props) => (props.selected ? '#E18135' : '#ccc')};
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;

  &:hover {
    border: 1px solid #ccc;
  }
`;

const MobileMainMenu = styled.button`
  position: fixed;
  right: 32px;
  bottom: 32px;
  z-index: 1;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  border: none;
  outline: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withLoginRequired(AdminLayout, true);
