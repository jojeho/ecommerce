import Header from "./Header";
import {useMenu} from "../../data/header"

export default {
  title: "Header",
};

const Template = (arguments_) => <Header {...arguments_} />;

export const myHeader = Template.bind({});


myHeader.args = {    
    menus:useMenu()
};