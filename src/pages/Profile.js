import React from 'react'
import { motion } from "framer-motion";

const Profile = () => {
   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w90vh margin-auto">
         <div className="blank"></div>
         <div className="margin10"></div>
         <div className="res border-black w600 margin-auto padding10 back-white">
            <h3>制作者</h3>
            <p>北海道大学　情報エレクトロニクス学科　メディアネットワークコース 3年</p>
            <p>林雅茂</p>
         </div>
         <div className="blank"></div>
         <div className="res border-black w600 margin-auto padding10 back-white">
            <h3>3年前期授業まとめ</h3>
            <div className="left padding10">
               <p>授業科目と僕自身学んだことについてまとめました。</p>
            </div>
         </div>
         <div className="blank"></div>
      </motion.div>
   )
}

export default Profile
