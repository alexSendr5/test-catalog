'use client'

import { useState } from 'react'
import Style from '../../../src/shared/components/ui/style/catalog-ui.module.css'
import Link from 'next/link'
import Chat from '../../../src/app/icons/ic_chat.svg'
import Wrapper from '../../../src/app/icons/ic_wrapper.svg'
import { useTranslations } from 'next-intl'

interface CatalogData {
  city: string
  image: string
}

const Card = ({ city, image }: CatalogData) => {
  const [menu, setMenu] = useState(false)

  return (
    <div className={Style.container_card}>
      <div
        className={`${Style.container_card_photo} bg-cover bg-center bg-no-repeat flex items-end`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='flex flex-row items-center'>
          <Chat />
          <p>
            <Link href='/'>Forum/Chat</Link>
          </p>
        </div>
      </div>

      <div className={Style.card_bottom}>
        <div className={menu ? Style.container_card_info_opened : Style.container_card_info}>
          <div className='flex flex-row justify-between items-center'>
            <p className={Style.container_card_info__title}>{city}</p>
            <div
              onClick={() => setMenu(!menu)}
              className={`${Style.mobile_menu} ${menu ? Style.rotate : ''}`}
            >
              <Wrapper />
            </div>
          </div>

          <div className={Style.pc_display}>
            <Link href='/' className={Style.container_card_info__options}>Market</Link>
            <Link href='/' className={Style.container_card_info__options}>Channels</Link>
          </div>
        </div>

        {menu && (
          <div className={Style.mobile_content}>
            <Link href='/' className={Style.container_card_info__options}>Forum/chat</Link>
            <Link href='/' className={Style.container_card_info__options}>Market</Link>
            <Link href='/' className={Style.container_card_info__options}>Channels</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
