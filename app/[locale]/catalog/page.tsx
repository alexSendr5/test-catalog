"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import { makeDataArray, getImage } from '@/src/app/catalog-api/catalog-actions'
import  Style  from '../../../src/shared/components/ui/style/catalog-ui.module.css'
import Card from '@/src/screens/catalog/view'


type catalogData = {
    city: string,
    image?: string
}

const Catalog = () => {

    const [content, setContent] = useState<catalogData[] | null>(null)

    useEffect(() => {
      async function getData() {
        const data = await getImage(makeDataArray())
        setContent(data)
      }
    getData()
    }, [])




  return (
    <div className={Style.container}>
        {content ? content.map((index, num) => {
            if(index.image){
                return(
                  <Card key={num} city={index.city} image={index.image}/>
            )

            }
        }) : ''}

    </div>

  )
}

export default Catalog