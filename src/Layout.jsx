import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div style={{backgroundColor: "lightgrey"}}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
