import { useState, useEffect } from "react";
import questions from "../../utils/questions";
import { getSkinDescription } from "../../utils/skinDescriptions";

// Helper function to render questionnaire questions
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
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const [questionnaireAnswers, setQuestionnaireAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState({
    form: false,
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [results, setResults] = useState("");
  const [formInModal, setFormInModal] = useState({});
  const [skinDescription, setSkinDescription] = useState({});

  useEffect(() => {
    // Load saved form data from session storage when the component mounts
    const savedFormData = sessionStorage.getItem("formData");
    if (savedFormData) {
      const parsedFormData = JSON.parse(savedFormData);
      setFormData(parsedFormData);
      checkFormCompletion(parsedFormData);
    }

    // Load saved answers from session storage when the component mounts
    const savedAnswers = sessionStorage.getItem("questionnaireAnswers");
    if (savedAnswers) {
      const parsedAnswers = JSON.parse(savedAnswers);
      setQuestionnaireAnswers(parsedAnswers);
      checkQuestionnaireCompletion(parsedAnswers);
    }
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);
    checkFormCompletion(newFormData);
  };

  const handleAnswerChange = (sectionIndex, questionIndex, score) => {
    const newAnswers = {
      ...questionnaireAnswers,
      [`${sectionIndex}-${questionIndex}`]: score,
    };
    setQuestionnaireAnswers(newAnswers);
    checkQuestionnaireCompletion(newAnswers);
  };

  const checkFormCompletion = (form) => {
    const isFormCompleted =
      form.name.trim() !== "" &&
      form.age.trim() !== "" &&
      form.gender.trim() !== "";
    setIsCompleted((prev) => ({ ...prev, form: isFormCompleted }));
  };

  const checkQuestionnaireCompletion = (answers) => {
    const sections = [
      questions.section1,
      questions.section2,
      questions.section3,
      questions.section4,
    ];
    const completionStatus = {
      section1: false,
      section2: false,
      section3: false,
      section4: false,
    };

    sections.forEach((section, index) => {
      const sectionKey = `section${index + 1}`;
      const allAnswered = section.every((_, questionIndex) =>
        answers.hasOwnProperty(`${index + 1}-${questionIndex}`)
      );
      completionStatus[sectionKey] = allAnswered;
    });

    setIsCompleted((prev) => ({ ...prev, ...completionStatus }));
  };

  const calculateSectionScores = () => {
    const sectionScores = [0, 0, 0, 0]; // 4 sections
    for (const key in questionnaireAnswers) {
      const [sectionIndex] = key.split("-");
      sectionScores[sectionIndex - 1] += questionnaireAnswers[key];
    }
    return sectionScores;
  };

  const calculateResults = (scores) => {
    const results = {};

    // Section 1: Dry (D) or Oily (O)
    results.section1 = scores[0] <= 26 ? "D" : "O";

    // Section 2: Resistant (R) or Sensitive (S)
    results.section2 = scores[1] <= 29 ? "R" : "S";

    // Section 3: Non-pigmented (N) or Pigmented (P)
    results.section3 = scores[2] <= 28 ? "N" : "P";

    // Section 4: Tight (T) or Wrinkled (W)
    results.section4 = scores[3] <= 40 ? "T" : "W";

    // Combined result string
    results.combined = `${results.section1}${results.section2}${results.section3}${results.section4}`;

    return results;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for form and questionnaire completion
    const isFormComplete = formData.name && formData.age > 0 && formData.gender;
    const isQuestionnaireComplete = Object.values(isCompleted).every(
      (status) => status
    );

    if (isFormComplete && isQuestionnaireComplete) {
      // Save data to session storage
      sessionStorage.setItem("formData", JSON.stringify(formData));
      sessionStorage.setItem(
        "questionnaireAnswers",
        JSON.stringify(questionnaireAnswers)
      );

      // Calculate section scores and results
      const sectionScores = calculateSectionScores();
      const result = calculateResults(sectionScores);

      // Save results to session storage
      sessionStorage.setItem("results", JSON.stringify(result));
      setResults(result.combined);
      setFormInModal(formData);

      // Fetch and set the skin description based on the result
      const description = getSkinDescription(result.combined);
      setSkinDescription(description);

      // Open modal
      setIsModalOpen(true);
    } else {
      alert("Please complete the form and questionnaire before submitting.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isFormValid =
    isCompleted.form && Object.values(isCompleted).every(Boolean);

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <div className="flex space-x-4 p-4">
          <label
            htmlFor="name"
            className="form-control w-full max-w-xs input-lg w-full"
          >
            <span className="label-text">Nama Lengkap</span>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan Disini"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={handleFormChange}
              required
            />
          </label>

          <label
            htmlFor="age"
            className="form-control w-full max-w-xs input-lg w-full"
          >
            <span className="label-text">Umur</span>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Masukkan Disini"
              className="input input-bordered w-full"
              value={formData.age}
              onChange={handleFormChange}
              min="0"
              step="1"
              required
            />
          </label>

          <label
            htmlFor="gender"
            className="form-control w-full max-w-xs input-lg w-full"
          >
            <span className="label-text">Jenis Kelamin</span>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleFormChange}
              className="input input-bordered w-full"
              required
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Laki-Laki">Laki-Laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </label>
        </div>
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
              berminyak atau kering sering tidak akurat. Jangan biarkan
              prasangka Anda atau pendapat orang lain tentang kulit Anda
              memengaruhi jawaban Anda.
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
              Bagian ini mengukur kecenderungan kulit Anda untuk mengalami
              jerawat, kemerahan, kemerahan, dan gatal, semua tanda-tanda kulit
              sensitif.
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
              Bagian ini mengukur kecenderungan kulit Anda untuk membentuk
              melanin, pigmen kulit yang menghasilkan warna kulit yang lebih
              gelap serta bintik-bintik gelap, tahi lalat, dan daerah gelap
              setelah trauma. Melanin juga membantu Anda berkulit cokelat
              daripada terbakar.
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
              mereka berbuat curang pada bagian ini hingga terlihat seperti
              huruf T - setelah saya memergoki mereka melakukannya. Jangan
              lakukan itu! Anda hanya akan menyakiti diri sendiri.
            </p>
            {renderQuestions(questions.section4, 4, handleAnswerChange)}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className={`mt-4 p-2 bg-white hover:bg-[#876445] hover:text-white hover:outline-white outline outline-2 outline-[#876445] font-semibold text-[#876445] rounded ${
              isFormValid ? "btn-primary" : "btn-disabled"
            }`}
            disabled={!isFormValid}
          >
            Submit
          </button>
        </div>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open" onClick={closeModal}>
          <div
            className="modal-box relative w-3/4 max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl text-center font-bold pb-4 bg-[#F3F0EC] rounded">
              Hasil
            </h2>
            <div className="w-1/2">
              <table className="table w-full mt-4 mb-4 ml-4 border-none">
                <tbody>
                  <tr className="border-none ">
                    <th className="text-left font-normal py-1">Nama Lengkap</th>
                    <td className="font-bold text-left py-1">
                      {formInModal.name}
                    </td>
                  </tr>
                  <tr className="border-none">
                    <th className="text-left font-normal py-1">Umur</th>
                    <td className="font-bold text-left py-1">
                      {formInModal.age}
                    </td>
                  </tr>
                  <tr className="border-none">
                    <th className="text-left font-normal py-1">
                      Jenis Kelamin
                    </th>
                    <td className="font-bold text-left py-1">
                      {formInModal.gender}
                    </td>
                  </tr>
                  <tr className="border-none">
                    <th className="text-left font-normal py-1">Jenis Kulit</th>
                    <td className="font-bold text-left font-lg py-1">
                      {results}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {skinDescription && (
              <>
                <div className="collapse collapse-arrow border border-base-300 rounded-box mt-4">
                  <input
                    type="checkbox"
                    className="peer"
                    id="skinDescriptionAccordion"
                  />
                  <div className="collapse-title text-lg font-normal">
                    Informasi Jenis Kulit
                  </div>
                  <div className="collapse-content">
                    <h3 className="font-bold text-lg">
                      {skinDescription.title}
                    </h3>
                    <p>{skinDescription.description}</p>
                  </div>
                </div>

                <div className="collapse collapse-arrow border border-base-300 rounded-box mt-4">
                  <input
                    type="checkbox"
                    className="peer"
                    id="skinSolutionAccordion"
                  />
                  <div className="collapse-title text-lg font-normal">
                    Solusi Perawatan
                  </div>
                  <div className="collapse-content">
                    <p>{skinDescription.solution}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Questionnaire;
