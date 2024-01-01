'use client'
// import "./Test3.module.css";
import { basic } from "./styles"
import { Children } from 'react';
import * as React from "react";
import {
    useFloating,
    useClick,
    useDismiss,
    useRole,
    useListNavigation,
    useInteractions,
    FloatingFocusManager,
    useTypeahead,
    offset,
    flip,
    size,
    autoUpdate,
    FloatingPortal,
    useHover,
    safePolygon
} from "@floating-ui/react";

import { config } from "@/config";

import { DropItem } from "./DropItem"
import { DropHeader } from "./DropHeader"
import styles from "./dropDown.module.css"
import clsx from "clsx";
// interface Props {
//     isOpen: boolean;
//     title: string;
//     buttonLabel: string;
//     onClickButton: (e: MouseEvent) => void;
//     isChecked?: boolean;
//     checkBoxLabel?: string;
//     onClickCheckBox? : (e: MouseEvent) => void;
//     descriptionList?: string[]
// }


//{ menus, color, swidth, selected_color, fsize }: ListBoxProps
function DropDownMain({ children }) {

    // const selected_color="red"
    //const color=config.color.(sColor)
    // alert(color) 

    const [isOpen, setIsOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

    const { refs, floatingStyles, context } = useFloating({

        placement: "bottom-start",
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
            flip({ padding: 0 }),
            size({
                apply({ rects, elements, availableHeight }) {
                    Object.assign(elements.floating.style, {
                        maxHeight: `${availableHeight}px`,
                        minWidth: `${rects.reference.width}px`
                    });
                },
                padding: 0
            })
        ]
    });

    // setIsOpen(true)

    const listRef = React.useRef<Array<HTMLElement | null>>([]);
    // const listContentRef = React.useRef(menus);
    const isTypingRef = React.useRef(false);

    const click = useClick(context, { event: "mousedown" });
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: "listbox" });


    const listNav = useListNavigation(context, {
        listRef,
        activeIndex,
        selectedIndex,
        onNavigate: setActiveIndex,
        // This is a large list, allow looping.
        loop: true
    });
    const typeahead = useTypeahead(context, {
        // listRef :listContentRef,
        listRef,
        activeIndex,
        selectedIndex,
        onMatch: isOpen ? setActiveIndex : setSelectedIndex,
        onTypingChange(isTyping) {
            isTypingRef.current = isTyping;
        }
    });


    const hover = useHover(context, { handleClose: safePolygon() });

    const {
        getReferenceProps,
        getFloatingProps,
        getItemProps
    } = useInteractions([dismiss, role, listNav, typeahead, click]);

    // console.log(floatingStyles)

    const handleSelect = (index: number) => {
        setSelectedIndex(index);
        setIsOpen(false);
    };

    const setColor = (i) => {
        return activeIndex == i ? "border-gray-500 rounded-0 hover:border-gray-100" : "bg-white"
    }

    const DType = (<DropItem />).type;
    const HType = (<DropHeader />).type;
    const ItemChild = Children.toArray(children).filter((e) => (e.type == DType))
    const HeaderChild = Children.toArray(children).filter((e) => (e.type == HType))


    const selectedItemLabel =
        selectedIndex !== null ? ItemChild[selectedIndex] : undefined;

    const cssSelected = styles.selected;
    const cssUnselected = styles.unselected;
    return (

        <>

            <div
                tabIndex={0}
                ref={refs.setReference}
                aria-labelledby="select-label"
                aria-autocomplete="none"
                className={styles.header}


                {...getReferenceProps()}
            // className="bg-red-100 border-4  rounded-md mx-2 w-24" 
            >
                {selectedItemLabel || HeaderChild}
            </div>
            {isOpen && (
                <FloatingPortal>
                    <FloatingFocusManager context={context} modal={false}>
                        <div
                            key="1"
                            ref={refs.setFloating}
                            style={{
                                ...floatingStyles,
                            }}

                            className={styles.open_header}

                        >
                            {
                                Children.map(ItemChild, (child, i) => (
                                    <div key={i}
                                        ref={(node) => {

                                            listRef.current[i] = node;
                                        }}


                                        role="option"
                                        tabIndex={i === activeIndex ? 0 : -1}
                                        aria-selected={i === selectedIndex && i === activeIndex}
                                        className={i === activeIndex ? cssSelected : cssUnselected}
                                        //  className={setColor(i)}



                                        // ...props 

                                        {...getItemProps({
                                            // Handle pointer select.
                                            onClick() {
                                                handleSelect(i);
                                            },
                                            // Handle keyboard select.floatingStyles
                                            onKeyDown(event) {
                                                if (event.key === "Enter") {
                                                    event.preventDefault();
                                                    handleSelect(i);
                                                }

                                                if (event.key === " " && !isTypingRef.current) {
                                                    event.preventDefault();
                                                    handleSelect(i);
                                                }
                                            }
                                        })}
                                    >
                                        {/* <div style={{  display: "flex", flexDirection: 'row', justifyContent: "space-between" }}> */}
                                        {child}
                                        {/* <span>
                                                {i === selectedIndex ? " ✓" : ""}
                                            </span> */}
                                        {/* </div> */}
                                    </div>
                                ))
                            }

                        </div>
                        <div>

                        </div>



                    </FloatingFocusManager>
                </FloatingPortal>
            )}
        </>
    );
}




//  const DropDownComp=(props: ListBoxProps) {
//     return (
//         <>

//         </>
//     )

// }

// export const DropDown =  {
//     DropDownMain:DropDownMain,
//      Item:DropItem
//   };
const DropDown = Object.assign(DropDownMain, {
    Item: DropItem,
    Header: DropHeader
});

export default DropDown;