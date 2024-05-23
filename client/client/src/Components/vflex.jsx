import React from 'react';
import { Flex, Radio } from 'antd';
const baseStyle = {
  width: '25%',
  height: 34,
};
const App = () => {
  const [value, setValue] = React.useState('horizontal');
  return (
    <Flex gap="middle" vertical>
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
      </Radio.Group>
      <Flex vertical={value === 'vertical'}>
        {Array.from({
          length: 4,
        }).map((_, i) => (
          <div
            key={i}
            style={{
              ...baseStyle,
            }}
          />
        ))}
      </Flex>
    </Flex>
  );
};
export default App;