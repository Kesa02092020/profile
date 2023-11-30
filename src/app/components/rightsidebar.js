import React from 'react'

const rightsidebar = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:ramachandran.c88@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-widest text-textGreen">
          React@profile.me
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  )
}

export default rightsidebar