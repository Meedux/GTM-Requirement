import React from 'react'

const QueueFormInput = ({
    placeholder,
    mb="1rem",
    width="w-[100%]",
    className,
}: {
    placeholder: string,
    mb?: string
    width?: string
    className?: string
}) => {
  return (
    <>
        <input
            type="text"
            className={`p-2 text-black rounded-md ${width} h-[3rem] bg-[#E7F1FE] mb-[${mb}] ${className}`}
            placeholder={`${placeholder}`}
        />
    </>
  )
}

export default QueueFormInput