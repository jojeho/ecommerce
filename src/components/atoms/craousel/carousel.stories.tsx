import SimpleCarousel  from "./SimpleCarousel";


export default {
  title: "My Carousel",
};

const Template = (arguments_) => <SimpleCarousel {...arguments_} />;

export const myApp = Template.bind({});

myApp.args = {
  
};