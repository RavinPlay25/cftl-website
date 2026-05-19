import { Layout } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { pageTransition } from '../styles/motion';

const { Content } = Layout;

export const AppLayout = () => {
  const location = useLocation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Content className="page-shell">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </Content>
      <Footer />
      <WhatsAppButton />
    </Layout>
  );
};
