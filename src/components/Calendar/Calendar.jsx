import React, { useState, useRef, useEffect } from "react"

export default function Calendarik() {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState("Категорія прибутку")
    const ref = useRef(null)

    useEffect(() => {
        const onDocClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener("click", onDocClick)
        return () => document.removeEventListener("click", onDocClick)
    }, [])

    const categories = [
        "Зарплата",
        "Продаж",
        "Інвестування",
        "Відсотки",
        "Подарунок",
        "На ТурмСек",
    ]

    const handleSelect = (cat) => {
        setSelected(cat)
        setOpen(false)
    }

    return (
        <>
        <div className="income-form">
            <div className="income-date">
                <img
                    width={30}
                    src="https://cdn-icons-png.flaticon.com/128/54/54332.png"
                    alt="calendar"
                />
                <input type="date" className="date-input" />
            </div>

            <input type="text" placeholder="Опис прибутку" className="income-input" />

            {/* custom dropdown */}
            <div
                className="income-category"
                ref={ref}
                style={{ position: "relative" }}
            >
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "8px 12px",
                        borderRadius: 8,
                        border: "1px solid #e6e9ec",
                        background: "#fff",
                        cursor: "pointer",
                    }}
                >
                    {selected}
                    <span style={{ float: "right", opacity: 0.6 }}>
                        {open ? "▲" : "▼"}
                    </span>
                </button>

                {open && (
                    <ul
                        style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            right: 0,
                            marginTop: 8,
                            padding: 8,
                            listStyle: "none",
                            background: "#fff",
                            border: "1px solid rgba(0,0,0,0.06)",
                            borderRadius: 8,
                            boxShadow: "0 8px 24px rgba(12,20,32,0.08)",
                            maxHeight: 180,
                            overflow: "auto",
                            zIndex: 50,
                        }}
                    >
                        {categories.map((c) => (
                            <li
                                key={c}
                                onClick={() => handleSelect(c)}
                                style={{
                                    padding: "8px 10px",
                                    borderRadius: 6,
                                    cursor: "pointer",
                                    background:
                                        selected === c ? "rgba(255,122,45,0.06)" : "transparent",
                                }}
                                onMouseDown={(e) => e.preventDefault()}
                            >
                                {c}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
        <div className="form__group-amount">
                    <div className="income-amount">
                        <span>0,00</span>
                        <img
                            width={30}
                            src="https://cdn-icons-png.flaticon.com/128/3626/3626508.png"
                            alt="calculator"
                        />
                    </div>

                <button className="income-submit">ВВЕСТИ</button>
                <button className="income-clear">ОЧИСТИТИ</button>
            </div>
        </>
    )
}