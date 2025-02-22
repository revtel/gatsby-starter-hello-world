import React from 'react';
import {Alert, Button, Form, Input, message, Radio, Spin} from 'antd';
import styled from 'styled-components';
import {getOutlet, useOutlet} from 'reconnect.js';
import * as JStorageActions from 'rev.sdk.js/Actions/JStorage';
import AntdAddressSetForm from 'rev.sdk.js/Components/AntdAddressSetForm';
import ResetEmailButton from 'rev.sdk.js/Components/ResetEmailButton';

function ProfilePage(props) {
  const [user] = useOutlet('user');
  const [form] = Form.useForm();
  const [values, setValues] = React.useState({});

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async (values) => {
    try {
      await JStorageActions.updateDocument(
        'user_profile',
        {
          id: user.data.id,
        },
        values,
      );
      message.success('儲存成功！');
    } catch (ex) {
      message.error(`API error ${ex}`);
    }
  };

  return (
    <Wrapper>
      <h2>個人資訊</h2>
      {user.data ? (
        <Form
          name="control-hooks"
          form={form}
          initialValues={{
            ...user.data,
          }}
          onValuesChange={(changedValues, allValues) => {
            setValues({...allValues, ...changedValues});
          }}
          onFinish={onFinish}>
          {user.data.points !== undefined &&
            getOutlet('FeatureOptions').getValue().points && (
              <Form.Item label="我的紅利" name="points">
                <span style={{color: '#d11d26', fontWeight: 'bold'}}>
                  {user.data.points}
                </span>
                <span>點</span>
              </Form.Item>
            )}

          <Form.Item
            label="姓名"
            name="name"
            rules={[{required: true, message: '請輸入您的姓名'}]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="性別"
            name="gender"
            rules={[{required: true, message: '請選擇您的性別'}]}>
            <Radio.Group>
              <Radio value={true}>先生</Radio>
              <Radio value={false}>小姐</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="手機"
            name="phone"
            rules={[
              {
                required: true,
                pattern: /^[0-9]{10}$/,
                message: '請輸入您的手機號碼，共10碼',
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="電子信箱"
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: '請輸入您的電子信箱',
              },
            ]}>
            <Input disabled />
          </Form.Item>

          {!user.data.email && (
            <Alert
              style={{marginBottom: 10}}
              showIcon={true}
              message="尚未驗證電子信箱，請點擊下方按鈕「驗證 ｜ 更改電子信箱」進行驗證。"
              type="error"
            />
          )}

          <AntdAddressSetForm form={form} />

          {user.data.provider !== 'default' && (
            <Form.Item label="登入方式" name="provider">
              <Input disabled />
            </Form.Item>
          )}

          <Form.Item
            label="動作"
            style={{display: 'flex', alignItems: 'center'}}>
            <Button htmlType="button" style={{margin: 5}} onClick={onReset}>
              重設
            </Button>
            <Button style={{margin: 5}} htmlType="submit" type="primary">
              儲存
            </Button>
            <ResetEmailButton style={{margin: 5}} />
          </Form.Item>
        </Form>
      ) : (
        <Spin />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 20px;
`;

export default ProfilePage;
