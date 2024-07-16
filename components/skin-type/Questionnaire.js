import React from "react";
import questions from "../../utils/questions";
import { useState, useEffect } from "react";

const renderQuestions = (questions, sectionIndex, handleAnswerChange) => {
  return questions.map((item, index) => (
    <div key={index} className="mb-8">
      <h3 className="font-bold text-black">{item.question}</h3>
      <ul className="text-black">
        {item.answers.map((answer, answerIndex) => (
          <li key={answerIndex}>
            <label>
              <input
                type="radio"
                name={`question-${sectionIndex}-${index}`}
                value={item.scores[answerIndex]}
                className="mr-2 mt-2 radio radio-xs checked:bg-[#876445]"
                onChange={() =>
                  handleAnswerChange(
                    sectionIndex,
                    index,
                    item.scores[answerIndex]
                  )
                }
              />
              {answer}
            </label>
          </li>
        ))}
      </ul>
    </div>
  ));
};

const Questionnaire = () => {
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    // Load saved answers from session storage when the component mounts
    const savedAnswers = sessionStorage.getItem("questionnaireAnswers");
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const handleAnswerChange = (sectionIndex, questionIndex, score) => {
    const newAnswers = {
      ...answers,
      ["${sectionIndex}-${questionIndex}"]: score,
    };
    setAnswers(newAnswers);
    sessionStorage.setItem("questionnaireAnswers", JSON.stringify(newAnswers));
  };

  return (
    <div role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs"
        role="tab"
        className="tab tab-label"
        aria-label="OILY vs DRY"
        style={{ width: "255px" }}
        defaultChecked
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <p className="text-black font-bold mb-8">
          Bagian ini mengukur produksi minyak kulit dan kelembapan. Studi
          menunjukkan bahwa anggapan seseorang tentang apakah kulit mereka
          berminyak atau kering sering tidak akurat. Jangan biarkan prasangka
          Anda atau pendapat orang lain tentang kulit Anda memengaruhi jawaban
          Anda.
        </p>
        {renderQuestions(questions.section1, 1, handleAnswerChange)}
      </div>

      <input
        type="radio"
        name="my_tabs"
        role="tab"
        className="tab"
        aria-label="SENSITIVE vs RESISTANT"
        style={{ width: "255px" }}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <p className="text-black font-bold mb-8">
          Bagian ini mengukur kecenderungan kulit Anda untuk mengalami jerawat,
          kemerahan, kemerahan, dan gatal, semua tanda-tanda kulit sensitif.
        </p>
        {renderQuestions(questions.section2, 2, handleAnswerChange)}
      </div>

      <input
        type="radio"
        name="my_tabs"
        role="tab"
        className="tab"
        aria-label="PIGMENTED vs NON-PIGMENTED"
        style={{ width: "255px" }}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <p className="text-black font-bold mb-8">
          Bagian ini mengukur kecenderungan kulit Anda untuk membentuk melanin,
          pigmen kulit yang menghasilkan warna kulit yang lebih gelap serta
          bintik-bintik gelap, tahi lalat, dan daerah gelap setelah trauma.
          Melanin juga membantu Anda berkulit cokelat daripada terbakar.
        </p>
        {renderQuestions(questions.section3, 3, handleAnswerChange)}
      </div>

      <input
        type="radio"
        name="my_tabs"
        role="tab"
        className="tab"
        aria-label="WRINKLED vs TIGHT"
        style={{ width: "243px" }}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <p className="text-black font-bold mb-8">
          Bagian ini mengukur kecenderungan Anda terhadap kerutan, serta
          seberapa keriput Anda saat ini. Beberapa pasien saya mengaku bahwa
          mereka berbuat curang pada bagian ini hingga terlihat seperti huruf T
          - setelah saya memergoki mereka melakukannya. Jangan lakukan itu! Anda
          hanya menipu diri sendiri dengan menggunakan terapi pencegahan yang
          dapat mencegah keriput. Mengubah kebiasaan Anda sekarang dapat
          mengubah skor Anda di masa depan dari W ke T. Jadi jujurlah dan
          dapatkan perawatan yang tepat jika Anda membutuhkannya.
        </p>
        {renderQuestions(questions.section4, 4, handleAnswerChange)}
      </div>
    </div>
  );
};

export default Questionnaire;

// import React from "react";
// import questions from "../../utils/questions";
// import { useState } from "react";

