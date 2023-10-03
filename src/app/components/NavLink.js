function NavLink({link, desc}) {
  return (
    <li className="p-2 px-6 md:flex md:items-end md:p-0 md:ps-3 text-veryDarkBlue hover:text-softRed transition-all">
      <a href={link}>{desc}</a>
    </li>
  )
}

export default NavLink;