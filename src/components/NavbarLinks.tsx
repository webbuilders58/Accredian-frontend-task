const NavbarLinks = () => {
  return (
    <div className="flex flex-col gap-2 font-[Roboto] text-[16px]">
      <p className="text-[20px] font-medium">Accredian </p>
      <ul className="flex flex-col gap-3">
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href=''>Career</a>
        </li>
        <li>
          <a href=''>Blog</a>
        </li>
        <li>
          <a href=''>Admission Policy</a>
        </li>
        <li>
          <a href=''>Referral Policy</a>
        </li>
        <li>
          <a href=''>Privacy Policy</a>
        </li>
        <li>
          <a href=''>Terms Of Service</a>
        </li>
        <li>
          <a href=''>Master FAQs</a>
        </li>
      </ul>
    </div>
  )
}

export default NavbarLinks
