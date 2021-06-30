import React from 'react';
import styled from 'styled-components';
import {navigate} from 'gatsby';
import {Tabs, Button, Select, Checkbox} from 'antd';
import {useOutlet} from 'reconnect.js';
import qs from 'query-string';
import RichTextPreview from '../../Components/RichTextPreview';
import BreadcrumbBar from '../../Templates/ProductList/BreadcrumbBar';
import {mapLineBreak} from '../../Utils/TextUtil';

function ProductDetail(props) {
  const prefixPath = '/product';
  const [activeSummaryTab, setActiveSummaryTab] = React.useState('intro');
  const [product, setProduct] = React.useState(null);
  const [quantity, setQuantity] = React.useState(1);
  const [article, setArticle] = React.useState(null);
  const [imgIdx, setImgIdx] = React.useState(0);
  const [actions] = useOutlet('actions');
  const [dimension] = useOutlet('dimension');
  const params = qs.parse(props.location.search);
  const {id} = params;

  React.useEffect(() => {
    async function fetchData() {
      try {
        actions.setLoading(true);
        const resp = await actions.clientFetchProductById(id);
        setProduct(resp);
        setQuantity(1);
        setImgIdx(0);
        actions.setLoading(false);

        // don't show global spinner for article fetching
        if (resp.article) {
          setArticle(await actions.clientFetchArticleById(resp.article));
        }
      } catch (ex) {
        console.warn(ex);
      } finally {
        actions.setLoading(false);
      }
    }

    fetchData();
  }, [actions, id]);

  function renderCustomSection(sectionId, data) {
    return actions.renderCustomSection({
      route: prefixPath,
      sectionId,
      params,
      data,
    });
  }

  async function addToCart() {
    try {
      actions.setLoading(true);
      await actions.addItemToCart({
        product,
        config: {
          quantity,
        },
      });
    } finally {
      actions.setLoading(false);
    }
  }

  if (!product) {
    return null;
  }

  let gallerySize = 450;
  if (dimension.innerWidth) {
    if (dimension.innerWidth < 450 + 20 * 2) {
      gallerySize = dimension.innerWidth - 20 * 2;
    }
  }

  return (
    <Wrapper>
      {renderCustomSection('A', {product})}

      <div className="content">
        {renderCustomSection('B', {product})}

        {product.labels && product.labels[0] && (
          <div style={{marginTop: 15}}>
            <BreadcrumbBar
              cat={product.labels[0]}
              updateCat={(nextCat) => {
                navigate(`/products?cat=${nextCat}`);
              }}
            />
          </div>
        )}

        <TopSection>
          <Gallery dimension={dimension} size={gallerySize}>
            {product.images && product.images[imgIdx] && (
              <img src={product.images[imgIdx]} alt="product" />
            )}

            {product.images && (
              <MiniImageList>
                {product.images.map((image, idx) => (
                  <MiniImageItem
                    src={image}
                    alt="mini"
                    key={idx}
                    selected={idx === imgIdx}
                    onClick={() => setImgIdx(idx)}
                  />
                ))}
              </MiniImageList>
            )}
          </Gallery>

          <div style={{flexBasis: 20}} />

          <Summary>
            {renderCustomSection('C', {product})}
            <h3>{(product.labels && product.labels[0]) || ''}</h3>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            {renderCustomSection('D', {product})}
            <Tabs activeKey={activeSummaryTab} onChange={setActiveSummaryTab}>
              <Tabs.TabPane tab="介紹" key="intro">
                <div
                  dangerouslySetInnerHTML={{
                    __html: mapLineBreak(product.intro),
                  }}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab="規格" key="spec">
                <div
                  dangerouslySetInnerHTML={{
                    __html: mapLineBreak(product.spec),
                  }}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab="備註" key="remark">
                <div
                  dangerouslySetInnerHTML={{
                    __html: mapLineBreak(product.remark),
                  }}
                />
              </Tabs.TabPane>
            </Tabs>

            <LineSeperator />

            <InputField>
              <label>數量</label>
              <Select
                defaultValue={quantity}
                value={quantity}
                style={{width: 120}}
                onChange={setQuantity}>
                <Select.Option value={1}>1</Select.Option>
                <Select.Option value={2}>2</Select.Option>
                <Select.Option value={3}>3</Select.Option>
                <Select.Option value={4}>4</Select.Option>
                <Select.Option value={5}>5</Select.Option>
              </Select>
            </InputField>

            <InputField>
              <label>顏色</label>
              <Select
                defaultValue="white"
                style={{width: 120}}
                onChange={console.log}>
                <Select.Option value="white">白色</Select.Option>
                <Select.Option value="black">黑色</Select.Option>
                <Select.Option value="red">紅色</Select.Option>
              </Select>
            </InputField>

            <InputField>
              <Checkbox checked={false} onChange={console.log}>
                特殊選項
              </Checkbox>
            </InputField>

            <InputField>
              <Checkbox checked={false} onChange={console.log}>
                特殊選項
              </Checkbox>
            </InputField>

            <InputField>
              <Checkbox checked={true} onChange={console.log}>
                特殊選項
              </Checkbox>
            </InputField>

            <LineSeperator />

            <InputField style={{justifyContent: 'flex-end'}}>
              <h2>${product.price}</h2>
            </InputField>

            <InputField style={{justifyContent: 'flex-end'}}>
              <Button size="large" type="primary" onClick={addToCart}>
                加入購物車
              </Button>
            </InputField>
          </Summary>
        </TopSection>

        {renderCustomSection('E', {product})}

        {article && (
          <ProductArticle>
            <RichTextPreview content={article.content} />
          </ProductArticle>
        )}

        {renderCustomSection('F', {product})}
      </div>

      {renderCustomSection('G', {product})}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: var(--topNavBarHeight);

  & > .content {
    max-width: var(--contentMaxWith);
    margin: 0 auto;
    padding: var(--basePadding);
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0;
`;

const Gallery = styled.div`
  width: ${(props) => props.size}px;
  min-height: ${(props) => props.size}px;
  margin-bottom: 20px;
  ${(props) =>
    props.dimension?.innerWidth > 1000 &&
    `
  position: sticky;
  top: calc(20px + var(--topNavBarHeight));
  `}

  & > img:first-child {
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    object-fit: contain;
  }
`;

const Summary = styled.div`
  & h2 {
    font-size: 32px;
  }

  & h3 {
    font-size: 21px;
  }

  & p {
    font-size: 17px;
  }

  flex: 1;
  flex-basis: 450px;
  min-height: 700px;
`;

const LineSeperator = styled.section`
  border-top: 1px solid #eee;
  margin: 20px 0;
`;

const InputField = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  & > label {
    margin-right: 10px;
  }
`;

const ProductArticle = styled.div`
  min-height: 700px;
`;

const MiniImageList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MiniImageItem = styled.img`
  width: 64px;
  height: 64px;
  margin: 10px;
  border: 2px solid ${(props) => (props.selected ? '#ccc' : 'transparent')};
  border-radius: 4px;
  object-fit: contain;
  cursor: pointer;
`;

export default ProductDetail;