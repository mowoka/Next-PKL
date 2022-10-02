import React, { KeyboardEvent } from 'react'
import { SearchOutlined, DownOutlined } from '@ant-design/icons'
import Container from './Container'
import Menu from 'assets/img/menu.png'
import Search from 'assets/img/search.png'
import Cross from 'assets/img/cross.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Navbar = () => {
  const router = useRouter()
  const [dropdown, setDropdown] = React.useState(false)
  const [menu, setMenu] = React.useState(false)
  const [showSearch, setShowSearch] = React.useState(false)
  const [searchText, setSearchText] = React.useState('')

  const dropdownList = [
    { text: 'Science', href: '/posts/science' },
    { text: 'Health', href: '/posts/health' },
    { text: 'Technology', href: '/posts/technology' },
  ]

  const handleSearchAction = () => {
    router.push(`/news/${searchText}`)
  }

  const onKeyboardEvent = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event
    if (key === 'Enter') {
      router.push(`/news/${searchText}`)
    }
  }

  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center text-white">
          <div className="w-3/12 lg:hidden">
            <button onClick={() => setMenu(true)}>
              <Image src={Menu} />
            </button>
          </div>

          <div className="lg:w-2/12 w-6/12">
            <Link href="/">
              <a className=" flex items-center lg:justify-start justify-center">
                <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">
                  N
                </div>
                NewsTrending
              </a>
            </Link>
          </div>
          <div className="w-3/12 lg:hidden flex items-end justify-end">
            <button onClick={() => setShowSearch(true)}>
              <Image src={Search} />
            </button>
          </div>
          <div
            className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static top-0  h-full lg:h-auto p-10 lg:p-0 transition-all ${
              menu ? 'left-0' : '-left-full'
            }  z-30`}
          >
            <button
              onClick={() => setMenu(false)}
              className="absolute top-10 right-5 lg:hidden"
            >
              <Image src={Cross} />
            </button>
            <ul className="lg:space-x-10 flex lg:items-center flex-col lg:flex-row space-y-10 lg:space-y-0">
              <li>
                <Link href="/posts/business">
                  <a className="hover:underline">Business</a>
                </Link>
              </li>
              <li>
                <Link href="/posts/sports">
                  <a className="hover:underline">Sports</a>
                </Link>
              </li>
              <li>
                <Link href="/posts/entertainment">
                  <a className="hover:underline">Entertainment</a>
                </Link>
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="hover:underline flex items-center cursor-pointer"
                  onClick={() => setDropdown(!dropdown)}
                >
                  <p className="mr-2">Lainnya</p>
                  <DownOutlined />
                </a>
                {dropdown && (
                  <ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4 z-20">
                    {dropdownList.map((dropdown, index) => (
                      <li
                        key={index}
                        className="border-b border-white/5 last:border-0"
                      >
                        <Link href={dropdown.href}>
                          <a className="flex py-3 px-6  hover:bg-gray-700/60 ">
                            {dropdown.text}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div
            className={`lg:w-3/12 w-full absolute lg:static left-0 px-10 lg:px-0 transition-all ${
              showSearch ? 'top-10' : '-top-40'
            } z-20`}
          >
            <div className=" justify-start items-center flex relative">
              <input
                className="bg-gray-700 py-3 px-10 w-full lg:rounded-full rounded-lg outline-none"
                placeholder="Search..."
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                onKeyDown={(e) => onKeyboardEvent(e)}
              />
              <div
                onClick={handleSearchAction}
                className="absolute right-0 mr-4 cursor-pointer w-8 h-8 flex justify-center items-center"
              >
                <SearchOutlined />
              </div>
              {showSearch && (
                <button
                  onClick={() => setShowSearch(false)}
                  className="absolute lg:hidden right-0"
                >
                  <Image src={Cross} />
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
