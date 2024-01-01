import  {DropDown } from "./DropDown";

import {config} from "../../../config"

function Menu({color}) {
  const menus = [
    "갤럭시의 모든 것",
    "스마트폰",
    "갤럭시북",
    "워치",
    "버즈",
    "모바일 액세서리",
    "앱 & 서비스",
    "One UI",
    "갤럭시가 특별한 이유",
    "갤럭시 캠퍼스",

  ];

  const title="Select ..";

  return (
    <div >

      <DropDown color={color}>
        <DropDown.Header title={title}></DropDown.Header>
        {menus.map((value, i) => (
          <DropDown.Item >{value}</DropDown.Item>))
        }
      </DropDown>
    </div>
  )
}


export default {
  title: "My Dropdown",
};

const Template = (arguments_) => <Menu {...arguments_} />;

export const GreenCard = Template.bind({});

GreenCard.args = {
  cssHeader : "round-md"
};