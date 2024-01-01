import { PropsModel } from "./types"

export function useModel(): PropsModel[] {
    const item1 = {
        img: "/home/section2/1.webp", title: "갤럭시버즈", model: "SM-R400NZWAKOO"
        , price: { label: "혜택가", value: "90000원" },
        point: { label: "혜택가", value: "90000원" }
    }

    const item2 = {
        img: "/home/section2/2.avif", title: "갤럭시버즈", model: "SM-R400NZWAKOO"
        , price: { label: "혜택가", value: "90000원" },
        point: { label: "할인가", value: "70000원" }
    }


    const item3 = {
        img: "/home/section2/3.webp", title: "갤럭시버즈", model: "SM-R400NZWAKOO"
        , price: { label: "혜택가", value: "90000원" },
        point: { label: "할인가", value: "70000원" }
    }


    const item4 = {
        img: "/home/section2/4.avif", title: "갤럭시버즈", model: "SM-R400NZWAKOO"
        , price: { label: "혜택가", value: "90000원" },
        point: { label: "할인가", value: "70000원" }
    }


    const item5 = {
        img: "/home/section2/5.avif", title: "갤럭시버즈", model: "SM-R400NZWAKOO"
        , price: { label: "혜택가", value: "90000원" },
        point: { label: "할인가", value: "70000원" }
    }


    const items = [item1,item2 ,item3,item4,item5]

    return items
}