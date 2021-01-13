import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

// Types
type AccordionPropsType = {
    titleValue: string;
}
type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
}

export function AccordionUncontrolled(props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {*/}
            {/*    setCollapsed(!collapsed)*/}
            {/*}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
