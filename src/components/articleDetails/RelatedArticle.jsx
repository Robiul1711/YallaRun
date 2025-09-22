import React from 'react'
import { Title32 } from '../common/Title'
import { latestArticles } from '@/utils/Data'
import ArticleCard from '../cards/ArticleCard'

const RelatedArticle = () => {
  return (
    <div className=' flex flex-col gap-8 section-padding-x section-padding-y'>
        <Title32 className={`!text-customBlack !font-semibold`}>
            You might also like
        </Title32>

        <div className=" grid grid-cols-3 gap-6">
        {latestArticles?.map((item, index) => (
          <ArticleCard item={item} key={index} />
        ))}
      </div>


    </div>
  )
}

export default RelatedArticle