// const renderQuestions = (questions, sectionIndex) => {
//   return questions.map((item, index) => (
//     <div key={index} className="mb-8">
//       <h3 className="font-bold text-black">{item.question}</h3>
//       <ul className="text-black">
//         {item.answers.map((answer, answerIndex) => (
//           <li key={answerIndex}>
//             <label>
//               <input
//                 type="radio"
//                 name={`question-${sectionIndex}-${index}`}
//                 value={item.scores[answerIndex]}
//                 className="mr-2 mt-2 radio radio-xs checked:bg-[#876445]"
//               />
//               {answer}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   ));
// };

// const Questionnaire = (index) => {
//   const [activeTabIndex, setActiveTabIndex] = useState(0);

//   const handleTabChange = (index) => {
//     setActiveTabIndex(index);
//   };

//   return (
//     <div role="tablist" className="tabs tabs-lifted">
//       <input
//         type="radio"
//         name="my_tabs"
//         role="tab"
//         // className="tab"
//         aria-label="OILY vs DRY"
//         style={{ width: "255px", textAlign: "center" }}
//         key={index}
//         className={`tab tab-label cursor-pointer ${
//           index === activeTabIndex ? "text-primary" : "text-black"
//         }`}
//         checked={index === activeTabIndex}
//         onChange={() => handleTabChange(index)}
//       />
//       <div
//         role="tabpanel"
//         className="tab-content bg-base-100 border-base-300 rounded-box p-6"
//       >
//         <p className="text-black font-bold mb-8">
//           Bagian ini mengukur produksi minyak kulit dan kelembapan. Studi
//           menunjukkan bahwa anggapan seseorang tentang apakah kulit mereka
//           berminyak atau kering sering tidak akurat. Jangan biarkan prasangka
//           Anda atau pendapat orang lain tentang kulit Anda memengaruhi jawaban
//           Anda.
//         </p>
//         {renderQuestions(questions.section1, 0)}
//       </div>

//       <input
//         type="radio"
//         name="my_tabs"
//         role="tab"
//         // className="tab"
//         aria-label="SENSITIVE vs RESISTANT"
//         style={{ width: "255px" }}
//         key={index}
//         className={`tab tab-label cursor-pointer ${
//           index === activeTabIndex ? "text-primary" : "text-black"
//         }`}
//         checked={index === activeTabIndex}
//         onChange={() => handleTabChange(index)}
//       />
//       <div
//         role="tabpanel"
//         className="tab-content bg-base-100 border-base-300 rounded-box p-6"
//       >
//         <p className="text-black font-bold mb-8">
//           Bagian ini mengukur kecenderungan kulit Anda untuk mengalami jerawat,
//           kemerahan, kemerahan, dan gatal, semua tanda-tanda kulit sensitif.
//         </p>
//         {renderQuestions(questions.section2, 1)}
//       </div>

//       <input
//         type="radio"
//         name="my_tabs"
//         role="tab"
//         // className="tab"
//         aria-label="PIGMENTED vs NON-PIGMENTED"
//         style={{ width: "255px" }}
//         key={index}
//         className={`tab tab-label cursor-pointer ${
//           index === activeTabIndex ? "text-primary" : "text-black"
//         }`}
//         checked={index === activeTabIndex}
//         onChange={() => handleTabChange(index)}
//       />
//       <div
//         role="tabpanel"
//         className="tab-content bg-base-100 border-base-300 rounded-box p-6"
//       >
//         <p className="text-black font-bold mb-8">
//           Bagian ini mengukur kecenderungan kulit Anda untuk membentuk melanin,
//           pigmen kulit yang menghasilkan warna kulit yang lebih gelap serta
//           bintik-bintik gelap, tahi lalat, dan daerah gelap setelah trauma.
//           Melanin juga membantu Anda berkulit cokelat daripada terbakar.
//         </p>
//         {renderQuestions(questions.section3, 2)}
//       </div>

//       <input
//         type="radio"
//         name="my_tabs"
//         role="tab"
//         // className="tab"
//         aria-label="WRINKLED vs TIGHT"
//         style={{ width: "243px" }}
//         key={index}
//         className={`tab tab-label cursor-pointer ${
//           index === activeTabIndex ? "text-primary" : "text-black"
//         }`}
//         checked={index === activeTabIndex}
//         onChange={() => handleTabChange(index)}
//       />
//       <div
//         role="tabpanel"
//         className="tab-content bg-base-100 border-base-300 rounded-box p-6"
//       >
//         <p className="text-black font-bold mb-8">
//           Bagian ini mengukur kecenderungan Anda terhadap kerutan, serta
//           seberapa keriput Anda saat ini. Beberapa pasien saya mengaku bahwa
//           mereka berbuat curang pada bagian ini hingga terlihat seperti huruf T
//           - setelah saya memergoki mereka melakukannya. Jangan lakukan itu! Anda
//           hanya menipu diri sendiri dengan menggunakan terapi pencegahan yang
//           dapat mencegah keriput. Mengubah kebiasaan Anda sekarang dapat
//           mengubah skor Anda di masa depan dari W ke T. Jadi jujurlah dan
//           dapatkan perawatan yang tepat jika Anda membutuhkannya.
//         </p>
//         {renderQuestions(questions.section4, 3)}
//       </div>
//     </div>
//   );
// };

