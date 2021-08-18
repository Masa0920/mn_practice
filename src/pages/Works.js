import React from 'react'
import { motion } from "framer-motion";
import WorksContent from '../components/WorksContent'


const Works = () => {
   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         <div className="blank"></div>
         <div className="margin10"></div>
         <div className="res border-black w600 margin-auto padding10 back-white">
            <h3>MN演習とは</h3>
            <p>春ターム、夏タームに各担当の先生が交代で行われる。全体として各教科１、2回分あった。しっかり覚えてなくて参考程度に</p>
         </div>
         <div className="blank"></div>
         <div className='flex-wrap padding10 border'>
            <WorksContent title='通信システム先生担当' date='2回' detail='演習問題'/>
            <WorksContent title='ワイヤレス伝送理論先生担当' date='2回' detail='演習問題'/>
            <WorksContent title='メディアシステム論先生担当' date='1回？' detail='演習問題'/>
            <WorksContent title='光・電波サイエンス先生担当' date='2回' detail='1回分は演習問題。もう1回は平面波の作図みたいなのプログラミング。'/>
            <WorksContent title='ネットワーク構成論先生担当'　date='1回？' detail='pythonを使ったwebサイトの表示。指示書通りにやったらできた。'/>
            <WorksContent title='サイバーコミュニケーション先生担当' date='2回' detail='1回目は自己学習。2回目htmlを使って自己紹介サイトを作った。'/>
            <WorksContent title='画像解析論先生担当' date='1回？' detail='pythonを使って平均、分散、相関係数など求めて性質を考察。プログラムはほぼ与えられていて指示書通りにやったらできた。'/>
            <WorksContent title='担当不明、伊藤先生' date='1回' detail='右から左に流れるサイレント音の作成。プログラミングでできるらしいけど何をしたらいいかまったくわからなかった。'/>
            <WorksContent title='担当不明、青木先生' date='1回' detail='pythonでのこぎり波の作成？できなかったのであんまり覚えてない。'/>
         </div>
         <div className="res border-black w600 margin-auto padding10 back-white">
            <p>光・電波サイエンスの1回、伊藤先生、青木先生の分がきつかった。pythonに慣れておくといいかも？</p>
         </div>
         <div className="blank"></div>
      </motion.div>
   )
}

export default Works
