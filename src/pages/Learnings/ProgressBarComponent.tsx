import { Progress } from 'antd';
import 'antd/dist/antd.css';

export default function ProgressBarComponent() {
  return (
    <div>
      <h1>ProgressBarComponent: </h1>
      <Progress type="circle" />
      <Progress
        type="line"
        strokeColor="red"
        status="active" // activity is going on
      />
      <Progress
        type="line"
        strokeColor="red"
        status="success" // will show a tick mark
      />
      <Progress
        type="line"
        strokeColor="red"
        status="exception" // will show a cross mark
      />
    </div>
  );
}
