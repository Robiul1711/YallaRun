import React from 'react'
import { ArrowIcon } from '../icons/CustomIcon'
import { Link } from 'react-router-dom'

const ArrowButton = ({ name, path, className }) => {
  return (
    <Link
      to={path}
      className={`group inline-flex items-center gap-3 rounded-full bg-primaryColor px-6 py-3 text-lg font-medium text-customBlack transition-colors duration-300 hover:bg-primaryColor/90 ${className}`}
    >
      <span className="transition-colors duration-300 group-hover:text-customBlack/80">
        {name}
      </span>

      <span
        className="flex h-10 w-10 items-center justify-center rounded-full bg-customBlack text-white
                   transition-all duration-300 group-hover:rotate-45 group-hover:scale-105 group-hover:bg-customBlack/90"
      >
        <ArrowIcon />
      </span>
    </Link>
  )
}

export default ArrowButton
