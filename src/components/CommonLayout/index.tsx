import { FC, ReactNode } from "react";
import { Layout } from "antd";
const { Content } = Layout;

type Props = {
  children: ReactNode;
};

const CommonLayout: FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Content className="layout-content">{children}</Content>
    </Layout>
  );
};

export default CommonLayout;
