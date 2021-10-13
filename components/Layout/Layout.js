import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/SidebarMenu";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../styles/Home.module.css";


const Layout = ({ children }) => {
  return (
    <div>
    
      <Navbar />
      <div className={styles.contentBody}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
