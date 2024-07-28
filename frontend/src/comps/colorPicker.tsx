import { useState } from "react"

export function ColorPicker() {
    const [color, setColor] = useState<String>('#000000')

    return <div className="color-container">
        <input type="color" value={'#000000'} onChange={(ev) => setColor(ev.target.value)} />
        <div>{color}</div>
    </div>
}