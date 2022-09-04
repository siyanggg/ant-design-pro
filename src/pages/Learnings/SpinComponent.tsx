import { Button, Spin } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';

export default function SpinComponent() {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Spin spinning={true} />
      <Button
        onClick={() => {
          setLoading((prevValue) => !prevValue);
        }}
      >
        Toggle Spinning
      </Button>

      <Spin spinning={loading}>
        <p>Tag 1</p>
        <p>Tag 2</p>
        <p>Tag 3</p>
      </Spin>
    </div>
  );
}
