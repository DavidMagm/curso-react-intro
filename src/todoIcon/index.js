import { ReactComponent as CheckSVG } from './check.svg';
import {ReactComponent as DeleteSVG} from './delete.svg';

const iconType = {
    "Check": (color) => <CheckSVG
    className="icon-svg" fill={color}
    />,
    "Delete": (color) => <DeleteSVG
    className="icon-svg" fill={color}
    />
};

function TodoIcon({type, color, onClick}) {
    return (
        <span className={`icon icon-${type}`}
        onClick={onClick}
        >
            {iconType[type](color)}
        </span>
    )
}

export { TodoIcon }