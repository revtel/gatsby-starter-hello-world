import React from 'react';
import {getOutlet} from 'reconnect.js';
import * as JStorage from 'rev.sdk.js/Actions/JStorage';
import * as ApiUtil from 'rev.sdk.js/Utils/ApiUtil';
import LoginModal from '../Components/LoginModal';
import ResetPasswordModal from '../Components/ResetPasswordModal';
import GlobalSpinner from '../Components/GlobalSpinner';
import {buildCatDisplayMap} from '../Utils/buildCatDisplayMap';
import Config from '../../data.json';

function Provider(props) {
  const Dimension = getOutlet('dimension');
  const detectDimension = React.useCallback(() => {
    const nextDimension = {};
    if (typeof window !== undefined) {
      nextDimension.innerWidth = window.innerWidth;
      nextDimension.innerHeight = window.innerHeight;
      if (window.innerWidth <= 768) {
        nextDimension.rwd = 'mobile';
      } else {
        nextDimension.rwd = 'desktop';
      }
      Dimension.update(nextDimension);
    }
  }, [Dimension]);

  const onResize = React.useCallback(() => {
    detectDimension();
  }, [detectDimension]);

  React.useEffect(() => {
    try {
      detectDimension();
      if (typeof window !== undefined) {
        window.addEventListener('resize', onResize);
      }
      return () => {
        if (typeof window !== undefined) {
          window.removeEventListener('resize', onResize);
        }
      };
    } catch (ex) {
      console.warn('Provider:useEffect', ex);
    }
  }, [onResize, detectDimension]);

  React.useEffect(() => {
    console.log('AppCtx effect hook');
    async function onCtxRendered() {
      let configs = null;

      if (Config.siteCacheUrl) {
        try {
          configs = await ApiUtil.req(Config.siteCacheUrl);
        } catch (ex1) {
          console.warn('[AppContext] siteCacheUrl is set but no data');
        }
      }

      if (!configs) {
        try {
          configs = await JStorage.fetchDocuments('site', {}, null, null);
        } catch (ex2) {
          console.warn('[AppContext] fail to fetch site collection');
          configs = [];
        }
      }

      for (const cfg of configs) {
        if (cfg.name === 'product_category') {
          getOutlet('categories').update(cfg.categories || []);
          getOutlet('categoryDisplayMap').update(
            buildCatDisplayMap(cfg.categories || []),
          );
        } else if (cfg.name === 'article_category') {
          getOutlet('articleCategories').update(cfg.categories || []);
          getOutlet('articleCategoryDisplayMap').update(
            buildCatDisplayMap(cfg.categories || []),
          );
        } else if (cfg.name === 'landing') {
          getOutlet('landing').update(cfg || []);
        }
      }
    }
    onCtxRendered();
  }, []);

  console.log('AppCtx rendered');

  return (
    <>
      {props.children}

      <LoginModal />
      <ResetPasswordModal />
      <GlobalSpinner />
    </>
  );
}

export {Provider};
