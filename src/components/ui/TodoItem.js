import React, { useEffect, useRef } from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props) {
    const {data, changeStatus} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');
    const refElement = useRef(null);

    useEffect(() => {
        //console.log(refElement.current);
        const labelEl = refElement.current.querySelector('label');
        labelEl.setAttribute('for', data.text);
        labelEl.style.transition = 'all 83ms ease';
        labelEl.style.transform = 'scale(1.1)';
        labelEl.style['margin-left']= '20px';
        labelEl.style.width = '200px';
        const imgNode = document.createElement('img');
        imgNode.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAHhlWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAAygAwAEAAAAAQAAAAwAAAAAIIPOagAAAAlwSFlzAAALEwAACxMBAJqcGAAAAWxJREFUKBWNUs9LQkEQnt33fOJvMilFCE9RRlHUpUvdPOgh+kO6Z+fKPyjoYIfCv0AjOiRkkJXQU3I1TX3uNONDEIRoYHdnvvne7HyzT8CMBbaziHoMgOiiQoCQBnyXr0Xysr749tJQ5gwfUDsFgaCIn2dcABYIC7OvNR4kU/ES+3Pm28jUeM0lCBDBnSxGqMa0C5ekfyglaHndGCkS0FYAZiSE/fLd2pWCoRiCMA1q7MmOp1djjccxKZBUq2ovre/H7MrWYfVIcuUvGMjiw0pOdUeyqbTlA/uj2dFWu+MYLTX2+EXz3QZtMZcKADggjb3Uc9HRhjl0TK/PGvYYr30up/sjy8+x5hmQmdxpDDwjCPJmQqvrDy0EVYOTuyG7giCFBkMwZ6LKFY0kelKAeWQ4cM+paHcELNo1RGvq8vnXWCcPl7io56K3eFM7yeRpfB0SF+UPA5uZU7o43LsvniXOX4+lFKXZPuA/v8Yv7oGi75Ou5ecAAAAASUVORK5CYII=';
        refElement.current.appendChild(imgNode);
        imgNode.style.float = 'left';
        imgNode.style.display = 'block';
        imgNode.style['padding-top'] = '10px';
        imgNode.style['width'] = '20px';

        //console.log('label', labelEl);
    });

    return (
        <li className={className} ref={refElement}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange}/> {data.text}
                </label>
            </div>
        </li>
    );
}
