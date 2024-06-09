import React from 'react'

const QueueFormInput = ({
    placeholder,
    mb="1rem",
    width="w-[100%]",
    className,
    value,
    setValue
}: {
    placeholder: string,
    mb?: string
    width?: string
    className?: string
    value?: string
    setValue?: any
}) => {
  return (
    <>
        <input
            type="text"
            className={`input p-2 text-black rounded-md ${width} h-[3rem] bg-[#E7F1FE] mb-[${mb}] ${className}`}
            placeholder={`${placeholder}`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    </>
  )
}

export default QueueFormInput