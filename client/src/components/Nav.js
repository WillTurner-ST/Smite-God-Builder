import React from 'react'

const Nav = () => {
  return (
<div className="navbar bg-base-300">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case font-extrabold text-xl">Smite God Builder</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <a className="btn btn-ghost hover:bg-green-600 hover:text-white normal-case text-xl">Create Build</a>
    </div>
  </div>
</div>
  )
}

export default Nav