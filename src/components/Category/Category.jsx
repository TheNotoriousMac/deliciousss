import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiFrenchFries } from "react-icons/gi";
import { List, SLink } from "./Category.styles";
// import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={'/cuisine/French'}>
        <GiFrenchFries />
        <h4>French</h4>
      </SLink>
    </List>
  );
};

export default Category;
