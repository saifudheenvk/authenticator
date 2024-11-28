import { Breadcrumb, Layout } from 'antd'

const Content = () => {

  return (
    <Layout.Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Welcome to the application.</div>
    </Layout.Content>
  )
}

export default Content
