import React from 'react'
import WorksContent from '../components/WorksContent'
import { motion } from "framer-motion";

const Hobby = () => {
   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         <div className="blank"></div>
         <div className="margin10"></div>
         <div className="res border-black w600 margin-auto padding10 back-white">
            <h3>MN実験とは</h3>
            <p>大きく分けて実験基礎（C言語演習）、実験1B（器具を使った実験）、実験1A（プログラミングを用いた演習）に分かれる</p>
         </div>
         <div className="blank"></div>
         <div className='flex-wrap padding10 border'>
            <WorksContent title='実験基礎' detail='6回分くらい。2年のプログラミングの授業みたいなの（ポインタとか）。全課題の正しいコードを書く必要があってきつかった。TAさんに聞きまくりましょう。'/>
            <WorksContent title='実験1A' detail='4回ありそのうちの3回は実験方法とか含めたレポートを書く必要があった。データ膨大でエクセルを用いた考察が必須だった。グラフの作り方とか手間取った。'/>
            <WorksContent title='実験1B' detail='4回分。3回分はpythonを用いた演習だったが指示書やTAさんのおかげで授業内にレポート完成までできた。1回分はこのサイト制作。'/>
         </div>
         <div className="res border-black w600 margin-auto padding10 back-white">
            <p>pythonはコードの書き方がC言語と異なるところが多かった。そのためfor文やif文など簡単なところは慣れておくとよかったと思った。</p>
         </div>
         <div className="blank"></div>
      </motion.div>
   )
}

export default Hobby
