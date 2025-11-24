import Product from "./components/Product/Product";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return { 
    <>
  // <UserProfile name = "Yehor" age = "23" email = "yehor@gmail.com"/>
  <table>
    <tr>
      <th>title</th>
      <th>price</th>
      <th>quantity</th>
    </tr>
    <Product title ="milk" price={32} quantity{1}/>
       </table>
    </>
  };
}

export default App;
