import React from 'react'
import StudyContent from '../components/StudyContent'
import { motion } from "framer-motion";

const Study = () => {
   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}  className='w70vw margin-auto'>
         <div className="blank"></div>
         <div className='flex-wrap padding10 border'>
            <StudyContent title='ネットワーク構成論'　date='春ターム' detail='コンピュータ間のデータのやり取りについて学んだ。' h2={"毎回出る課題、小テスト2回、期末テスト"} desc={"毎週YouTubeで授業を見るオンデマンド方式の授業だった。"}/>
            <StudyContent title='メディアシステム論' date='春ターム' detail='コンピュータの仕組みについて学んだ。' h2={"期末テスト"} desc={"授業の前半はMoodleで授業動画を見て後編質疑応答をZOOMで行った。毎回質問者が決められその人たちがカメラオンで質問をした。"} />
            <StudyContent title='サイバーコミュニケーション' date='夏ターム' detail='現代のサービスについて深く考えた。' h2={"何回かの自分の意見の発言、決めたテーマについてのビデオ"} desc={"オンデマンド授業だった。discordを使い先生の挙げたテーマについて自分の意見を書いた。最後に自分の決めたテーマについての動画を6分で作った。"} />
            <StudyContent title='言語メディア理解論' date='夏ターム' detail='コンピュータがどのように言語を学習してるかを学び会話のできるコンピュータや翻訳の仕組みを理解した。' h2={"4回のレポート"} desc={"オンデマンド授業だった。指定教科書をと先生の資料を見てレポートを書いた。"} />
            <StudyContent title='通信システム' date='春、夏ターム' detail='信号の送り方（搬送波をかけて送り検波して低域フィルタに通し復調する）を学んだ。基本問題としてフーリエ変換や自己相関関数もでてきた。' h2={"毎回の小レポートの提出率で受験者を絞り期末テストで評価"} desc={"オンデマンド授業。Moodleに上がる動画をみた。"} />
            <StudyContent title='ワイヤレス伝送理論' date='春、夏ターム' detail='電気回路で流れる電流により発生する電場など、より詳しく考えた分布乗数回路について学んだ' h2={"毎回の小レポートの提出率で受験者を絞り期末テストで評価"} desc={"オンデマンド授業。資料のみがMoodleにあげられそれで学んだ。個人的に1番期末テストの勉強に苦労した。"} />
            <StudyContent title='光・電波サイエンス' date='春、夏ターム' detail='分布乗数回路から電磁波、光、波の特性を理解した。' h2={"毎回の小レポートの提出率で受験者を絞り期末テストで評価"} desc={"Moodleにあげられる動画を見た。レポートの提出期限がその日だった。"} />
            <StudyContent title='画像解析論' date='春、夏ターム' detail='画像解析におけるフーリエ変換、分散、自己相関関数、自己共分散、自己相関係数の関係を学んだ。' h2={"毎回の確認問題と期末テスト"} desc={"YouTubeに上がる動画を見た。教科書の演習問題の解答を毎回丁寧に教えていただけるので期末テスト勉強の苦労は少なかった。"} />
         </div>
      </motion.div>
   )
}

export default Study
