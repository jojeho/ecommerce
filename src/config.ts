

// const fontSize= new Map<string, string>();
// fontSize.set('xs', "0.75rem")
// fontSize.set('sm', "0.875rem")
// fontSize.set('base', "1rem")
// fontSize.set('lg', "1.125rem")
// fontSize.set('xl', "1.25rem")
// fontSize.set('2xl', "1.5rem")
// fontSize.set('3xl', "1.875rem")
// fontSize.set('4xl', "2.25rem")
// fontSize.set('5xl', "3rem")
// fontSize.set('6xl', "3.75rem")

// const color = new Map<string, string>();
// color.set('primary', "#006ff2")
// color.set('secondary', "#e1edf5")
// color.set('tertiary', "#e1edf5")
// // color.set('tertiary', "transparent")
// color.set('quinary', "#e1edf5")
// color.set('senary', "#e1edf5")
// // /color.set('lg', "2rem")

// const selected_color = new Map<string, string>();
// selected_color.set('primary', "#f5f5f5")
// selected_color.set('secondary', "#f2f5f7")
// // /color.set('lg', "2rem")


// const max_size = new Map<string, string>();
// max_size.set('sm', "0.8rem")
// max_size.set('md', "1.2rem")
// max_size.set('lg', "2rem")



interface FontSize
{
    xs :string , 
    sm : string ,
    base:string,
    lg:string,
    xl:string,
    xl2:string,
    xl3:string,
    xl4:string,
    xl5:string,
    xl6:string,
    // h1 :string,
    // h2:string,
    // h3:string,
    // h4:string,
}

const fontSize :FontSize=
{
    xs:"0.75",
    sm:"0.875",
    base:"1rem",
    lg:"1.125rem",
    xl:"1.25rem",
    xl2:"1.5rem",
    xl3:"1.875rem",
    xl4:"2.25rem",
    xl5:"3rem",
    xl6:"3.75rem"
}

interface ColorType
{
    primary:string ,
    secondry:string,
    tertiary:string,
    quinary:string,
    senary:string
}

const colorType :ColorType=
{
    primary:"#006ff2",
    secondry:"#e1edf5",
    tertiary:"#e1edf5",
    quinary:"#e1edf5",
    senary:"#e1edf5",
}

interface MaxSize
{
    sm :string ,
    md :string,
    lg :string ,
}

const maxSize:MaxSize=
{
    sm:"0.8rem",
    md:"1.2rem",
    lg:"2rem"
}

interface FontWeight
{
    sm : string ,
    base:string,
    lg:string,

}


const fontWeight :FontWeight=
{
    small:"100",
    normal:"400",
    bold:"700",
    big:"900",
    big2:"1200",
}

interface FontFamily
{
    base:string ,
}

const fontFamily :FontFamily=
{
    base:`'Samsung Sharp Sans', 'SamsungOneKorean', '돋움', sans-serif` ,

}


export const config ={fontSize:fontSize,colorType :colorType
                     ,maxSize :maxSize
                     ,fontWeight:fontWeight
                     ,fontFamily:fontFamily
                    }
                 