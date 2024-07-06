const TableSideBar = () => {
  const sidebarTexts = [
    { text: 'All Programs', isActive: true },
    { text: 'Product management', isActive: false },
    { text: 'Startegy & leadership', isActive: false },
    { text: 'Business management', isActive: false },
    { text: 'Fintech', isActive: false },
    { text: 'Senior management', isActive: false },
    { text: 'Data science', isActive: false },
    { text: 'Digital transformation', isActive: false },
    { text: 'Business analytics', isActive: false },
  ]
  return (
    <div className='flex flex-col   w-[20%] shadow-tablesidebar self-start'>
      {sidebarTexts.map((sidebar, i) => (
        <div key={i}>
          <button
            key={i}
            className={`flex ${sidebar.isActive ? 'bg-[#1A73E8]' : ''} px-5 rounded-t-md py-2 flex-1 w-[100%]`}
          >
            <p
              className={`uppercase text-sm font-[Source Sans 3] font-medium my-3 flex-1 text-left  ${sidebar.isActive ? 'text-white' : 'text-[#3C4852]'}`}
            >
              {sidebar.text}
            </p>
            <i
              className={`${sidebar.isActive ? 'arrow' : 'arrow-black'} right`}
            ></i>
          </button>

          <hr className='border-[rgba(0, 0, 0, 0.41)] border-[1px]' />
        </div>
      ))}
    </div>
  )
}

export default TableSideBar
