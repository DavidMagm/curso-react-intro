import { ReactComponent as CheckSVG } from 'check.svg';
import {ReactComponent as DeleteSVG} from 'delete.svg';

const iconType = {
    "Check": <CheckSVG/>,
    "Delete": <DeleteSVG/>
};

function TodoIcon({type}) {
    return (
        <span className={`icon icon${type}`}>
            {iconType[type]}
        </span>
    )
}

export {TodoIcon}