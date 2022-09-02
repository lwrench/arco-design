import React from 'react';
import { Message, Button, ConfigProvider } from '@self';
import { IconMessage } from '@self/icon';
import useMessage from '@self/Message/useMessage';

function Demo1() {
  const [message, contextHolder] = useMessage();
  let i = 0;
  function top() {
    Message.info({
      position: 'top',
      content: `Content: ${i++}`,
    });
  }
  function bottom() {
    Message.info({
      position: 'bottom',
      content: `Content: ${i++}`,
    });
  }

  function updateNotification() {
    message.info({
      id: 'need_update',
      content: '两秒后更新...',
      duration: 2000,
    });
    setTimeout(() => {
      message.info({
        id: 'need_update',
        icon: <IconMessage style={{ color: '#e05c69' }} />,
        content: '成功更新！！',
        duration: 2000,
      });
    }, 2000);
  }

  return (
    <div>
      <Button style={{ marginRight: 10 }} onClick={() => Message.normal({ content: '哈哈哈哈啊' })}>
        Normal
      </Button>
      <ConfigProvider prefixCls="demo">
        {contextHolder}
        <div>
          <Button style={{ marginRight: 10 }} onClick={top} type="primary">
            位置: Top
          </Button>
          <Button style={{ marginRight: 10 }} onClick={bottom} type="primary">
            位置: Bottom
          </Button>
        </div>
        <div style={{ marginTop: 30 }}>
          <Button
            style={{ marginRight: 10 }}
            onClick={() => message.info({ showIcon: true, content: '哈哈哈哈啊', duration: 0 })}
            type="primary"
          >
            Info
          </Button>
          <Button
            style={{ marginRight: 10 }}
            onClick={() => message.success({ showIcon: true, content: '哈哈哈哈啊' })}
            type="primary"
            status="success"
          >
            Success
          </Button>
          <Button
            style={{ marginRight: 10 }}
            onClick={() => message.error({ showIcon: true, content: '哈哈哈哈啊' })}
            type="primary"
            status="danger"
          >
            Error
          </Button>
          <Button
            style={{ marginRight: 10 }}
            onClick={() => message.warning({ showIcon: true, content: '哈哈哈哈啊' })}
            type="primary"
            status="warning"
          >
            Wraning
          </Button>
          <Button
            style={{ marginRight: 10 }}
            onClick={() => message.normal({ content: '哈哈哈哈啊' })}
          >
            Normal
          </Button>
        </div>
        <div style={{ marginTop: 30 }}>
          <Button style={{ marginRight: 10 }} onClick={updateNotification} type="primary">
            两秒后更新通知内容
          </Button>
        </div>
        <div style={{ marginTop: 30 }}>
          <Button
            style={{ marginRight: 10 }}
            onClick={() => message.clear()}
            type="primary"
            status="danger"
          >
            清除所有messaage
          </Button>
        </div>
      </ConfigProvider>
    </div>
  );
}

export const Demo = () => <Demo1 />;

export default {
  title: 'Message',
};
