import { Button, Space } from 'antd';
import { history } from 'umi';

const index = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      Mandate Inquiry
      <div
        style={{
          display: 'flex',
          flexDirection: ' column',
          alignItem: 'center',
        }}
      >
        <Space size={'small'}>
          <>/mandate/corporate-details</>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/corporate-details/create',
                // state: {renderMode: 'create'}
              });
            }}
          >
            create
          </Button>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/corporate-details/details',
                // state: {renderMode: 'maker'}
                query: { cif: '1400205131' },
              });
            }}
          >
            maker
          </Button>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/corporate-details/details',
                // state: {renderMode: 'checker'}
                query: { taskId: '12345' },
              });
            }}
          >
            checker
          </Button>
        </Space>
        <br />
        {/*---------------------------------------------------------------------------------------------------------*/}
        <Space size={'small'}>
          <>/mandate/connected-persons/details</>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/connected-persons/details',
                state: { mode: 'create' },
              });
            }}
          >
            create
          </Button>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/connected-persons/details',
                state: { mode: 'maker', personCif: '100-000-xxxx-yyyy' },
              });
            }}
          >
            maker
          </Button>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/connected-persons/details',
                state: { mode: 'checker', personCif: '100-000-xxxx-yyyy' },
              });
            }}
          >
            checker
          </Button>
        </Space>
        <br />
        {/*---------------------------------------------------------------------------------------------------------*/}
        <Space size={'small'}>
          <>/mandate/br/summary</>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/br/summary',
                query: { renderMode: 'create' },
              });
            }}
          >
            create
          </Button>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/br/summary',
                query: { renderMode: 'maker' },
              });
            }}
          >
            maker
          </Button>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/br/summary',
                query: { renderMode: 'checker' },
              });
            }}
          >
            checker
          </Button>
        </Space>
        <br />
        {/*---------------------------------------------------------------------------------------------------------*/}
        <Space size={'small'}>
          <>/mandate/br/summary</>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/assc/summary',
                query: { renderMode: 'create' },
              });
            }}
          >
            create
          </Button>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/assc/summary',
                query: { renderMode: 'maker' },
              });
            }}
          >
            maker
          </Button>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/assc/summary',
                query: { renderMode: 'checker', taskId: '123' },
              });
            }}
          >
            checker
          </Button>
        </Space>
        <br />
        {/*---------------------------------------------------------------------------------------------------------*/}
        <Space size={'small'}>
          <>/mandate/indemnity</>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/indemnity',
                query: { renderMode: 'create' },
              });
            }}
          >
            create
          </Button>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/indemnity',
                query: { renderMode: 'maker' },
              });
            }}
          >
            maker
          </Button>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/indemnity',
                query: { renderMode: 'checker' },
              });
            }}
          >
            checker
          </Button>
        </Space>
        <br />
        {/*---------------------------------------------------------------------------------------------------------*/}
        <Space size={'small'}>
          <>/mandate/M&A</>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/m&a/create',
                query: { renderMode: 'create' },
              });
            }}
          >
            create
          </Button>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/m&a/details',
                query: { renderMode: 'maker' },
              });
            }}
          >
            maker
          </Button>
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/mandate/m&a/details',
                query: { renderMode: 'checker', taskId: '123' },
              });
            }}
          >
            checker
          </Button>
        </Space>
      </div>
    </div>
  );
};