// export default Questionnaire;

// import React, { useState } from "react";
// import questions from "../../utils/questions";

// const renderQuestions = (questions, sectionIndex) => {
//   return questions.map((item, index) => (
//     <div key={index} className="mb-8">
//       <h3 className="font-bold text-black">{item.question}</h3>
//       <ul className="text-black">
//         {item.answers.map((answer, answerIndex) => (
//           <li key={answerIndex}>
//             <label>
//               <input
//                 type="radio"
//                 name={`question-${sectionIndex}-${index}`}
//                 value={item.scores[answerIndex]}
//                 className="mr-2 mt-2 radio radio-xs checked:bg-[#876445]"
//               />
//               {answer}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   ));
// };

// const Questionnaire = () => {
//   const [activeTabIndex, setActiveTabIndex] = useState(0);

//   const handleTabChange = (index) => {
//     setActiveTabIndex(index);
//   };

//   const tabs = [
//     "OILY vs DRY",
//     "SENSITIVE vs RESISTANT",
//     "PIGMENTED vs NON-PIGMENTED",
//     "WRINKLED vs TIGHT",
//   ];

//   const content = [
//     <div key="section1">
//       <p className="text-black font-bold mb-8">
//         Bagian ini mengukur produksi minyak kulit dan kelembapan. Studi
//         menunjukkan bahwa anggapan seseorang tentang apakah kulit mereka
//         berminyak atau kering sering tidak akurat. Jangan biarkan prasangka Anda
//         atau pendapat orang lain tentang kulit Anda memengaruhi jawaban Anda.
//       </p>
//       {renderQuestions(questions.section1, 0)}
//     </div>,
//     <div key="section2">
//       <p className="text-black font-bold mb-8">
//         Bagian ini mengukur kecenderungan kulit Anda untuk mengalami jerawat,
//         kemerahan, kemerahan, dan gatal, semua tanda-tanda kulit sensitif.
//       </p>
//       {renderQuestions(questions.section2, 1)}
//     </div>,
//     <div key="section3">
//       <p className="text-black font-bold mb-8">
//         Bagian ini mengukur kecenderungan kulit Anda untuk membentuk melanin,
//         pigmen kulit yang menghasilkan warna kulit yang lebih gelap serta
//         bintik-bintik gelap, tahi lalat, dan daerah gelap setelah trauma.
//         Melanin juga membantu Anda berkulit cokelat daripada terbakar.
//       </p>
//       {renderQuestions(questions.section3, 2)}
//     </div>,
//     <div key="section4">
//       <p className="text-black font-bold mb-8">
//         Bagian ini mengukur kecenderungan Anda terhadap kerutan, serta seberapa
//         keriput Anda saat ini. Beberapa pasien saya mengaku bahwa mereka berbuat
//         curang pada bagian ini hingga terlihat seperti huruf T - setelah saya
//         memergoki mereka melakukannya. Jangan lakukan itu! Anda hanya menipu
//         diri sendiri dengan menggunakan terapi pencegahan yang dapat mencegah
//         keriput. Mengubah kebiasaan Anda sekarang dapat mengubah skor Anda di
//         masa depan dari W ke T. Jadi jujurlah dan dapatkan perawatan yang tepat
//         jika Anda membutuhkannya.
//       </p>
//       {renderQuestions(questions.section4, 3)}
//     </div>,
//   ];

//   return (
//     <div role="tablist" className="tabs tabs-lifted">
//       {tabs.map((tabLabel, index) => (
//         <label
//           key={index}
//           className={`tab tab-label cursor-pointer ${
//             index === activeTabIndex ? "text-primary" : "text-black"
//           }`}
//           style={{ width: "255px", textAlign: "center" }}
//         >
//           <input
//             type="radio"
//             name="my_tabs"
//             role="tab"
//             aria-label={tabLabel}
//             style={{ display: "none" }}
//             checked={index === activeTabIndex}
//             onChange={() => handleTabChange(index)}
//           />
//           <span>{tabLabel}</span>
//         </label>
//       ))}
//       <div className="tab-content bg-base-100 border-base-300 rounded-box p-6">
//         {content[activeTabIndex]}
//       </div>
//     </div>
//   );
// };

// export default Questionnaire;
