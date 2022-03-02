import React from 'react';
import styled from 'styled-components';
import {Button} from 'antd';
import {StaticImage} from 'gatsby-plugin-image';
import ReactDelighters from 'rev.sdk.js/Components/ReactDelighters';

function Landing(props) {
  return (
    <ReactDelighters>
      <Wrapper>
        <HeroBannerSection style={{backgroundColor: '#F47730', width: '100%'}}>
          <h2>RevConsult 軟體顧問服務</h2>
          <p>以專業及經驗降低軟體開發風險</p>
        </HeroBannerSection>

        <FlexItemSection
          style={{backgroundColor: '#eee', width: '100%', maxWidth: 1500}}>
          <h2>服務內容</h2>
          <div className="content">
            <FlexItem
              style={{
                borderRadius: 10,
                padding: 15,
                backgroundColor: 'white',
                boxShadow: 'rgb(204 204 204) 0.125rem 0.125rem 0px 0.125rem',
              }}>
              <div className="description" style={{borderRadius: 10}}>
                <h3 style={{marginBottom: 10}}>系統規劃</h3>
                <h4 style={{marginBottom: 10}}>適用於客製化系統先期調研</h4>
                <p style={{color: '#3E3E3E'}}>
                  因軟體工程的連續性及難以分割，開發流程不易在中途隨意中止。本服務協助於先期規劃階段排除流程或功能的潛在設計不良
                </p>
              </div>
            </FlexItem>

            <FlexItem
              style={{
                borderRadius: 10,
                padding: 15,
                backgroundColor: 'white',
                boxShadow: 'rgb(204 204 204) 0.125rem 0.125rem 0px 0.125rem',
              }}>
              <div className="description" style={{borderRadius: 10}}>
                <h3 style={{marginBottom: 10}}>系統健檢</h3>
                <h4 style={{marginBottom: 10}}>適用於既有系統的風險排查</h4>
                <p style={{color: '#3E3E3E'}}>
                  軟體的複雜隨著時間成指數倍增長，在改版、升級或擴充時需要完整掌握。本服務協助評估既有系統狀態及協助驗收開發成果
                </p>
              </div>
            </FlexItem>

            <FlexItem
              style={{
                borderRadius: 10,
                padding: 15,
                backgroundColor: 'white',
                boxShadow: 'rgb(204 204 204) 0.125rem 0.125rem 0px 0.125rem',
              }}>
              <div className="description" style={{borderRadius: 10}}>
                <h3 style={{marginBottom: 10}}>技術佈局</h3>
                <h4 style={{marginBottom: 10}}>適用於長期產品的技術建議</h4>
                <p style={{color: '#3E3E3E'}}>
                  面對新的軟體框架不斷出現，長期經營的事業常常面臨技術挑選的困擾。本服務根據團隊狀態及公司方向做技術佈局規劃及建議
                </p>
              </div>
            </FlexItem>

            <FlexItem
              style={{
                borderRadius: 10,
                padding: 15,
                backgroundColor: 'white',
                boxShadow: 'rgb(204 204 204) 0.125rem 0.125rem 0px 0.125rem',
              }}>
              <div className="description" style={{borderRadius: 10}}>
                <h3 style={{marginBottom: 10}}>商模建議</h3>
                <h4 style={{marginBottom: 10}}>基於軟體產品規劃盈利模式</h4>
                <p style={{color: '#3E3E3E'}}>
                  因應軟體架構發展，近年出現許多如訂閱制等新商業模式。本服務協助以過往經驗及技術基底提供商業模型建議協作及發展評估
                </p>
              </div>
            </FlexItem>
          </div>
        </FlexItemSection>

        <FlexItemSection
          style={{backgroundColor: '#eee', width: '100%', maxWidth: 1500}}>
          <h2>合作方式</h2>
          <div className="content">
            <FlexItem
              style={{
                borderRadius: 10,
                padding: 15,
                backgroundColor: '#4A6089',
                boxShadow: 'rgb(204 204 204) 0.125rem 0.125rem 0px 0.125rem',
                width: '45%',
                maxWidth: 500,
              }}>
              <div className="description" style={{borderRadius: 10}}>
                <h3 style={{marginBottom: 10, color: 'white'}}>專案式合作</h3>
                <h4 style={{marginBottom: 10, color: 'white'}}>量身定做</h4>
                <p style={{color: 'lightgrey'}}>
                  適用於整體需求較為清楚的用戶。合作目標為根據實際需要提供專業協助，從架構分析、技術報告到開發協作皆為可討論範圍{' '}
                </p>
              </div>
            </FlexItem>

            <FlexItem
              style={{
                borderRadius: 10,
                padding: 15,
                backgroundColor: '#4A6089',
                boxShadow: 'rgb(204 204 204) 0.125rem 0.125rem 0px 0.125rem',
                width: '45%',
                maxWidth: 500,
              }}>
              <div className="description" style={{borderRadius: 10}}>
                <h3 style={{marginBottom: 10, color: 'white'}}>時數式合作</h3>
                <h4 style={{marginBottom: 10, color: 'white'}}>彈性支援</h4>
                <p style={{color: 'lightgrey'}}>
                  適用於整體狀況不太明確的用戶。合作目標為協助釐清問題及健康度確認，藉以提高開發速度或及早發現潛在風險並有因應原則{' '}
                </p>
              </div>
            </FlexItem>
          </div>
        </FlexItemSection>

        <FlexItemSection
          style={{backgroundColor: '#eee', width: '100%', maxWidth: 1500}}>
          <h2>方案優勢</h2>
          <div
            style={{
              paddingRight: 10,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <a
              style={{marginRight: 20, fontSize: 24}}
              href="https://medium.com/revtel-tech"
              target="_blank"
              rel="noreferrer">
              開發分享
            </a>
            <a
              style={{fontSize: 24}}
              href="https://www.revtel.tech/project/"
              target="_blank"
              rel="noreferrer">
              過往合作
            </a>
          </div>
          <div className="content">
            <FlexItem
              style={{
                borderRadius: 10,
                padding: 15,
                backgroundColor: '#EEEDDE',
                boxShadow: 'rgb(204 204 204) 0.125rem 0.125rem 0px 0.125rem',
              }}>
              <div className="description" style={{borderRadius: 10}}>
                <h3 style={{marginBottom: 10}}>經驗來自實務</h3>
                <p style={{color: '#3E3E3E'}}>
                  以過往超過六十個以上方案開發協作作為資料庫
                </p>
              </div>
            </FlexItem>

            <FlexItem
              style={{
                borderRadius: 10,
                padding: 15,
                backgroundColor: '#EEEDDE',
                boxShadow: 'rgb(204 204 204) 0.125rem 0.125rem 0px 0.125rem',
              }}>
              <div className="description" style={{borderRadius: 10}}>
                <h3 style={{marginBottom: 10}}>技術實力紮實</h3>
                <p style={{color: '#3E3E3E'}}>
                  於網頁、雲端、APP、物聯網及區塊鏈皆有成果
                </p>
              </div>
            </FlexItem>

            <FlexItem
              style={{
                borderRadius: 10,
                padding: 15,
                backgroundColor: '#EEEDDE',
                boxShadow: 'rgb(204 204 204) 0.125rem 0.125rem 0px 0.125rem',
              }}>
              <div className="description" style={{borderRadius: 10}}>
                <h3 style={{marginBottom: 10}}>自有團隊協作</h3>
                <p style={{color: '#3E3E3E'}}>
                  規劃內容如有需要可直接對接內部工程團隊開發
                </p>
              </div>
            </FlexItem>

            <FlexItem
              style={{
                borderRadius: 10,
                padding: 15,
                backgroundColor: '#EEEDDE',
                boxShadow: 'rgb(204 204 204) 0.125rem 0.125rem 0px 0.125rem',
              }}>
              <div className="description" style={{borderRadius: 10}}>
                <h3 style={{marginBottom: 10}}>領域經驗多元</h3>
                <p style={{color: '#3E3E3E'}}>
                  橫跨超過十個領域以上的顧問、開發及團隊經驗
                </p>
              </div>
            </FlexItem>
          </div>
        </FlexItemSection>

        <FlexItemSection
          style={{backgroundColor: '#eee', width: '100%', maxWidth: 1500}}>
          <h2>成功案例</h2>
          <div className="content">
            <FlexItem
              style={{
                borderRadius: 10,
                padding: 15,
                backgroundColor: '#EEEDDE',
                boxShadow: 'rgb(204 204 204) 0.125rem 0.125rem 0px 0.125rem',
              }}>
              <div className="description" style={{borderRadius: 10}}>
                <h3 style={{marginBottom: 10}}>經驗來自實務</h3>
                <p style={{color: '#3E3E3E'}}>
                  以過往超過六十個以上方案開發協作作為資料庫
                </p>
              </div>
            </FlexItem>
          </div>
        </FlexItemSection>
      </Wrapper>
    </ReactDelighters>
  );
}

function HeroBannerLogo(props) {
  return (
    <StaticImage
      src="../../images/react-icon.png"
      alt="Logo"
      placeholder="blurred"
      layout="fixed"
      width={256}
      height={256}
    />
  );
}

const Wrapper = styled.div`
  & > section {
    position: relative;
    overflow-x: hidden;
  }
  & .landing-slide-in-right {
    opacity: 0;
    transform: translateX(2000px);
    transition: 350ms;
  }
  & .landing-slide-in-right.delighter.started {
    opacity: 1;
    transform: translateX(0px);
  }
  & .landing-slide-in-left {
    opacity: 0;
    transform: translateX(-2000px);
    transition: 350ms;
  }
  & .landing-slide-in-left.delighter.started {
    opacity: 1;
    transform: translateX(0px);
  }

  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const NavBar = styled.div`
  position: fixed;
  background-color: ${(props) => props.bgColor};
  top: 0px;
  left: 0px;
  width: 100vw;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  z-index: 1;
  box-shadow: ${(props) =>
    props.hasBorder
      ? '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)'
      : 'none'};
  transition: 200ms;
`;

const HeroBannerSection = styled.section`
  padding: 80px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > h2 {
    font-size: 32px;
    color: white;
  }
  & > p {
    font-size: 18px;
    color: lightgrey;
  }
`;

const RowBannerSection = styled.section`
  padding: 10px 10px;
  & > .content {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    & > .description {
      display: flex;
      flex-direction: column;
      & > h2 {
        font-size: 32px;
        color: #888;
      }
      & > p {
        font-size: 18px;
        color: #ccc;
      }
    }
  }
`;

const FlexItemSection = styled.section`
  padding: 40px;
  & > .content {
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
`;

const FlexItem = styled.div`
  margin: 20px 20px;
  width: 20%;
  min-width: 300px;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > .description {
    display: flex;
    flex-direction: column;
    & > h3 {
      font-size: 24px;
      color: #888;
    }
    & > p {
      font-size: 18px;
      color: #ccc;
    }
  }
`;

export default Landing;
